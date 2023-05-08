import React from "react";
import Sketch from "react-p5";

export let Sketching = (props) => {
  let x = 50;
  let y = 50;
  const setup = (p5, canvasParentRef) => {
    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(600, 400).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(255);
    for (let i = 0; i < 5; i++) {
      let y = i * 75 + 50;
      let radius = 20;
      let speed = i + 1;

      // Calculate the x position for each circle
      let xPos = (x * speed) % p5.width;

      // Draw the circle
      p5.fill(0, 100, 255);
      p5.ellipse(xPos, y, radius * 2);

      // Draw the index number for each circle
      p5.fill(255);
      p5.textSize(16);
      p5.textAlign(p5.CENTER, p5.CENTER);
      p5.text(i, xPos, y);
    }

    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
    x += 0.5;
  };

  return <Sketch setup={setup} draw={draw} />;
};

/**
 * 
 * let x = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(255);

  for (let i = 0; i < 5; i++) {
    let y = i * 75 + 50;
    let radius = 20;
    let speed = i + 1;

    // Calculate the x position for each circle
    let xPos = (x * speed) % width;

    // Draw the circle
    fill(0, 100, 255);
    ellipse(xPos, y, radius * 2);

    // Draw the index number for each circle
    fill(255);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(i, xPos, y);
  }

  // Increment the x value to move the circles
  x += 0.5;
}
 */
