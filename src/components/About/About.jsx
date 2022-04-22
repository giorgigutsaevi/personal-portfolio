import "./About.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import AboutIntroduction from "./about-components/AboutIntroduction/AboutIntroduction";
import Skills from "./about-components/Skills/Skills";
import Languages from "./about-components/AboutLanguages/Languages";
import Interests from "./about-components/Interests/Interests";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import UFO from "./about-components/UFO/UFO";
gsap.registerPlugin(ScrollTrigger);

const About = () => {


    // useEffect hook for animations and animation cleanup
    useEffect(() => {
      const aboutIntroduction = gsap.from(".about-introduction", {
        opacity: 0,
        duration: 2.2,
        x: -200,
      });
  
      const skillsAnimation = gsap.from(".skills ", {
        duration: 2.2,
        x: 300,
      });

      const languagesAnimation = gsap.from(".languages", {
        duration: 2,
        opacity: 0,
        ease: "ease-in",
        x: -300,
      });

      const interestsAnimation = gsap.from(".interests", {
        duration: 2,
        opacity: 0,
        ease: "ease-in",
        x: -300,
      });
  
      return () => {
        aboutIntroduction.kill();
        skillsAnimation.kill();
        languagesAnimation.kill();
        interestsAnimation.kill();
      };
    }, []);

  return (
    <motion.div
      initial={{ wid: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="about">
        <UFO/>
        <AboutIntroduction/>
        <Skills/>
        <Languages/>
        <Interests/>
      </div>
    </motion.div>
  );
};

export default About;
