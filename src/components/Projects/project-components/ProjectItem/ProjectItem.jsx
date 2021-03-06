import "./ProjectItem.css";

const ProjectItem = ({ projectName, projectDescription, stack, link }) => {
  return (
    <div className="projectItem">
      <div className="projectItem__wraper">
        <a
          className="projectItem__box"
          target="_blank"
          rel="noopener noreferrer"
          href={`${link}`}
        >
          <img
            className="projectItem__image"
            src="/images/purr-box.png"
            alt="project-img"
          />
        </a>
        <div className="projectItem__body">
          <a
            className="projectItem__link"
            target="_blank"
            rel="noopener noreferrer"
            href={`${link}`}
          >
            <h2 className="projectItem__title">{projectName}</h2>
          </a>
          <h5 className="projectItem__description">{projectDescription}</h5>
          <h6 className="projectItem__stack">
            Tech Stack: <span className="stack__list">{stack}</span>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
