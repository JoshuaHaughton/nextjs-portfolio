import ProjectCard from "../ProjectCard/ProjectCard";
import classes from "./Projects.module.css";
import projects from "./projectData";

const Projects = () => {
  return (
    <div className={classes.container} id="projects">
      <div className={classes.row}>
        <h1>
          Here are some of my
          <span className={classes.secondary}> projects</span>
        </h1>
        <ul>
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              techStack={project.techStack}
              description={project.description}
              projectImage={project.projectImage}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
