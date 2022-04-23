/* eslint-disable react/jsx-no-comment-textnodes */
import "./ProjectIntroduction.css"

const ProjectIntroduction = () => {
  return (
    <div className="project-introduction">
      <h1 className="project-introduction__heading">
        <span className="project-introduction__title"><div className="projectDot"></div>projects</span><span className="project-introduction__selected">('selected')</span>
        <br />
        <p className="project-introduction__list">// A list of my personal projects (as of now).</p>
        <p className="project-introduction__list">// Click on the project title to go to the respective github repo.</p>
      </h1>
    </div>
  );
};

export default ProjectIntroduction;
