import "./About.css";
import { motion } from "framer-motion";
import AboutIntroduction from "./about-components/AboutIntroduction/AboutIntroduction";
import Skills from "./about-components/Skills/Skills";
import Languages from "./about-components/AboutLanguages/Languages";
import Interests from "./about-components/Interests/Interests";

const About = () => {
  return (
    <motion.div
      initial={{ wid: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="about">
        {/* <img className='about__portrait' src='/images/portrait2.JPG'/> */}
        <AboutIntroduction/>
        <Skills/>
        <Languages/>
        <Interests/>
      </div>
    </motion.div>
  );
};

export default About;
