/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import "./Header.css";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect, useContext, useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { BsMedium } from "react-icons/bs";
import BlurContext from "../../context/BlurContext";
import MenuContext from "../../context/MenuContext";

const Header = () => {
  const [selectedNav, setSelectedNav] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState("");

  const { isBlurred, SetIsBlurred } = useContext(BlurContext);
  const { isClicked, setIsClicked } = useContext(MenuContext);
  const headerRef = useRef(null);

  const handleNavClick = (e) => {
    const text = e.target.innerText;
    setSelectedNav(text);
  };

  const handleNavSlide = () => {
    setShowMenu((prevState) => !prevState);
    SetIsBlurred((prevState) => !prevState);
    setIsClicked((prevClickState) => !prevClickState);
  };

  const handleNavigationClick = () => {
    handleNavClick();
    setIsClicked((prevClickState) => !prevClickState);
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
    const updateWindowWidth = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowWidth);
    window.addEventListener("scroll", handleScroll);

    const headerLink = headerRef.current;
    const classList = headerLink.className;
    const dividedClassList = classList.split(" ");

    if (windowWidth > 767 && dividedClassList.includes("active")) {
      headerRef.current.classList.remove("active");
      setIsClicked((prevState) => !prevState);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, [windowWidth]);

  return (
    <nav className={scrolled ? "header scrolled" : "header"}>
      <div className="header__chosen--link">{selectedNav}</div>
      <div
        ref={headerRef}
        className={!showMenu ? "header__navlinks" : "header__navlinks active"}
      >
        <NavLink 
          onClick={handleNavigationClick} 
          className="header__link" 
          to="/"
        >
          gio.is()
        </NavLink>

        <NavLink
          onClick={handleNavigationClick}
          className="header__link"
          to="/projects"
        >
          .projects()
        </NavLink>

        <NavLink onClick={handleNavigationClick} className="header__link" to="/about">
          .about()
        </NavLink>

        <NavLink
          onClick={handleNavigationClick}
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
          <a
            className="header__link"
            target="_blank"
            rel="noopener noreferrer"
            href="https://medium.com/@giorgi.gutsaev"
          >
            <BsMedium />
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
