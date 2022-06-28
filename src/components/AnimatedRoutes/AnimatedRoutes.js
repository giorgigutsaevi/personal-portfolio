import React from "react";
import { AnimatePresence } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

import Projects from "../Projects/Projects";
import Homepage from "../Homepage/Homepage";
import About from "../About/About";
import Contact from "../Contact/Contact";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AnimatedRoutes;
