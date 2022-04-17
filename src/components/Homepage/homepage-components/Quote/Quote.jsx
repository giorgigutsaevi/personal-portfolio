/* eslint-disable react/jsx-no-comment-textnodes */
import "./Quote.css"

const Quote = (props) => {

  return (
    <div className="quote" ref={props.innerRef}>
      <h2> <span>&lt;</span>quote wrapper<span>&gt;</span></h2>
      <p className="quote__comment">// words I try to live by</p>
      <br />
      <h3 className="quote__body" >
      Before enlightenment, chop wood, carry water.
        <br />
        <br />
        After enlightenment, chop wood, carry water.
        <br />
      </h3>
    </div>
  );
};

export default Quote;
