import "./ContactForm.css";
import SendIcon from "@mui/icons-material/Send";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import MapIcon from "@mui/icons-material/Map";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { BsMedium } from "react-icons/bs";

import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

const ContactForm = () => {
  const handleEmailClick = () => {
    window.open(
      "mailto:giorgi.gutsaev@gmail.com?subject=Subject&body=Body%20goes%20here"
    );
  };

  return (
    <div className="contactForm">
      <form className="contactForm__container">
        <label className="name__field contactForm__label" htmlFor="name">
          <input
            type="text"
            id="name"
            className="contactForm__input"
            required
          />
          <span className="name__placeholder">your name</span>
        </label>

        <label className="email__field contactForm__label" htmlFor="email">
          <input
            type="email"
            id="email"
            className="contactForm__input"
            required
          />
          <span className="email__placeholder">your email</span>
        </label>

        <label className="subject__field contactForm__label" htmlFor="subject">
          <input
            type="text"
            id="subject"
            className="contactForm__input"
            required
          />
          <span className="subject__placeholder">your subject</span>
        </label>

        <label htmlFor="message" className="message__label">
          your message
        </label>
        <textarea
          className="message__field"
          id="message"
          cols="27"
          rows="7"
          placeholder="“When the son of the deposed king of Nigeria emails you directly, asking for help, you help! His father ran the freaking country! Okay?” - Michael Scott"
        ></textarea>
        <button className="contactForm__button">
          send it <SendIcon />
        </button>
      </form>
      <div className="contactForm__infobox">
        <div className="contactForm__infobox--details">
          <div className="smalltag__container">
            <p className="infobox__small">contact details</p>
          </div>
          <div className="email-container">
            <EmailIcon sx={{ fontSize: 31, color: "#672ae9" }} />
            <Link to="#" onClick={handleEmailClick} className="email__link">
              <p>giorgi.gutsaevi@gmail.com</p>
            </Link>
          </div>

          <div className="phone-container">
            <LocalPhoneIcon sx={{ fontSize: 31, color: "#672ae9" }} />
            <p>+447398467506</p>
          </div>

          <div className="location-container">
            <MapIcon sx={{ fontSize: 31, color: "#672ae9" }} />
            <p>London, United Kingdom</p>
          </div>
        </div>
        <div className="contactForm__infobox--socials">
          <div>
            <small className="contactForm__infobox--heading">socials</small>
          </div>
          <div className="socials__wrapper">
            <GitHubIcon className="socials__icon" />
            <a
              className="socials__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/giorgigutsaevi"
            >
              Github
            </a>
          </div>
          <div className="socials__wrapper">
            <LinkedInIcon className="socials__icon" />
            <a
              className="socials__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/giorgigutsaev/"
            >
              LinkedIn
            </a>
          </div>
          <div className="socials__wrapper">
            <TwitterIcon className="socials__icon" />
            <a
              className="socials__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/mapleagedcheese"
            >
              Twitter
            </a>
          </div>
          <div className="socials__wrapper">
            <BsMedium className="socials__icon" />
            <a
              className="socials__link"
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@giorgi.gutsaev"
            >
              Medium
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
