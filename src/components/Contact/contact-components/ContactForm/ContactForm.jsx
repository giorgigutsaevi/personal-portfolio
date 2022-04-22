import "./ContactForm.css";
import SendIcon from '@mui/icons-material/Send';
import { useEffect, useState, useRef } from "react";

const ContactForm = () => {

  return (
    <div className="contactForm">
      <form className="contactForm__container">

        <label className='name__field contactForm__label' htmlFor="name">
				<input
          type="text"
          id="name"
          className="contactForm__input"
					required
        />
				<span className="name__placeholder">your name</span>
				</label>

        <label className='email__field contactForm__label' htmlFor="email">
				<input
          type="email"
          id="email"
          className="contactForm__input"
					required
        />
				<span className="email__placeholder">your email</span>
				</label>

				<label className='subject__field contactForm__label' htmlFor="subject">
				<input
          type="text"
          id="subject"
          className="contactForm__input"
					required
        />
				<span className="subject__placeholder">your subject</span>
				</label>

				<label htmlFor="message" className="message__label">your message</label>
				<textarea 
					className="message__field"
					id="message" 
					cols="27" 
					rows="7"
					placeholder="“When the son of the deposed king of Nigeria emails you directly, asking for help, you help! His father ran the freaking country! Okay?”       - Michael Scott"
					>					
				</textarea>
        <button className="contactForm__button">send it <SendIcon/></button>
      </form>
      <div className="contactForm__infobox">
        <div className="contactForm__infobox--details">
          <small>contact details</small>
          <p>giorgi.gutsaevi@gmail.com</p>
          <p>+447398467506</p>
					<p>London, UK</p>
        </div>
        <div className="contactForm__infobox--socials">
          <small>socials</small>
          <p>Github</p>
          <p>LinkedIn</p>
          <p>Twitter</p>
          <p>Medium</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
