/* eslint-disable react/jsx-no-comment-textnodes */
import "./Quote.css"

const Quote = (props) => {

  return (
    <div className="quote" data-testid='quote' ref={props.innerRef}>
      <p className="quote__comment">// words I try to live by</p>
      <br />
      <h3 className="quote__body" >
      Before enlightenment, chop wood, and carry water.
        <br />
        <br />
        After enlightenment, chop wood, and carry water.
        <br />
      </h3>
    </div>
  );
};

export default Quote;
