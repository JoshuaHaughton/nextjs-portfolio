import React from "react";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ContactButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../../store/modal";
import useMediaQuery from "../../../hooks/useMediaQuery";
import Link from "next/link";

const ContactButton = () => {
  const showModal = useSelector((state) => state.modal.showModal);
  const darkMode = useSelector((state) => state.darkMode.showDarkMode);

  const isBreakpoint820 = useMediaQuery(820);
  const dispatch = useDispatch();

  let buttonClasses = classes.contact_button;

  showModal &&
    (buttonClasses = `${classes.contact_button} ${classes.showModal}`);
  darkMode && (buttonClasses = `${buttonClasses} ${classes.darkMode}`);

  return (
    <>
      {!isBreakpoint820 ? (
        <button
          className={buttonClasses}
          onClick={() => dispatch(modalActions.toggleModal())}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
      ) : (
        <Link href={"#"}>
          <button
            className={buttonClasses}
            onClick={() => dispatch(modalActions.toggleModal())}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </Link>
      )}
    </>
  );
};

export default ContactButton;
