import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../store/modal";
import classes from "./Contact.module.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Contact = () => {
  const dispatch = useDispatch();
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
    } else {
      // controls.stop()
      controls.start("hidden")
    }
    return () => {
      controls.stop()
      // controls.start("hidden")
    }
  }, [controls, inView]);

  const cardVariants = {
    visible: { opacity: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0.1 },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={cardVariants}
      className="square"
    >
      <div className={projectsClasses} id="contact">
        <div className={classes.row}>
          <h1>
            {/* <h1 className={classes.secondary}> */}
            Get in touch
          </h1>
          <h4 className={classes.subtitle}>
            <b>Thanks for checking out my portfolio!</b>
          </h4>

          <h4 className={classes.subtitle}>
            Whether you have a question or just want to say hi, I'll try my best
            to get back to you!
          </h4>
          <button
            onClick={() => dispatch(modalActions.toggleModal())}
            className={classes.button}
          >
            Say Hello
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
