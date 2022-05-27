import React from "react";
import { useSelector } from "react-redux";
import classes from "./TechStack.module.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import TechStackLanguage from "../../UI/TechStackLanguage/TechStackLanguage";
import TechLanguages from "./TechStackData";

const TechStack = () => {
  const showModal = useSelector((state) => state.modal.showModal);
  const darkMode = useSelector((state) => state.darkMode.showDarkMode);

  let projectsClasses = classes.container;

  showModal && (projectsClasses = `${classes.container} ${classes.showModal}`);
  darkMode && (projectsClasses = `${projectsClasses} ${classes.darkMode}`);

  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      console.log("again");
    } else controls.stop();

    return () => {
      controls.stop();
    };
  }, [controls, inView]);

  return (
    <div id={"techstack"}>
      <div className={projectsClasses}>
        <motion.div
          ref={ref}
          animate={controls}
          initial={"hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                delay: 0.1,
                timeConstant: 1200,
              },
            },
          }}
        >
          <div className={classes.row}>
            <h1>
              <span className={classes.secondary}>Tech</span> I've worked with
            </h1>

            <h4 className={classes.subtitle}>
              I love learning new tech, but these are the technologies that I'm
              currently the <b>most comfortable with:</b>
            </h4>

            <div className={classes.techWrapper}>
              {TechLanguages.map(({ src, languageName, languagePopup }, i) => (
                <TechStackLanguage
                  key={i}
                  src={src}
                  languageName={languageName}
                  languagePopup={languagePopup}
                  darkMode={darkMode}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
