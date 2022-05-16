import Image from "next/image";
import Link from "next/link";
import classes from "./Nav.module.css";
import logo from "../../../public/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/modal";

const Nav = () => {

  const showModal = useSelector((state) => state.modal.showModal);
  const dispatch = useDispatch()

  let navClasses = classes.nav

  showModal && (navClasses = `${classes.nav} ${classes.showModal}`)

  return (
    <nav className={navClasses}>
      <figure>
        <Image className={classes.logo} src={logo} alt="Josh Haughton Logo" height={50} width={50} />
      </figure>
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
