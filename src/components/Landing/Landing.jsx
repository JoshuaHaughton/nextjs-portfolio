import React, { useRef } from 'react'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import LinkedinLogo from "../../../public/linkedin-logo.svg";
import GithubLogo from "../../../public/github-logo.svg";
import classes from "./Landing.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/modal";
import { useEffect } from "react";
import { useRouter } from "next/router";

const Landing = () => {

  const showModal = useSelector((state) => state.modal.showModal);
  const darkMode = useSelector((state) => state.darkMode.showDarkMode);
  
  
  
  const dispatch = useDispatch()
  
  let containerClasses = classes.landing_container
  
  showModal && (containerClasses = `${classes.landing_container} ${classes.showModal}`)
  darkMode && (containerClasses = `${containerClasses} ${classes.darkMode}`)
  
  
  const router=useRouter() //create router state
  const canvasRef = useRef(null)
  
  useEffect(() => {
    if(window){ //check window if exist on each effect execution
      
      // const script = () => {
        const canvas = canvasRef.current
        // const canvas = document.getElementById('canvas1')
        const ctx = canvas.getContext('2d')
        // const ctx = canvas.getContext('2d')
        
        // ctx.width = window.innerWidth
        // ctx.height = window.innerHeight
        let particleArray = []
        
        //handle mouse
        const mouse = {
          x: null,
          y: null,
          radius: 150
        }
        
        window.addEventListener('mousemove', (event) => {
          mouse.x = event.x;
          mouse.y = event.y;
          console.log(mouse.x, mouse.y);
      
        })



        ctx.fillStyle = '#000000';
        ctx.font = '30px Verdana'
        ctx.fillText('A', 0, 40)
        // ctx.strokeStyle = 'black'
        // ctx.strokeRect(0, 0, 100, 100)
        const data = ctx.getImageData(0, 0, 100, 100)

        class Particle {
          constructor(x, y){
            this.x = x;
            this.y = y;
            //Radius
            this.size = 3;
            this.baseX = this.x
            this.baseY = this.y
            //how fast they move (heaviness)
            this.density = (Math.random() * 30) + 1
          }
          draw(){
            //Draw circle
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.ard(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
          }
        }

        function init() {
          particleArray = [];
          particleArray.push(new Particle())
        }
 



      // }
      // script()


      console.log('hm');
      console.log(window);
   } else {
     console.log('nah');
   }
  }, [])




  
  return (
    <div className={containerClasses}>
      <header className={classes.landing}>
        <div className={classes.landing_content}>
          <canvas id="canvas1" ref={canvasRef} ></canvas>
          <h1 className={classes.greeting}>Hey,</h1>
          <h1 className={`${classes.greeting} ${classes.secondary}`}>
            {" "}
            I'm Josh.
          </h1>
          {/* <h1 className={classes.greeting}>Hey, <br/> <span className={classes.secondary}>I'm Josh.</span></h1> */}

          <p className={classes.landing_description}>
            I'm a digital marketer looking to transition my passion for frontend
            development and user experience into a career as a
            <b className={classes.secondary}> Frontend Software Engineer.</b>
            <br />
            Here's a bit more
            <b className={`${classes.description_hover} ${classes.secondary}`} onClick={() => dispatch(modalActions.toggleModal())}>
              {" "}
              about me:
            </b>
            {/* <b className="secondary header__description--hover" onclick="toggleModal()">about me:</b> */}
          </p>
          <div className={classes.socials_list}>
            <Link href="https://www.linkedin.com/in/joshua-haughton-5ba15a22b/">
              <a className={classes.social_link} target="_blank">
                <Image
                  src={LinkedinLogo}
                  height={17}
                  width={17}
                  className={classes.social_logo}
                  priority={true}
                  quality={100}
                />
              </a>
            </Link>

            <Link href="https://github.com/JoshuaHaughton">
              <a className={classes.social_link} target="_blank">
                <Image
                  src={GithubLogo}
                  height={18}
                  width={18}
                  className={classes.social_logo}
                  priority={true}
                  quality={100}
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
      </header>

      {/* <Link href="#">
        <a >
          <button 
            className={classes.contact_button} 
            >
            <FontAwesomeIcon icon={faEnvelope} />
          </button>
        </a>
      </Link> */}

      <Link href="#projects">
        <a className={classes.scroll}>
          <div className={classes.scroll_icon}></div>
        </a>
      </Link>


    </div>
  );
};

export default Landing;
