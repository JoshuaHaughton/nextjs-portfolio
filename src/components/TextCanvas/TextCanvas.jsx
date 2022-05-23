import React, { useEffect, useRef } from "react";

const TextCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 95;
    let particleArray = [];
    let adjustX = 0;
    let adjustY = 0;

    //handle mouse
    const mouse = {
      x: null,
      y: null,
      radius: 50,
    };

    const mouseMoveEventHandler = (event) => {
      var rect = canvas.getBoundingClientRect(), // abs. size of element
        scaleX = canvas.width / rect.width, // relationship bitmap vs. element for x
        scaleY = canvas.height / rect.height; // relationship bitmap vs. element for y

      mouse.x = (event.clientX - rect.left) * scaleX;
      mouse.y = (event.clientY - rect.top) * scaleY;

      // mouse.x = event.x;
      // mouse.x = event.pageX;
      //Account for navbar
      // mouse.y = event.y - 100;
      // mouse.y = event.pageY - 100;
      // console.log(mouse.x, mouse.y);
    };

    window.addEventListener("mousemove", mouseMoveEventHandler);

    console.log(ctx);
    ctx.fillStyle = "blue";
    ctx.font = "30px Verdana";

    ctx.fillText(`I'm Josh`, 0, 30);
    // ctx.strokeStyle = 'black'
    // ctx.strokeRect(0, 0, 100, 100)
    const textCoordinates = ctx.getImageData(0, 0, canvas.width, canvas.height);

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
        ctx.fillStyle = "#1f59ed";
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
          //If the distance is within the mouse radius, move particles away
          this.x -= directionX * 3;
          this.y -= directionY * 3;
        } else {
          //Return to original position once mouse contact ceases
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 12;
          }

          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 12;
          }
        }
      }
    }

    function init() {
      particleArray = [];
      for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
          //Any pixel from image data (textCoordinates) will be added to the particle array
          //if statement checks every 3 elements, because every 4th represents alpha (opacity value)
          if (
            textCoordinates.data[y * 4 * textCoordinates.width + x * 4 + 3] >
            128
          ) {
            let positionX = x + adjustX;
            let positionY = y + adjustY;
            particleArray.push(new Particle(positionX * 2.5, positionY * 2.5));
          }
        }
      }
    }

    //Redraw canvas on every frame
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].draw();
        particleArray[i].update();
      }
      connect();
      requestAnimationFrame(animate);
    }

    function connect() {
      for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
          let dx = particleArray[a].x - particleArray[b].x;
          let dy = particleArray[a].y - particleArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 0.8) {
            ctx.strokeStyle = "white";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(particleArray[a].x, particleArray[a].y);
            ctx.lineTo(particleArray[b].x, particleArray[b].y);
            ctx.stroke();
          }
        }
      }
    }
    init();
    animate();
    console.log(particleArray);
    console.log("hm");
    console.log(window);

    return () => {
      window.removeEventListener('mousemove', mouseMoveEventHandler)
    };
  }, []);

  return <canvas id="canvas1" ref={canvasRef}></canvas>;
};

export default TextCanvas;
