// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ContactButton.module.css";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modal";

const ContactButton = () => {
  const dispatch = useDispatch()


  return (
    <button
      className={classes.contact_button}
      onClick={() => dispatch(modalActions.toggleModal())}
    >
      <FontAwesomeIcon icon={faEnvelope} />
    </button>
  );
};

export default ContactButton;
