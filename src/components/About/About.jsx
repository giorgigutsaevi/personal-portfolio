/* eslint-disable react-hooks/exhaustive-deps */
import "./About.css";
import { useEffect, useState, useContext, useRef } from "react";
import AboutIntroduction from "./about-components/AboutIntroduction/AboutIntroduction";
import Skills from "./about-components/Skills/Skills";
import Languages from "./about-components/AboutLanguages/Languages";
import Interests from "./about-components/Interests/Interests";
import UFO from "./about-components/UFO/UFO";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import MenuContext from "../../context/MenuContext";
import BlurContext from "../../context/BlurContext";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [aboutWindowWidth, setAboutWindowWidth] = useState("");
  const { isClicked } = useContext(MenuContext);
  const { isBlurred } = useContext(BlurContext);
  const aboutRef = useRef(null);

  // useEffect hook to remove blurriness, IF the burger menu is not clicked to hide it
  useEffect(() => {
    const updateAboutWindowWidth = () => {
      const newWidth = window.innerWidth;
      setAboutWindowWidth(newWidth);
    };

    window.addEventListener("resize", updateAboutWindowWidth);

    const aboutRefCurrent = aboutRef.current;
    const aboutClass = aboutRefCurrent.classList;

    if (isClicked && aboutWindowWidth > 767) {
      aboutClass.remove("darken");
    }

    if (aboutClass.contains("darken") && window.innerWidth > 767) {
      aboutClass.remove("darken");
    }

    // So the user always starts from the top once navigated to About Page
    window.scrollTo(0, 0);

    // cleanup function below
    return () => {
      window.removeEventListener("resize", updateAboutWindowWidth);
    };
  }, [aboutWindowWidth]);

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
      <div ref={aboutRef} className={isBlurred ? "about darken" : "about"}>
        {/* <img src="/images/portrait1.jpg" alt="" className="portrait" /> */}
        <UFO />
        <AboutIntroduction />
        <Skills />
        <Languages />
        <Interests />
      </div>
    </motion.div>
  );
};

export default About;
