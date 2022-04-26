import "./ContactForm.css";
import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import SendIcon from "@mui/icons-material/Send";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import MapIcon from "@mui/icons-material/Map";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { BsMedium } from "react-icons/bs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const refForm = useRef();

  const handleEmailClick = () => {
    window.open(
      "mailto:giorgi.gutsaev@gmail.com?subject=Subject&body=Body%20goes%20here"
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h4cc5y9",
        "template_14uoo5o",
        refForm.current,
        "RkXiEfbxQAwrjiH4P"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email Sent", {
            icon: "🚀",
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contactForm">
      <ToastContainer
        autoClose={3000}
        theme="theme"
        draggable={false}
        toastClassName='toastContainer'
        progressClassName="toastProgress"
        bodyClassName="toastBody"
      />
      <form
        ref={refForm}
        className="contactForm__container"
        onSubmit={sendEmail}
      >
        <label className="name__field contactForm__label" htmlFor="name">
          <input
            type="text"
            id="name"
            className="contactForm__input"
            required
            name="name"
          />
          <span className="name__placeholder">your name</span>
        </label>

        <label className="email__field contactForm__label" htmlFor="email">
          <input
            type="email"
            id="email"
            className="contactForm__input"
            name="email"
            required
          />
          <span className="email__placeholder">your email</span>
        </label>

        <label className="subject__field contactForm__label" htmlFor="subject">
          <input
            type="text"
            id="subject"
            name="subject"
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
          name="message"
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
