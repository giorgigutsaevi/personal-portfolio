import "./Homepage.css";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap, TimelineLite } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import IntroductionText from "./homepage-components/IntroductionText/IntroductionText";
import Acknowledgement from "./homepage-components/Acknowledgement/Acknowledgement";
import Illustration1 from "./homepage-components/Illustration/Illustration1";
import Quote from "./homepage-components/Quote/Quote";
import BootcampText from "./homepage-components/BootcampText/BootcampText";
import LoveLetter from "./homepage-components/LoveLetter/LoveLetter";
gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {

  useEffect(() => {
  

    const textAnimation = gsap.from(".introduction", {
      scale: 0,
      opacity: 0,
      duration: 4,
      y: -400,
    });


    // const bootcampTextAnimation = gsap.from(".bootcampText", {
    //   opacity: 0,
    //   duration: 4,
    //   y: -400,
    //   scrollTrigger: {
    //     trigger: ".illustration1",
    //     scrub: true,
    //     markers: true,
    //   },
    // });

    // NEED THIS
    // const animation1 = gsap.from(".box", {
    //   x: 300,
    //   duration: 3,
    //   opacity: 0,
    //   scale: 0.5,
    //   // repeat: -1,
    //   yoyo: true,
    //   scrollTrigger: {
    //     trigger: ".bootcampText",
    //     start: "top center",
    //     scrub: true,
    //     markers: true,
    //   },


    return () => {
      // animation1.kill();
      textAnimation.kill();
    };
  }, []);

  return (
    <motion.div
      className="homepage"
      initial={{ wid: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* <h1>Homepage</h1> */}
      <div className="homepage__container">
        <IntroductionText />
        <BootcampText />
        <LoveLetter />
        <Illustration1 />
        <Quote />
        <Acknowledgement />
      </div>
    </motion.div>
  );
};

export default Homepage;
