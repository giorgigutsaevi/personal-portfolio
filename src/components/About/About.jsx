import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ wid: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="abouth1">About Page</h1>
    </motion.div>
  );
};

export default About;
