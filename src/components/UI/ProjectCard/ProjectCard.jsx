import classes from "./ProjectCard.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const ProjectCard = ({
  darkMode,
  title,
  techStack,
  description,
  projectImage,
  githubLink,
  demoLink,
  primary,
  secondary,
}) => {
  let projectClasses = classes.project;

  darkMode && (projectClasses = `${projectClasses} ${classes.darkMode}`);

  const cardVariants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0.1 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={cardVariants}
      className="square"
    >
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
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href={demoLink}
                target="_blank"
                className={classes.description_link}
                rel="noreferrer"
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
            color: #${secondary};
          }
          a:hover {
            color: #${primary};
          }
        `}</style>
      </li>
    </motion.div>
  );
};

export default ProjectCard;
