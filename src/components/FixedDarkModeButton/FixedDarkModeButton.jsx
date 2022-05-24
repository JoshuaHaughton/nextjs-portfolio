import React from 'react';
import { faAdjust, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import classes from "./FixedDarkModeButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal";
import useMediaQuery from "../../hooks/useMediaQuery";
import Link from "next/link";
import { darkModeActions } from "../../store/darkMode";

const FixedDarkModeButton = () => {
  const showModal = useSelector((state) => state.modal.showModal);
  const darkMode = useSelector((state) => state.darkMode.showDarkMode);
  
  // const isBreakpoint820 = useMediaQuery(820)
  const dispatch = useDispatch()
  
  
  
  let buttonClasses = classes.contact_button
  
  showModal && (buttonClasses = `${classes.contact_button} ${classes.showModal}`)
  darkMode && (buttonClasses = `${buttonClasses} ${classes.darkMode}`)


  return (
      <button
      className={buttonClasses}
      onClick={() => dispatch(darkModeActions.toggleDarkMode())}
      >
        <FontAwesomeIcon icon={faAdjust} />
      </button>
  );
};

export default React.memo(FixedDarkModeButton);
