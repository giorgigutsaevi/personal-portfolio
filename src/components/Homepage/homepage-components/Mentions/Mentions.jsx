/* eslint-disable react/jsx-no-comment-textnodes */
import "./Mentions.css";

const Mentions = () => {
  return (
    <div className="mentions">
      {/* <img
			src='/images/loading-gif.gif'
			alt='lab-gif'
			/> */}
      <div className="mentions__list">
        <p className="mentions__codeSymb">&#10096; &#10097;</p>
        <h3 className="mentions__comment">// Made with</h3>
        <h5>React.JS</h5>
        <h5>GSAP</h5>
        <h5>ScrollTrigger</h5>
        <h5>FramerMotion</h5>
        <h5>React Intersection Observer API</h5>
        <h5 className='acknowledgement'>Special thanks to</h5>
        <h4>Icons 8 from Ouch!</h4>
      </div>
    </div>
  );
};

export default Mentions;
