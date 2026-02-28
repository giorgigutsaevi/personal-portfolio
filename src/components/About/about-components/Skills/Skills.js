import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <div className="skills__title--main">My skills</div>
      <div className="skills__body--columns">
        <div className="skills__body--column">
          Cloud (AWS) Serverless Architecture, Frontend, Backend, CI/CD, Test Driven Development, Object Oriented Design, debugging,
          Agile, dabbling in UX/UI
        </div>
        <div className="skills__body--column column2">
          Lambda, Lex, Cognito, DynamoDB, IAM, S3, JavaScript, Python, React.JS, MongoDB, Express.JS, Ruby, Ruby on
          Rails, Tailwind CSS, GSAP, PostgreSQL, Matter.JS 
        </div>
        <div className="skills__body--column">Vitest, Jest, Chai, Mocha, RSpec, React Testing Library</div>
				<div className="skills__body--column colum4">
          Communication, Problem solving, Empathy, Fast-Learning,
          Pragmatism
        </div>
      </div>
    </div>
  );
};

export default Skills;
