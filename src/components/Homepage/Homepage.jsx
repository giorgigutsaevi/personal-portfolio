import "./Homepage.css";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";

import IntroductionText from "./homepage-components/IntroductionText/IntroductionText";
import Mentions from "./homepage-components/Mentions/Mentions";
import Quote from "./homepage-components/Quote/Quote";
import BootcampText from "./homepage-components/BootcampText/BootcampText";
import LoveLetter from "./homepage-components/LoveLetter/LoveLetter";
import Illustration1 from "./homepage-components/Illustration/Illustration1";
import Illustration2 from "./homepage-components/Illustration2/Illustration2";
import Illustration3 from "./homepage-components/Illustration3/Illustration3";
import Outro from "./homepage-components/Outro/Outro";

gsap.registerPlugin(ScrollTrigger);

const Homepage = () => {
  const { ref: myRef, inView: isQuoteVisible } = useInView();
  const { ref: astronautRef, inView: isAstronautVisible } = useInView();

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
      y: 300,
      scrollTrigger: {
        trigger: ".box2",
        scrub: true,
        markers: true,
      },
    });

    const loveLetterAnimation = gsap.from(".loveLetter", {
      duration: 1,
      opacity: 0,
      scale: 1,
      y: 250,
      scrollTrigger: {
        trigger: ".box",
        scrub: true,
        markers: true,
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
        start: "top 90%",
        scrub: true,
        markers: true,
      },
    });

    let width = window.innerWidth;
    let speed = 80; //   pixels per second
    let endX = 300;
    let duration = endX / speed;
    let ease = "sine.inOut";

    // NEED THIS (ANIMATION COMING IN)
    let rocketTo = gsap.timeline({
      scrollTrigger: {
        trigger: ".box3",
        start: "top 90%",
        end: "bottom 50%",
        markers: true,
        scrub: 0.3,
      },
    });
    rocketTo.to(".box3", { duration: duration, x: endX, ease: ease });

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
        markers: true,
      },
    });

    // Animation cleanup in useEffect
    return () => {
      bootcampTextAnimation.kill();
      textAnimation.kill();
      loveLetterAnimation.kill();
      quoteAnimation.kill();
      rocketTo.kill();
      acknowledgementAnimation.kill();
    };
  }, []);

  // useEffect hook for Intersection Observer API
  // useEffect(()=>{
  //   console.log("my ref ->", myRef.current)
  //   const observer = new IntersectionObserver((entries)=> {
  //     const entry = entries[0]
  //     setIsQuoteVisible(entry.isIntersecting)
  //     // console.log('entry', entry)
  //   })
  //   observer.observe(myRef.current)
  // }, [])
  // console.log('isQuoteVisible? ->', isQuoteVisible)

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
        <Illustration2 />
        <LoveLetter />
        <Illustration1 />
        <Illustration3 />
        <Quote innerRef={myRef} />
        <Mentions />
        <Outro/>
      </div>
    </motion.div>
  );
};

export default Homepage;
