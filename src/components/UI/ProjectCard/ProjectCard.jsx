import classes from "./ProjectCard.module.css";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleDoubleDown, faCircleChevronDown, faLink } from "@fortawesome/free-solid-svg-icons";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Link from "next/link";

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
  projectNumber
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  let buttonDestination;

  projectNumber > 4 ? buttonDestination = '#contact' : buttonDestination = `#project${projectNumber + 1}`; 



  let projectClasses = classes.project;

  darkMode && (projectClasses = `${projectClasses} ${classes.darkMode}`);

  const cardVariants = {
    visible: { opacity: 1, transition: { duration: 0.35 } },
    hidden: { opacity: 0.25 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const nextProjectHandler = () => {

  }

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={cardVariants}
      className="square"
    >
      <li className={projectClasses} id={`project${projectNumber}`}>
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

        <Link href={buttonDestination}>
          <a className={classes.button_wrapper} >
            <FontAwesomeIcon icon={faCircleChevronDown} className={classes.next_project} onClick={nextProjectHandler} style={{
            color: isHovering && primary,
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}/>

          </a>
        </Link>
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
          a > svg:hover {
            color: #${primary};
          }
        `}</style>
      </li>
    </motion.div>
  );
};

export default ProjectCard;
