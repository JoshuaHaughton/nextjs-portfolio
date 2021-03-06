import classes from "./Projects.module.css";
import projects from "./projectData";
import { useSelector } from "react-redux";
import ProjectCard from "../../UI/ProjectCard/ProjectCard";

const Projects = () => {
  const showModal = useSelector((state) => state.modal.showModal);
  const darkMode = useSelector((state) => state.darkMode.showDarkMode);
  
  let projectsClasses = classes.container
  
  showModal && (projectsClasses = `${classes.container} ${classes.showModal}`)
  darkMode && (projectsClasses = `${projectsClasses} ${classes.darkMode}`)
  
  return (
    <div className={projectsClasses} id="projects">
      <div className={classes.row}>
        <h1>
          Here are some of my
          <span className={classes.secondary}> projects</span>
        </h1>
        <ul>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              darkMode={darkMode}
              title={project.title}
              techStack={project.techStack}
              description={project.description}
              projectImage={project.projectImage}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              primary={project.primary}
              secondary={project.secondary}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
