/* eslint-disable no-unused-vars */
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Header = () => {
  const [selectedNav, setSelectedNav] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNavClick = (e) => {
    const text = e.target.innerText;
    setSelectedNav(text);
  };

  const handleNavSlide = () => {
    setShowMenu((prevState) => !prevState);
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  });

  
  return (
    <nav className={scrolled ? "header scrolled" : "header"}>
      <div className="header__chosen--link">{selectedNav}</div>
      <div
        className={!showMenu ? "header__navlinks" : "header__navlinks active"}
      >
        <NavLink onClick={handleNavClick} className="header__link" to="/">
          giorgi.is()
        </NavLink>
        <NavLink
          onClick={handleNavClick}
          className="header__link"
          to="/projects"
        >
          .projects()
        </NavLink>
        <NavLink onClick={handleNavClick} className="header__link" to="/about">
          .about()
        </NavLink>
        <NavLink
          onClick={handleNavClick}
          className="header__link"
          to="/contact"
        >
          .contact()
        </NavLink>
        <div className="header__link--logos">
          <a
            className="header__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/giorgigutsaevi"
          >
            <GitHubIcon className="" />
          </a>

          <a
            className="header__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/giorgigutsaev/"
          >
            <LinkedInIcon />
          </a>
        </div>
      </div>
      <div className="burgermenu" onClick={handleNavSlide}>
        <div className="burgermenu__dot"></div>
        <div className="burgermenu__dot"></div>
        <div className="burgermenu__dot"></div>
      </div>
    </nav>
  );
};

export default Header;
