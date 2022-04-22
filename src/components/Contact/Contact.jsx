import "./Contact.css";
import { useEffect, useState, useContext, useRef } from "react";
import { motion } from "framer-motion";
import ContactIntroduction from "./contact-components/ContactIntroduction/ContactIntroduction";
import ContactForm from "./contact-components/ContactForm/ContactForm";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MenuContext from "../../context/MenuContext";
import BlurContext from "../../context/BlurContext";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    const contactIntroduction = gsap.from(".contact-introduction", {
      opacity: 0,
      duration: 2.5,
      x: -300,
    });

    const formAnimation = gsap.from(".contactForm__container ", {
      duration: 2.2,
      y: 300,
    });

    const informationBoxAnimation = gsap.from(".contactForm__infobox", {
      duration: 2.5,
      x: 300,
    });

    return () => {
      contactIntroduction.kill();
      formAnimation.kill();
      informationBoxAnimation.kill();
    };
  }, []);

  return (
    <motion.div
      initial={{ wid: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="contact">
        <ContactIntroduction />
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default Contact;
