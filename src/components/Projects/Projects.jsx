/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import "./Projects.css";
import { useEffect, useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import ProjectIntroduction from "./project-components/ProjectIntroduction/ProjectIntroduction";
import ProjectList from "./project-components/ProjectList/ProjectList";
import SnazzyOcto from "./project-components/SnazzyOcto/SnazzyOcto";
import BlurContext from "../../context/BlurContext";
import MenuContext from "../../context/MenuContext";

const Projects = () => {
  const [projectWindowWidth, setProjectWindowWidth] = useState("");
  const { isBlurred } = useContext(BlurContext);
  const { isClicked, setIsClicked } = useContext(MenuContext);

  const projectRef = useRef(null);

  // useEffect hook to remove blurriness, IF the burger menu is not clicked to hide it on the PROJECT page
  useEffect(() => {
    const updateProjectWindowWidth = () => {
      const newProjectWidth = window.innerWidth;
      setProjectWindowWidth(newProjectWidth);
    };

    window.addEventListener("resize", updateProjectWindowWidth);

    const projectRefCurrent = projectRef.current;
    const projectRefClass = projectRefCurrent.classList;

    if (isClicked && projectWindowWidth > 767) {
      projectRefClass.remove("darken");
    }

    if (projectRefClass.contains("darken") && (window.innerWidth > 767)){
      projectRefClass.remove("darken");
    }

    // So the user always starts from the top once navigated to Projects page
    window.scrollTo(0, 0);
    
    // cleanup function
    return () => {
      window.removeEventListener("resize", updateProjectWindowWidth);
    };
  }, [projectWindowWidth]);


  // useEffect hook for animations and animation cleanup
  useEffect(() => {
    const ProjectIntroduction = gsap.from(".project-introduction", {
      scale: 0.5,
      opacity: 0,
      duration: 2.2,
      y: -200,
    });

    const projectList = gsap.from(".projectList", {
      scale: 0.5,
      duration: 2.2,
      x: 100,
    });

    return () => {
      ProjectIntroduction.kill();
      projectList.kill();
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
        ref={projectRef}
        className={isBlurred ? "projects darken" : "projects"}
      >
        <SnazzyOcto />
        <ProjectIntroduction />
        <ProjectList />
      </div>
    </motion.div>
  );
};

export default Projects;
