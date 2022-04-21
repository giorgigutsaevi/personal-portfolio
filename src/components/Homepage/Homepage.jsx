/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./Homepage.css";
import { useRef, useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";

import IntroductionText from "./homepage-components/IntroductionText/IntroductionText";
import Mentions from "./homepage-components/Mentions/Mentions";
import Quote from "./homepage-components/Quote/Quote";
import BootcampText from "./homepage-components/BootcampText/BootcampText";
import LoveLetter from "./homepage-components/LoveLetter/LoveLetter";
import ZenAnimation from "./homepage-components/ZenAnimation/ZenAnimation";
import PurpleDude from "./homepage-components/PurpleDude/PurpleDude";
import FloatingAstronaut from "./homepage-components/FloatingAstronaut/FloatingAstronaut";
import Outro from "./homepage-components/Outro/Outro";
import BlurContext from "../../context/BlurContext";
import MenuContext from "../../context/MenuContext";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const { ref: myRef, inView: isQuoteVisible } = useInView(0);
  const [windowWidth, setWindowWidth] = useState("");
  let { isBlurred } = useContext(BlurContext);
  const { isClicked } = useContext(MenuContext);
  const containerRef = useRef(null);

  // useEffect hook to remove blurriness, IF the burger menu is not clicked to hide it
  useEffect(() => {
    const updateWindowWidth = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowWidth);

    const containerRefCurrent = containerRef.current;
    const containerClass = containerRefCurrent.classList;

    if (isClicked && windowWidth > 767) {
      containerClass.remove("darken");
    }

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, [windowWidth]);

  // useEffect hook for gsap animations
  useEffect(() => {
    const textAnimation = gsap.from(".introduction", {
      scale: 0.5,
      opacity: 0,
      duration: 2.2,
      y: -200,
    });

    const bootcampTextAnimation = gsap.from(".bootcampText", {
      duration: 1,
      opacity: 0,
      scale: 1,
      ease: "ease-in",
      y: 350,
      scrollTrigger: {
        trigger: ".bootcampText",
        scrub: true,
        end: "bottom 50%",
      },
    });

    const loveLetterAnimation = gsap.from(".loveLetter", {
      duration: 1,
      opacity: 0,
      scale: 1,
      ease: "ease-in",
      y: 300,
      scrollTrigger: {
        trigger: ".loveLetter",
        scrub: true,
        start: "top 80%",
        end: "bottom 50%",
      },
    });

    const quoteAnimation = gsap.from(".quote", {
      duration: 3,
      scale: 1,
      opacity: 0,
      ease: "ease-in",
      y: 130,
      scrollTrigger: {
        trigger: ".quote",
        start: "top 80%",
        end: "bottom 50%",
        scrub: true,
      },
    });

    let speed = 70; //   pixels per second
    let endX = 450;
    let duration = endX / speed;
    let ease = "sine.inOut";

    const floatingAstronaut = gsap.timeline({
      scrollTrigger: {
        trigger: ".floating-astronaut",
        start: "top 90%",
        end: "bottom 50%",
        scrub: 0.3,
      },
    });
    floatingAstronaut.to(".floating-astronaut", {
      duration: duration,
      x: endX,
      ease: ease,
    });

    const acknowledgementAnimation = gsap.from(".mentions", {
      duration: 2,
      opacity: 0,
      scale: 1,
      y: -100,
      scrollTrigger: {
        trigger: ".mentions",
        scrub: true,
        start: "top 70%",
        end: "bottom 50%",
      },
    });

    // Animation cleanup
    return () => {
      bootcampTextAnimation.kill();
      textAnimation.kill();
      loveLetterAnimation.kill();
      quoteAnimation.kill();
      floatingAstronaut.kill();
      acknowledgementAnimation.kill();
    };
  }, []);

  // useEffect hook to always start from top when navigated to this page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="homepage"
      initial={{ wid: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeOut", duration: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        ref={containerRef}
        className={
          isBlurred ? "homepage__container darken" : "homepage__container"
        }
      >
        <IntroductionText />
        <BootcampText />
        <PurpleDude />
        <LoveLetter />
        <ZenAnimation />
        <FloatingAstronaut />
        <Quote innerRef={myRef} />
        <Mentions />
        <Outro />
      </div>
    </motion.div>
  );
};

export default Homepage;
