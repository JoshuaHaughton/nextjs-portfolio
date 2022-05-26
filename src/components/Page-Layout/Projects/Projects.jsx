import classes from "./Projects.module.css";
import projects from "./projectData";
import { useSelector } from "react-redux";
import ProjectCard from "../../UI/ProjectCard/ProjectCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCircleArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Projects = () => {
  const showModal = useSelector((state) => state.modal.showModal);
  const darkMode = useSelector((state) => state.darkMode.showDarkMode);

  let projectsClasses = classes.container;

  showModal && (projectsClasses = `${classes.container} ${classes.showModal}`);
  darkMode && (projectsClasses = `${projectsClasses} ${classes.darkMode}`);

  return (
    <div className={projectsClasses} id="projects">
      <div className={classes.row}>
        <div className={classes.background}></div>
        <h1>
          Here are some of my
          <span className={classes.secondary}>
            {" "}
            projects{" "}
            <Link href={"#project1"}>
              <a className={classes.button_wrapper}>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={classes.project_button}
                />
              </a>
            </Link>
          </span>
        </h1>
        <ul>
          {projects.map((project, i) => (
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
              projectNumber={i + 1}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
