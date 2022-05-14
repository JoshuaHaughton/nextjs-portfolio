import Image from "next/image";
import Link from "next/link";
import classes from "./Nav.module.css";
import logo from "../../../public/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";

//Needs to toggle modal
//Needs to toggle dark mode

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <figure>
        <Image className={classes.logo} src={logo} alt="Josh Haughton Logo" height={50} width={50} />
      </figure>
      <ul className={classes.link_list}>
        <li className={classes.link}>
          {/* <li className={classes.link} onclick="toggleModal()"> */}
          <Link href="#">
            <a className={`${classes.link_anchor} ${classes.link_hover}`}>
              About
            </a>
          </Link>
        </li>
        <li className={classes.link}>
          <Link href="#projects">
            <a className={`${classes.link_anchor} ${classes.link_hover}`}>
              Projects
            </a>
          </Link>
        </li>
        <li className={classes.link}>
          {/* <li className={classes.link} onclick="toggleModal()"> */}

          <Link href="#">
            <a className={`${classes.link_anchor} ${classes.link_hover}`}>
              Contact
            </a>
          </Link>
        </li>
        <li className={`${classes.link} ${classes.button}`}>
          {/* <li className="nav__link click" onclick="toggleContrast()"> */}
          <a className={classes.link_anchor}>
            <FontAwesomeIcon icon={faAdjust} />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;