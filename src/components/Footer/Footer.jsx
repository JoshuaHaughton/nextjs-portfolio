import Image from "next/image";
import Link from "next/link";
import classes from "./Footer.module.css";
import Logo from "../../../public/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/modal";

const Footer = () => {


  const showModal = useSelector((state) => state.modal.showModal);
  const darkMode = useSelector((state) => state.darkMode.showDarkMode);

  const dispatch = useDispatch()
  
  let footerClasses = classes.footer
  
  showModal && (footerClasses = `${classes.footer} ${classes.showModal}`)
  darkMode && (footerClasses = `${footerClasses} ${classes.darkMode}`)
  
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.row}>
          <Link href="#">
            <a className={classes.footer_anchor}>
              <figure className={classes.logo_wrapper}>
                <Image
                  className={classes.logo_img}
                  layou={"fill"}
                  src={Logo}
                  alt="Joshua Haughton"
                  priority={true}
                  quality={100}
                />
              </figure>
              <span className={classes.logo_popup}>
                Top
                <FontAwesomeIcon icon={faArrowUp} />
              </span>
            </a>
          </Link>

          <div className={classes.social_list}>
            <Link href="https://github.com/JoshuaHaughton">
              <a
                target="_blank"
                className={classes.social_link}
              >
                Github
              </a>
            </Link>

            <Link href="https://www.linkedin.com/in/joshua-haughton-5ba15a22b/">
              <a
                target="_blank"
                className={classes.social_link}
              >
                LinkedIn
              </a>
            </Link>

              <a
                onClick={() => dispatch(modalActions.toggleModal())}
                className={classes.social_link}
              >
                Contact
              </a>

            <Link href={"/JoshuaHaughtonResume.pdf"}>
              <a
                // href="./assets/Joshua Haughton Resume.pdf"
                target="_blank"
                className={classes.social_link}
              >
                Resume
              </a>
            </Link>
          </div>
          <div className={classes.copyright}>
            Copyright © 2022 Josh Haughton
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
