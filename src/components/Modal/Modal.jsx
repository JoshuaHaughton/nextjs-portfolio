import { faSpinner, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import classes from "./Modal.module.css";
import nextjsIcon from '../../../public/next-js-icon.svg'
import typescriptIcon from '../../../public/typescript.svg'
import mongoDBIcon from '../../../public/mongodb-icon.svg'
import firebaseIcon from '../../../public/firebase-icon.svg'
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { modalActions } from "../../store/modal";

export default function Modal() {
  // const [open, setOpen] = useState()
  
  //open should change css classes to lower opacity and remove from screen, not take off of dom
  
  // meaning dont use open && (...) lol
  
  //Default classes (Closed)
  
  //Make modal not move from center (fixed)

  const showModal = useSelector((state) => state.modal.showModal);
  const dispatch = useDispatch()


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


  return (
    <>
      <div className={modalClasses}>
        <div className={aboutHalfClasses}>
          <h3 className={classes.title}>Here's a bit about me:</h3>
          <h4 className={classes.subtitle}>Fullstack Software Engineer</h4>
          <p className={classes.paragraph}>
            I'm a 21 year-old
            <span className={`${classes.secondary} ${classes.bold}`}>
            {" "}fullstack software engineer
            </span>{" "}
            with a passion for building apps and websites with an exceptional
            <span className={`${classes.secondary} ${classes.bold}`}>
            {" "}user experience.
            </span>
            <br />
            <br />
            I currently work as a freelance digital marketer, but I spend every
            chance I get upgrading my coding skills.
            <br />
            The
            <span className={`${classes.secondary} ${classes.bold}`}>
            {" "}copywriting, user-based design,{" "}
            </span>
            and
            <span className={`${classes.secondary} ${classes.bold}`}>
            {" "}customer psychology skills
            </span>{" "}
            I've acquired through marketing for E-Commerce brands have been
            essential in allowing me to quickly learn how to craft interfaces
            that are extremely visually appealing to users.
          </p>

          <div className={classes.languages}>
            <div className={classes.language}>
              <figure >
                <Image
                layout="fill"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
                  alt="Html Logo"
                  className={classes.language_img}
                />
              </figure>
                <span className={classes.language_name}>HTML</span>
            </div>


            <div className={classes.language}>
              <figure >
                <Image
                layout="fill"
                  src="https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
                  alt="CSS Logo"
                  className={classes.language_img}
                />
              </figure>

                <span className={classes.language_name}>CSS</span>

            </div>

            <div className={classes.language}>

              <figure >
                <Image
                layout="fill"
                  src="https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
                  alt="JavaScript Logo"
                  className={classes.language_img}
                />
              </figure>
                <span className={classes.language_name}>JavaScript</span>

            </div>


            <div className={classes.language}>

            <figure >
              <Image
              layout="fill"
                src="https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
                alt="React Logo"
                className={classes.language_img}
              />
            </figure>
              <span className={classes.language_name}>React.js</span>

            </div>
            

            <div className={classes.language}>

            <figure >
              <Image
              layout="fill"
                src={nextjsIcon}
                alt="Next.Js Logo"
                className={classes.language_img}
              />
            </figure>

              <span className={classes.language_name}>Next.js</span>
            </div>


            <div className={classes.language}>

              <figure >
                <Image
                layout="fill"
                  src={typescriptIcon}
                  alt="Typescript Logo"
                  className={classes.language_img}
                />
              </figure>

                <span className={classes.language_name}>Typescript</span>
              </div>



              <div className={classes.language}>

              <figure >
                <Image
                layout="fill"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1180px-Node.js_logo.svg.png"
                  alt="Node Logo"
                  className={classes.language_img}
                  objectFit={'contain'}
                />
              </figure>
                <span className={classes.language_name}>Node/Express</span>

              </div>


              <div className={classes.language}>

              <figure >
                <Image
                layout="fill"
                  src={mongoDBIcon}
                  alt="MongoDB Logo"
                  className={classes.language_img}
                />
              </figure>

                <span className={classes.language_name}>MongoDB</span>
              </div>


              <div className={classes.language}>

              <figure >
                <Image
                layout="fill"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png"
                  alt="PostgreSQL Logo"
                  className={classes.language_img}
                />
              </figure>
                <span className={classes.language_name}>PostgreSQL</span>

              </div>


              <div className={classes.language}>

              <figure >
                <Image
                layout="fill"
                  src={firebaseIcon}
                  alt="Firebase Logo"
                  className={classes.language_img}
                />
              </figure>
                <span className={classes.language_name}>Firebase</span>

              </div>
          </div>
        </div>

        <div className={contactHalfClasses}>
          {/* <i className="fas fa-times modal__exit click" onclick="toggleModal()"></i> */}
          <FontAwesomeIcon icon={faTimes} className={classes.modal_exit} onClick={() => dispatch(modalActions.closeModal())} />
          <h3 className={classes.title}>Let's have a chat!</h3>
          <h4 className={classes.subtitle}>
            I'm currently open to new opportunities.
          </h4>

          <form action="" id="contact_form">
            {/* <form action="" id="contact__form" onsubmit="contact(event)"> */}
            <div className={classes.form_item}>
              <label>Name</label>
              <input
                type="text"
                className={classes.input}
                name="user_name"
                required
              />
            </div>
            <div className={classes.form_item}>
              <label>Email</label>
              <input
                type="email"
                className={classes.input}
                name="user_email"
                required
              />
            </div>
            <div className={classes.form_item}>
              <label>Message</label>
              <textarea
                type="text"
                className={classes.textarea}
                // className={classes.input}
                name="message"
                required
              ></textarea>
            </div>
            <button id="contact__submit" className={classes.form_submit}>
              Send it my way
            </button>
          </form>
          <div className={`${classes.overlay} ${classes.overlay_loading}`}>
            {/* <i className="fas fa-spinner"></i> */}
            <FontAwesomeIcon
              icon={faSpinner}
              className={classes.spinner_icon}
            />
          </div>
          <div className={`${classes.overlay} ${classes.overlay_success}`}>
            Thanks for the message! Looking forward to speaking with you soon.
          </div>
        </div>
      </div>
    </>
  );
}
