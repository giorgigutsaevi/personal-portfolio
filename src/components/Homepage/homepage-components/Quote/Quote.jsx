import "./Quote.css"
import { forwardRef } from "react";

const Quote = (props) => {

  return (
    <div className="quote" ref={props.innerRef}>
      <h1 className="quote__title"> &#10094;/quote wrapper&#10095;</h1>
      <h3 className="quote__body" >
        “Before enlightenment, chop wood, carry water.
        <br />
        After enlightenment, chop wood, carry water.”
        <br />
        <br />zen saying
      </h3>
    </div>
  );
};

export default Quote;
