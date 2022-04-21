import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__title--main">My skills</div>
      <div className="skills__body--columns">
        <div className="skills__body--column">
          Frontend, Backend, Test Driven Development, Object Oriented Design,
          Agile, amateur UX/UI
        </div>
        <div className="skills__body--column">
          JavaScript, React.JS, Node.JS, MongoDB, Express.JS, Ruby, Ruby on
          Rails, Tailwind CSS, Bootstrap, GSAP, PostgreSQL, Matter.js
        </div>
        <div className="skills__body--column">Jest, Chai, Mocha, Rspec</div>
				<div className="skills__body--column">
          Communication, Problem solving, Empathy, Fast-Learning,
          Pragmatism, Trivia 
        </div>
      </div>
    </div>
  );
};

export default Skills;
