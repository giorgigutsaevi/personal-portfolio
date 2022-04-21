import "./Projects.css";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ProjectIntroduction from "./project-components/ProjectIntroduction/ProjectIntroduction";
import ProjectList from "./project-components/ProjectList/ProjectList";
import SnazzyOcto from "./project-components/SnazzyOcto/SnazzyOcto";

const Projects = () => {

  useEffect(() => { 
    const ProjectIntroduction = gsap.from(".project-introduction", {
      scale: 0.5,
      opacity: 0,
      duration: 2.2,
      y: -200,
    });

    const projectList = gsap.from('.projectList', {
      scale: 0.5,
      duration: 2.2,
      x: 100,
    })


    return () => {
      ProjectIntroduction.kill()
      projectList.kill()
    }

    
  }, [])

  return (
    <motion.div
      initial={{ wid: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="projects">
        <SnazzyOcto/>
        <ProjectIntroduction />
        <ProjectList/>
      </div>
    </motion.div>
  );
};

export default Projects;
