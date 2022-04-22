import "./ContactIntroduction.css";

const ContactIntroduction = () => {
  return (
    <div className="contact-introduction">
      <h1 className="contact-introduction__heading">
        <div className="contactDot"></div>
        <span className="contact-introduction__title">contact</span>
        <span className="contact-introduction__selected">('selected')</span>
        <br />
      </h1>
      <p className="contact__work">let's work together?</p>
    </div>
  );
};

export default ContactIntroduction;
