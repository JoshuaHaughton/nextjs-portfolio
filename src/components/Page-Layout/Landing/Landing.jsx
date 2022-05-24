import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import LinkedinLogo from "../../../../public/linkedin-logo.svg";
import GithubLogo from "../../../../public/github-logo.svg";
import classes from "./Landing.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../store/modal";
import LandingCanvas from "../../UI/Canvas/LandingCanvas";
import { motion } from "framer-motion";

const Landing = () => {
  const showModal = useSelector((state) => state.modal.showModal);
  const darkMode = useSelector((state) => state.darkMode.showDarkMode);

  const dispatch = useDispatch();

  let containerClasses = classes.landing_container;

  showModal &&
    (containerClasses = `${classes.landing_container} ${classes.showModal}`);
  darkMode && (containerClasses = `${containerClasses} ${classes.darkMode}`);

  return (
    <div className={containerClasses}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
              timeConstant: 1200,
            },
          },
        }}
      >
        <LandingCanvas />
      </motion.div>

      <header className={classes.landing}>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { scale: 0.8, opacity: 0 },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.1,
              },
            },
          }}
        >
          <div className={classes.landing_content}>
            <h1 className={classes.greeting}>Hey,</h1>
            <h1 className={`${classes.greeting} ${classes.secondary}`}>
              {" "}
              I'm Josh.
            </h1>
            {/* <h1 className={classes.greeting}>Hey, <br/> <span className={classes.secondary}>I'm Josh.</span></h1> */}

            <p className={classes.landing_description}>
              {/* I love to build  */}
              I'm a fullstack developer with a passion for creating apps and
              enhancing user experiences through
              {/* beautiful  */}
              <br />
              {/* looking to transition my passion for frontend
              development and user experience into a career as a */}
              <b className={classes.secondary}>
                {" "}
                Frontend Javascript Frameworks like React.
              </b>
              <br />
              Here's a bit more
              <b
                className={`${classes.description_hover} ${classes.secondary}`}
                onClick={() => dispatch(modalActions.toggleModal())}
              >
                {" "}
                about me:
              </b>
              {/* <b className="secondary header__description--hover" onclick="toggleModal()">about me:</b> */}
            </p>
            <div className={classes.socials_list}>
              <Link href="https://www.linkedin.com/in/joshua-haughton-5ba15a22b/">
                <a className={classes.social_link} target="_blank">
                  <Image
                    src={LinkedinLogo}
                    height={24}
                    width={24}
                    className={classes.social_logo}
                    priority={true}
                    quality={100}
                  />
                </a>
              </Link>

              <Link href="https://github.com/JoshuaHaughton">
                <a className={classes.social_link} target="_blank">
                  <Image
                    src={GithubLogo}
                    height={24}
                    width={24}
                    className={classes.social_logo}
                    priority={true}
                    quality={100}
                  />
                </a>
              </Link>

              <Link href={"/JoshuaHaughtonResume.pdf"}>
                <a className={classes.social_link} target="_blank">
                  <FontAwesomeIcon icon={faFilePdf} />
                </a>
              </Link>
            </div>
          </div>
        </motion.div>
      </header>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { scale: 0.8, opacity: 0 },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.1,
            },
          },
        }}
      >
        <Link href="#projects">
          <a className={classes.scroll}>
            <div className={classes.scroll_icon}></div>
          </a>
        </Link>
      </motion.div>
    </div>
  );
};

export default Landing;
