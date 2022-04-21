import { projectData } from "./projectData";
import "./ProjectList.css";
import ProjectItem from "../ProjectItem/ProjectItem";

const ProjectList = () => {
  const items = projectData.map((project) => {
    return (
      <ProjectItem
        key={project.id}
        projectName={project.projectName}
        projectDescription={project.projectDescription}
        stack={project.stack}
        link={project.link}
      />
    );
  });

  return <div className="projectList">{items}</div>;
};

export default ProjectList;
