import { faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef } from "react";
import classes from "./Modal.module.css";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../../store/modal";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import LinkedinLogo from "../../../../public/linkedin-logo.svg";
import GithubLogo from "../../../../public/github-logo.svg";
import ModalLanguages from "../ModalLanguages/ModalLanguages";
import ModalLanguageData from "./ModalLanguageData";

export default function Modal() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [textareaInput, setTextareaInput] = useState("");
  const form = useRef();

  const showModal = useSelector((state) => state.modal.showModal);
  const darkMode = useSelector((state) => state.darkMode.showDarkMode);

  const dispatch = useDispatch();

  let modalClasses = classes.modal;
  let aboutHalfClasses = `${classes.modal_half} ${classes.modal_about}`;
  let contactHalfClasses = `${classes.modal_half} ${classes.modal_contact}`;

  !showModal
    ? ((modalClasses = classes.modal),
      (aboutHalfClasses = `${classes.modal_half} ${classes.modal_about}`),
      (contactHalfClasses = `${classes.modal_half} ${classes.modal_contact}`))
    : ((modalClasses = `${classes.modal} ${classes.modal_open}`),
      (aboutHalfClasses = `${classes.modal_half} ${classes.modal_about} ${classes.modal_about_open}`),
      (contactHalfClasses = `${classes.modal_half} ${classes.modal_contact} ${classes.modal_contact_open}`));

  darkMode &&
    ((aboutHalfClasses = `${aboutHalfClasses} ${classes.darkModeAbout}`),
    (contactHalfClasses = `${contactHalfClasses} ${classes.darkModeContact}`));

  const contactMe = async (event) => {
    event.preventDefault();

    setLoading(true);

    console.log("sending");

    emailjs
      .sendForm(
        "service_3ke2bn5",
        "template_sbg618g",
        form.current,
        "user_Nv7IGGmuawZuYuuauHS6i",
      )
      .then((result) => {
        console.log("sent", result);
        setLoading(false);
        setSuccess(true);

        setEmailInput("");
        setNameInput("");
        setTextareaInput("");

        setTimeout(() => {
          dispatch(modalActions.closeModal());
        }, 1500);

        setTimeout(() => {
          setSuccess(false);
        }, 2500);
      })
      .catch((err) => {
        setLoading(false);

        console.log(err);

        alert(
          "The email service is temporarily unavailable. Please contact me directly at itsjoshuahaughton@gmail.com",
        );
      });
  };

  let loadingClasses = `${classes.overlay} ${classes.overlay_loading}`;
  let successClasses = `${classes.overlay} ${classes.overlay_success}`;

  loading && (loadingClasses = `${loadingClasses} ${classes.overlay_visible}`);
  success && (successClasses = `${successClasses} ${classes.overlay_visible}`);

  return (
    <>
      <div className={modalClasses}>
        <div className={aboutHalfClasses}>
          <h3 className={classes.title}>Here&apos;s a bit about me:</h3>
          <h4 className={classes.subtitle}>
            Fullstack Software Engineer
            <span className={classes.social_list}>
              <Link href={"/JoshuaHaughtonResume.pdf"}>
                <a className={classes.social_link} target="_blank">
                  <FontAwesomeIcon icon={faFilePdf} />
                </a>
              </Link>

              <Link href="https://www.linkedin.com/in/joshua-haughton-5ba15a22b/">
                <a className={classes.social_link} target="_blank">
                  <Image
                    src={LinkedinLogo}
                    height={24}
                    width={24}
                    className={classes.social_logo}
                    priority={true}
                    quality={100}
                    alt="Linkedin Logo"
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
            </span>
          </h4>
          <p className={classes.paragraph}>
            I&apos;m a 21 year-old
            <span className={`${classes.secondary} ${classes.bold}`}>
              {" "}
              fullstack software engineer
            </span>{" "}
            with a passion for building apps that provide an
            <span className={`${classes.secondary} ${classes.bold}`}>
              {" "}
              exceptional user experience.
            </span>
            <br />
            <br />
            As a former digital marketer, I&apos;ve acquired skills like
            <span className={`${classes.secondary} ${classes.bold}`}>
              {" "}
              user-based design, customer psychology{" "}
            </span>
            and
            <span className={`${classes.secondary} ${classes.bold}`}>
              {" "}
              copywriting
            </span>{" "}
            through marketing for small/mid-sized E-commerce businesses. These
            skills have been{" "}
            <span className={`${classes.secondary} ${classes.bold}`}>
              {" "}
              essential
            </span>{" "}
            in allowing me to quickly learn how to craft interfaces that are{" "}
            <span className={`${classes.secondary} ${classes.bold}`}>
              visually appealing to users.
            </span>
          </p>

          <br />
          <div className={classes.languages}>
            {ModalLanguageData.map(
              ({ src, languageName, languagePopup }, i) => (
                <ModalLanguages
                  key={i}
                  src={src}
                  languageName={languageName}
                  languagePopup={languagePopup}
                  darkMode={darkMode}
                />
              ),
            )}
          </div>
        </div>

        <div className={contactHalfClasses}>
          <FontAwesomeIcon
            icon={faTimes}
            className={classes.modal_exit}
            onClick={() => dispatch(modalActions.closeModal())}
          />
          <h3 className={classes.title}>Let&apos;s have a chat!</h3>
          <h4 className={classes.subtitle}>
            I&apos;m currently open to new opportunities.
          </h4>

          <form onSubmit={contactMe} id="contact_form" ref={form}>
            <div className={classes.form_item}>
              <label>Name</label>
              <input
                type="text"
                className={classes.input}
                name="user_name"
                required
                onChange={(e) => setNameInput(e.target.value)}
                value={nameInput}
              />
            </div>
            <div className={classes.form_item}>
              <label>Email</label>
              <input
                type="email"
                className={classes.input}
                name="user_email"
                required
                onChange={(e) => setEmailInput(e.target.value)}
                value={emailInput}
              />
            </div>
            <div className={classes.form_item}>
              <label>Message</label>
              <textarea
                type="text"
                className={classes.textarea}
                name="message"
                required
                onChange={(e) => setTextareaInput(e.target.value)}
                value={textareaInput}
              ></textarea>
            </div>
            <button className={classes.form_submit} value="Send" type="submit">
              Send it my way
            </button>
          </form>

          <div className={loadingClasses}>
            <FontAwesomeIcon
              icon={faSpinner}
              className={classes.spinner_icon}
            />
          </div>

          <div className={successClasses}>
            Thanks for the message! Looking forward to speaking with you soon.
          </div>
        </div>
      </div>
    </>
  );
}
