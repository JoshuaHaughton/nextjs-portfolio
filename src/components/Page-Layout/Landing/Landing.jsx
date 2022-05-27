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
              delay: 0.6,
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
                delay: 1,
                timeConstant: 1200,
              },
            },
          }}
        >
          <div className={classes.landing_content}>
            <h1 className={classes.greeting}>Hey,</h1>
            <h1 className={`${classes.greeting} ${classes.secondary}`}>
              {" "}
              I&apos;m Josh.
            </h1>
            <p className={classes.landing_description}>
              I&apos;m a fullstack developer with a passion for{" "}
              <b className={classes.secondary}>creating apps</b> and
              <b className={classes.secondary}>
                {" "}
                enhancing user experiences
              </b>{" "}
              through <br />
              frontend technology like
              <b className={classes.secondary}> React</b> and
              <b className={classes.secondary}> Next.js.</b>
              <br />
              Here&apos;s a bit more
              <b
                className={`${classes.description_hover} ${classes.secondary}`}
                onClick={() => dispatch(modalActions.toggleModal())}
              >
                {" "}
                about me:
              </b>
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
                    alt="LinkedIn Logo"
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
                    alt="Github Logo"
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
        <Link href="#techstack">
          <a className={classes.scroll}>
            <div className={classes.scroll_icon}></div>
          </a>
        </Link>
    </div>
  );
};

export default Landing;
