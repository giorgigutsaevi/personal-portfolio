/* eslint-disable react-hooks/exhaustive-deps */
import "./Contact.css";
import { useEffect, useState, useContext, useRef } from "react";
import { motion } from "framer-motion";
import ContactIntroduction from "./contact-components/ContactIntroduction/ContactIntroduction";
import ContactForm from "./contact-components/ContactForm/ContactForm";
import AtomicStudent from "./contact-components/AtomicStudent/AtomicStudent";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MenuContext from "../../context/MenuContext";
import BlurContext from "../../context/BlurContext";
import Ufo from "./Ufo/Ufo";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [contactWindowWidth, setContactWindowWidth] = useState("");
  const { isBlurred } = useContext(BlurContext);
  const { isClicked } = useContext(MenuContext);

  const contactRef = useRef(null);

  // useEffect hook to remove blurriness, IF the burger menu is not clicked to hide it on the (Contact page)
  useEffect(() => {
    const updateContactWindowWidth = () => {
      const newProjectWidth = window.innerWidth;
      setContactWindowWidth(newProjectWidth);
    };

    window.addEventListener("resize", updateContactWindowWidth);

    const contactRefCurrent = contactRef.current;
    const contactRefClass = contactRefCurrent.classList;

    if (isClicked && contactWindowWidth > 767) {
      contactRefClass.remove("darken");
    }

    if (contactRefClass.contains("darken") && window.innerWidth > 767) {
      contactRefClass.remove("darken");
    }

    // So the user always starts from the top once navigated to Contact page
    window.scrollTo(0, 0);

    // cleanup function
    return () => {
      window.removeEventListener("resize", updateContactWindowWidth);
    };
  }, [contactWindowWidth]);

  useEffect(() => {
    const contactIntroduction = gsap.from(".contact-introduction", {
      opacity: 0,
      duration: 2,
      x: -300,
    });

    const formAnimation = gsap.from(".contactForm__container ", {
      duration: 2,
      x: 300,
    });

    const informationBoxAnimation = gsap.from(".contactForm__infobox", {
      duration: 2,
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
      <div
        ref={contactRef}
        className={isBlurred ? "contact darken" : "contact"}
      >
        <ContactIntroduction />
        <Ufo/>
        {/* <AtomicStudent /> */}
        <ContactForm />
      </div>
    </motion.div>
  );
};

export default Contact;
