import React, { useRef } from "react";
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

  const dispatch = useDispatch();

  let containerClasses = classes.landing_container;

  showModal &&
    (containerClasses = `${classes.landing_container} ${classes.showModal}`);
  darkMode && (containerClasses = `${containerClasses} ${classes.darkMode}`);

  const router = useRouter(); //create router state
  const canvasRef = useRef(null);

  useEffect(() => {
    // const script = () => {
    const canvas = canvasRef.current;
    // const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext("2d");
    // const ctx = canvas.getContext('2d')

    // canvas.width = window.innerWidth
    // canvas.height = window.innerHeight - 100
    let particleArray = [];

    //handle mouse
    const mouse = {
      x: null,
      y: null,
      radius: 150,
    };

    window.addEventListener("mousemove", (event) => {
      var rect = canvas.getBoundingClientRect(), // abs. size of element
        scaleX = canvas.width / rect.width, // relationship bitmap vs. element for x
        scaleY = canvas.height / rect.height; // relationship bitmap vs. element for y

        mouse.x = (event.clientX - rect.left) * scaleX;
        mouse.y = (event.clientY - rect.top) * scaleY
      mouse.radius = 150;
      
      // mouse.x = event.x;
      // mouse.x = event.pageX;
      //Account for navbar
      // mouse.y = event.y - 100;
      // mouse.y = event.pageY - 100;
      // console.log(mouse.x, mouse.y);
    });

    // ctx.fillStyle = '#000000';
    // ctx.font = '30px Verdana'
    // ctx.fillText('A', 0, 40)
    // ctx.strokeStyle = 'black'
    // ctx.strokeRect(0, 0, 100, 100)
    // const data = ctx.getImageData(0, 0, 100, 100)

    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        //Radius
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        //how fast they move (heaviness)
        //Not all at the same speed for realism
        this.density = Math.random() * 30 + 1;
      }
      draw() {
        //Draw circle
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
      update() {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        //Particles slow down as they get farther away from the mouse
        let force = (maxDistance - distance) / maxDistance;
        //commbines all factors that play a role in particle movement speed
        let directionX = forceDirectionX * force * this.density;
        let directionY = forceDirectionY * force * this.density;


        if (distance < mouse.radius) {
          this.x -= directionX * 3;
          this.y -= directionY * 3;
        } else {
          this.size = 3;
        }
      }
    }

    function init() {
      particleArray = [];
      for (let i = 0; i < 100; i++) {
        let x = Math.random() * canvas.width;
        let y = Math.random() * canvas.height;
        particleArray.push(new Particle(x, y));
      }
      particleArray.push(new Particle(50, 50));
      particleArray.push(new Particle(80, 50));
    }

    //Redraw canvas on every frame
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
        particleArray[i].update();
      }
      requestAnimationFrame(animate);
    }

    // }
    // script()

    init();
    animate();
    console.log(particleArray);
    console.log("hm");
    console.log(window);
  }, []);

  return (
    <div className={containerClasses}>
      <header className={classes.landing}>
        <div className={classes.landing_content}>
          <h1 className={classes.greeting}>Hey,</h1>
          <canvas id="canvas1" ref={canvasRef}></canvas>
          {/* <h1 className={`${classes.greeting} ${classes.secondary}`}>
            {" "}
            I'm Josh.
          </h1> */}
          {/* <h1 className={classes.greeting}>Hey, <br/> <span className={classes.secondary}>I'm Josh.</span></h1> */}

          <p className={classes.landing_description}>
            I'm a digital marketer looking to transition my passion for frontend
            development and user experience into a career as a
            <b className={classes.secondary}> Frontend Software Engineer.</b>
            <br />
            Here's a bit more
            <b
              className={`${classes.description_hover} ${classes.secondary}`}
              onClick={() => dispatch(modalActions.toggleModal())}
            >
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
