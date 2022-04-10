import "./Projects.css";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div
      initial={{ wid: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1 className="projects-h1">Projects View</h1>
    </motion.div>
  );
};

export default Projects;
