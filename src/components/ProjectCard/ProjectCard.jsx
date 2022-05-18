import classes from "./ProjectCard.module.css";
// import projectPhoto from "../../../public/Ecom-Project.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLink } from "@fortawesome/free-solid-svg-icons";
import GithubLogo from "../../../public/github-logo.png";
// import GithubLogo from "../../../public/github-logo.svg";

const ProjectCard = ({
  darkMode,
  title,
  techStack,
  description,
  projectImage,
  githubLink,
  demoLink, 
  primary, 
  secondary
}) => {

  let projectClasses = classes.project

  darkMode && (projectClasses = `${projectClasses} ${classes.darkMode}`)


  return (
    <li className={projectClasses}>
      <div className={classes.project_wrapper}>
        <Image
          src={projectImage}
          alt={`${title} Photo`}
          className={classes.image}
          quality={100}
          priority={true}
          unoptimized={true}
        />
        <div className={classes.project_background}></div>
        <div className={classes.description}>
          <h3 className={classes.title}>{title}</h3>
          <h4 className={classes.subtitle}>{techStack}</h4>
          <p className={classes.description_paragraph}>{description}</p>
          <div className={classes.description_links}>
            <a
              href={githubLink}
              target="_blank"
              className={classes.description_link}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href={demoLink}
              target="_blank"
              className={classes.description_link}
            >
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        h3 {
          color: #${primary};
        }
        h4 {
          color: #${secondary}
        }
        a:hover {
          color: #${primary};
        }
      `}</style>
    </li>
  );
};

export default ProjectCard;
