import React, { useEffect, useRef } from "react";
import classes from './Canvas.module.css'

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particleArray = [];

    console.log("height", canvas.height);

    //handle mouse
    const mouse = {
      x: null,
      y: null,
      radius: (canvas.height / 80) * (canvas.height / 80),
    };

    window.addEventListener("mousemove", (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
      // console.log(mouse.x, mouse.y);
    });

    //resize event
    window.addEventListener("resize", function () {
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      mouse.radius = (canvas.height / 80) * (canvas.height / 80);
      init();
    });

    //mouse out event
    window.addEventListener("mouseout", function () {
      mouse.x = undefined;
      mouse.y = undefined;
    });

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }
      //Draw particles
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = "#BCSS23";
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
        // console.log('distance', distance);

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
      let numberOfParticles = (canvas.height * canvas.width) / 19000;

      for (let i = 0; i < numberOfParticles; i++) {
        let size = Math.random() * 5 + 1;
        let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
        let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
        let directionX = Math.random() * 5 - 2.5;
        let directionY = Math.random() * 5 - 2.5;
        let color = "#BC5523";

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
            opacityValue = 1 - distance / 20000;
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
  }, []);

  return <canvas className={classes.canvas} ref={canvasRef}></canvas>;
};

export default Canvas;
