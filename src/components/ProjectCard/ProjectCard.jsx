import classes from "./ProjectCard.module.css";
// import projectPhoto from "../../../public/Ecom-Project.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import GithubLogo from "../../../public/github-logo.svg";

const ProjectCard = ({
  title,
  techStack,
  projectDescription,
  projectImage,
  githubLink,
  demoLink,
}) => {
  return (
    <li className={classes.project}>
      <div className={classes.project_wrapper}>
        <Image
          src={projectImage}
          alt={`${title} Photo`}
          className={classes.image}
        />
        <div className={classes.project_background}></div>
        <div className={classes.description}>
          <h3 className={classes.title}>{title}</h3>
          <h4 className={classes.subtitle}>{techStack}</h4>
          <p className={classes.description_paragraph}>{projectDescription}</p>
          <div className={classes.description_links}>
            <a
              href={githubLink}
              target="_blank"
              className={classes.description_link}
            >
              {/* <i className="fab fa-github"></i> */}
              <figure className={classes.figure}>
                <Image
                  src={GithubLogo}
                  layout={"fill"}
                  className={classes.github_logo}
                />
              </figure>
            </a>
            <a
              href={demoLink}
              target="_blank"
              className={classes.description_link}
            >
              {/* <i className="fas fa-link"></i> */}
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectCard;
