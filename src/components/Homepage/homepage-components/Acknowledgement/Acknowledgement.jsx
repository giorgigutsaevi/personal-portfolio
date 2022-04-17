import "./Acknowledgement.css";

const Acknowledgement = () => {
  return (
    <div className="acknowledgement">
      {/* <img
			src='/images/totoro.gif'
			alt='lab-gif'
			/> */}
      <div>
        <p>&#10096; &#10097;</p>
        <h3>// Made with</h3>
        <h5>React.js</h5>
        <h5>GSAP</h5>
        <h5>ScrollTrigger</h5>
        <h5>FramerMotion</h5>
        <h5>React Intersection Observer API</h5>
      </div>
      <div>
        Thanks for visiting my website!
				Check out my <span>.projects() tab</span> for more details.
      </div>
    </div>
  );
};

export default Acknowledgement;
