import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../store/modal";
import classes from "./TechStack.module.css";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Image from "next/image";
import nextjsIcon from "../../../../public/next-js-icon.svg";
import typescriptIcon from "../../../../public/typescript.svg";
import mongoDBIcon from "../../../../public/mongodb-icon.svg";
import firebaseIcon from "../../../../public/firebase-icon.svg";
import htmlIcon from "../../../../public/html.svg";
import cssIcon from "../../../../public/css.svg";
import javascriptIcon from "../../../../public/javascript.svg";
import reactIcon from "../../../../public/react.svg";
import nodeIcon from "../../../../public/node.svg";
import postgresqlIcon from "../../../../public/postgresql.svg";
import reduxIcon from "../../../../public/redux.svg";

const TechStack = () => {
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
      <div className={projectsClasses} id="TechStack">
        <div className={classes.row}>
          <h1>
            {/* <h1 className={classes.secondary}> */}
            <span className={classes.secondary}>
            Technologies 
            </span>
             {" "}I've worked with

          </h1>
          {/* <h4 className={classes.subtitle}>
            <b>Thanks for checking out my portfolio!</b>
          </h4> */}

          <h4 className={classes.subtitle}>
            These are the tech that I've worked at that I feel <b>most comfortable</b> with
          </h4>


          <div className={classes.bothTech}>
            <div className={classes.frontend}>
              {/* <h3>Frontend Technonlogies</h3> */}
              <div className={classes.techWrapper}>
              <figure className={classes.tech}>
                  <Image
                      layout="fill"
                      src={htmlIcon}
                      alt="Next.Js Logo"
                      className={classes.language_img}
                      priority={true}
                      quality={100}
                      // unoptimized={true}
                    />
                    <span className={classes.language_name}>HTML</span>
                </figure>

                <figure className={classes.tech}>
                  <Image
                      layout="fill"
                      src={cssIcon}
                      alt="Next.Js Logo"
                      className={classes.language_img}
                      priority={true}
                      quality={100}
                      // unoptimized={true}
                    />
                    <span className={classes.language_name}>CSS</span>
                </figure>

                <figure className={classes.tech}>
                  <Image
                      layout="fill"
                      src={javascriptIcon}
                      alt="Next.Js Logo"
                      className={classes.language_img}
                      priority={true}
                      quality={100}
                      // unoptimized={true}
                    />
                    <span className={classes.language_name}>JavaScript</span>
                </figure>

                <figure className={classes.tech}>
                  <Image
                      layout="fill"
                      src={reactIcon}
                      alt="Next.Js Logo"
                      className={classes.language_img}
                      priority={true}
                      quality={100}
                      // unoptimized={true}
                    />
                    <span className={classes.language_name}>React</span>
                </figure>
                
                <figure className={classes.tech}>
                  <Image
                      layout="fill"
                      src={reduxIcon}
                      alt="Next.Js Logo"
                      className={classes.language_img}
                      priority={true}
                      quality={100}
                      // unoptimized={true}
                    />
                    <span className={classes.language_name}>React</span>
                </figure>

                <figure className={classes.tech}>
                  <Image
                      layout="fill"
                      src={nextjsIcon}
                      alt="Next.Js Logo"
                      className={classes.language_img}
                      priority={true}
                      quality={100}
                      // unoptimized={true}
                    />
                    <span className={classes.language_name}>NextJs</span>
                </figure>
                <figure className={classes.tech}>
                  <Image
                      layout="fill"
                      src={typescriptIcon}
                      alt="Next.Js Logo"
                      className={classes.language_img}
                      priority={true}
                      quality={100}
                      // unoptimized={true}
                    />
                    <span className={classes.language_name}>Typescript</span>
                </figure>




                <figure className={classes.tech}>
                  <Image
                      layout="fill"
                      src={nodeIcon}
                      alt="Next.Js Logo"
                      className={classes.language_img}
                      priority={true}
                      quality={100}
                      // unoptimized={true}
                    />
                    <span className={classes.language_name}>Node/Express</span>
                </figure>
                
               


                <figure className={classes.tech}>
                  <Image
                      layout="fill"
                      src={mongoDBIcon}
                      alt="Next.Js Logo"
                      className={classes.language_img}
                      priority={true}
                      quality={100}
                      // unoptimized={true}
                    />
                    <span className={classes.language_name}>MongoDB</span>
                </figure>
                <figure className={classes.tech}>
                  <Image
                      layout="fill"
                      src={postgresqlIcon}
                      alt="Next.Js Logo"
                      className={classes.language_img}
                      priority={true}
                      quality={100}
                      // unoptimized={true}
                    />
                    <span className={classes.language_name}>MongoDB</span>
                </figure>

                

               


                

                
          
              </div>
            </div>

            {/* <div className={classes.backend}>
            <h3>Backend Technonlogies</h3>
              <div className={classes.techWrapper}>

              <figure className={classes.tech}>
                  <Image
                      layout="fill"
                      src={nodeIcon}
                      alt="Next.Js Logo"
                      className={classes.language_img}
                      priority={true}
                      quality={100}
                      // unoptimized={true}
                    />
                    <span className={classes.language_name}>Node/Express</span>
                </figure>
                
               


                <figure className={classes.tech}>
                  <Image
                      layout="fill"
                      src={mongoDBIcon}
                      alt="Next.Js Logo"
                      className={classes.language_img}
                      priority={true}
                      quality={100}
                      // unoptimized={true}
                    />
                    <span className={classes.language_name}>MongoDB</span>
                </figure>

                <figure className={classes.tech}>
                  <Image
                      layout="fill"
                      src={firebaseIcon}
                      alt="Next.Js Logo"
                      className={classes.language_img}
                      priority={true}
                      quality={100}
                      // unoptimized={true}
                    />
                    <span className={classes.language_name}>Firebase</span>
                </figure>


               

              


               
              
              </div>

            </div> */}


          </div>



          {/* <button
            onClick={() => dispatch(modalActions.toggleModal())}
            className={classes.button}
          >
            Say Hello
          </button> */}
        </div>
      </div>
    </motion.div>
  );
};

export default TechStack;
