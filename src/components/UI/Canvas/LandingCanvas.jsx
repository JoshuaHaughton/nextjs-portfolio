import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import classes from "./LandingCanvas.module.css";
import { useInViewport } from 'react-in-viewport';

const Canvas = () => {
  const canvasRef = useRef(null);

  const inViewRef = useRef();
  const {
    inViewport,
    enterCount,
    leaveCount,
  } = useInViewport(
    inViewRef
  );

  const darkMode = useSelector((state) => state.darkMode.showDarkMode);

  

  //useEffect gives access to window property on client
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 100;
    let particleArray = [];
    // const clientHeight = document.getElementById('projects').clientHeight;
    // canvas.height = clientHeight

    //handle mouse
    const mouse = {
      x: null,
      y: null,
      radius: (canvas.height / 85) * (canvas.height / 85),
    };

    
    const mouseMoveEventHandler = (event) => {
      const rect = canvas.getBoundingClientRect(), // abs. size of element
        scaleX = canvas.width / rect.width, // relationship bitmap vs. element for x
        scaleY = canvas.height / rect.height; // relationship bitmap vs. element for y

      mouse.x = (event.clientX - rect.left) * scaleX;
      mouse.y = (event.clientY - rect.top) * scaleY;
    };

    const resizeEventHandler = () => {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      mouse.radius = (canvas.height / 85) * (canvas.height / 85);
      init();
    };

    const mouseOutEventHandler = () => {
      mouse.x = undefined;
      mouse.y = undefined;
    };

    if(inViewport) {
      window.addEventListener("mousemove", mouseMoveEventHandler);
      //resize event
      window.addEventListener("resize", resizeEventHandler);
  
      //mouse out event
      window.addEventListener("mouseout", mouseOutEventHandler);
  
      class Particle {
        constructor(x, y, directionX, directionY, size, color) {
          this.x = x;
          this.y = y;
          this.directionX = directionX;
          this.directionY = directionY;
          this.size = size;
          this.color = darkMode ? "white" : "black";
        }
        //Draw particles
        draw() {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
          ctx.fillStyle = this.color;
          ctx.fill();
        }
        //check particle position, check mouse position, move the particle, draw the partiicle
        update() {
          //check if particle is still within canvas
          if (this.x > canvas.width || this.x < 0) {
            this.directionX = -this.directionX;
          }
          if (this.y > canvas.height || this.y < 0) {
            this.directionY = -this.directionY;
          }
  
          //Check for collisions
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
  
          if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
              this.x += 10;
            }
            if (mouse.x > this.x && this.x > this.size * 10) {
              this.x -= 10;
            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
              this.y += 10;
            }
            if (mouse.y > this.y && this.y > this.size * 10) {
              this.y -= 10;
            }
          }
  
          //move particle
          this.x += this.directionX;
          this.y += this.directionY;
  
          //draw particle
          this.draw();
        }
      }
  
      //Create particle array
      function init() {
        particleArray = [];
        let numberOfParticles = (canvas.height * canvas.width) / 12000;
  
        for (let i = 0; i < numberOfParticles; i++) {
          let size = Math.random() * 5 + 1;
          let x = Math.random() * (canvas.width - size * 2 - size * 2) + size * 2;
          let y =
            Math.random() * (canvas.height - size * 2 - size * 2) + size * 2;
          let directionX = Math.random() * 2;
          let directionY = Math.random() * 2;
          let color = "black";
  
          particleArray.push(
            new Particle(x, y, directionX, directionY, size, color),
          );
        }
      }
  
      //check if particles are close enough to draw line between them
      function connect() {
        let opacityValue = 1;
        for (let a = 0; a < particleArray.length; a++) {
          for (let b = a; b < particleArray.length; b++) {
            let distance =
              (particleArray[a].x - particleArray[b].x) *
                (particleArray[a].x - particleArray[b].x) +
              (particleArray[a].y - particleArray[b].y) *
                (particleArray[a].y - particleArray[b].y);
  
            if (distance < (canvas.width / 7) * (canvas.height / 7)) {
              opacityValue = 1 - distance / 18000;
              ctx.strokeStyle = `rgba(31, 89, 237, ${opacityValue})`;
              ctx.lineWidth = 1;
              ctx.beginPath();
              ctx.moveTo(particleArray[a].x, particleArray[a].y);
              ctx.lineTo(particleArray[b].x, particleArray[b].y);
              ctx.stroke();
            }
          }
        }
      }
  
      function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
  
        for (let i = 0; i < particleArray.length; i++) {
          //Our method that checks if particle collided with wall or mouse, and updates accordingly and draws it
          particleArray[i].update();
        }
        connect();
      }
      init();
      animate();

    } else {
        window.removeEventListener("mousemove", mouseMoveEventHandler);
        window.removeEventListener("mouseout", mouseOutEventHandler);
        window.removeEventListener("resize", resizeEventHandler);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
    }

    return () => {
      window.removeEventListener("mousemove", mouseMoveEventHandler);
      window.removeEventListener("mouseout", mouseOutEventHandler);
      window.removeEventListener("resize", resizeEventHandler);
      ctx.clearRect(0, 0, innerWidth, innerHeight);
    };

   
  }, [darkMode, inViewport]);

  return (
    <div ref={inViewRef}>
      <canvas className={classes.canvas} ref={canvasRef}></canvas>
    </div>
  )
};

export default Canvas;
