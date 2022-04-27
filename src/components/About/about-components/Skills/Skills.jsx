import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__title--main">My skills</div>
      <div className="skills__body--columns">
        <div className="skills__body--column">
          Frontend, Backend, Test Driven Development, Object Oriented Design, debugging,
          Agile, dabbling in UX/UI
        </div>
        <div className="skills__body--column column2">
          JavaScript, React.JS, Node.JS, MongoDB, Express.JS, Ruby, Ruby on
          Rails, Tailwind CSS, Bootstrap, GSAP, PostgreSQL, Matter.JS 
        </div>
        <div className="skills__body--column">Jest, Chai, Mocha, RSpec, React Testing Library</div>
				<div className="skills__body--column colum4">
          Communication, Problem solving, Empathy, Fast-Learning,
          Pragmatism
        </div>
      </div>
    </div>
  );
};

export default Skills;
