import Image from "next/image";
import Link from "next/link";
import classes from "./Nav.module.css";
import logo from "../../../public/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/modal";
import { darkModeActions } from "../../store/darkMode";
import { faSun } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {

  const showModal = useSelector((state) => state.modal.showModal);
  const darkMode = useSelector((state) => state.darkMode.showDarkMode);
  
  const dispatch = useDispatch()
  
  let navClasses = classes.nav
  
  showModal && (navClasses = `${classes.nav} ${classes.showModal}`)
  darkMode && (navClasses = `${navClasses} ${classes.darkMode}`)

  return (
    <nav className={navClasses}>
      <Link href={"#"}>
        <figure>
          <Image className={classes.logo} src={logo} alt="Josh Haughton Logo" height={50} width={50} priority={true}
                    quality={100} />
        </figure>
      </Link>
      <ul className={classes.link_list}>

        <li className={classes.link} onClick={() => dispatch(modalActions.toggleModal())}>

            <a className={`${classes.link_anchor} ${classes.link_hover}`} >
              About
            </a>

        </li>


        <li className={classes.link}>
          <Link href="#projects">
            <a className={`${classes.link_anchor} ${classes.link_hover}`}>
              Projects
            </a>
          </Link>
        </li>


        <li className={classes.link} onClick={() => dispatch(modalActions.toggleModal())}>
          {/* <li className={classes.link} onclick="toggleModal()"> */}

            <a className={`${classes.link_anchor} ${classes.link_hover}`} >
              Contact
            </a>
        </li>


        <li className={`${classes.link} ${classes.button}`} onClick={() => dispatch(darkModeActions.toggleDarkMode())}>
          {/* <li className="nav__link click" onclick="toggleContrast()"> */}
          <a className={classes.link_anchor}>
            {!darkMode ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
          </a>
        </li>



      </ul>
    </nav>
  );
};

export default Nav;
