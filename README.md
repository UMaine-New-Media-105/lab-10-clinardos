# Lab 10 - Caitlin Linardos
### [Link](https://editor.p5js.org/clinardos/full/Pdk0ar4nC)

#### Task of Lab 10:
<p> Create your very own frogger game! There a couple steps in doing this. First you should focus on creating the background and the two lanes. Once you have got that squared away your next task is to begin implementing "cars" and "logs" that bounce off each wall (use classes). Lastly, you should create your "frog" that starts at the bottom of the screen and can cross through the lanes with the direction keys on your keyboard. For bonus points, add a collision that detects when the car and frog "crash" 

#### How I did it?
  First I created a new sketch that was (500,500), and I chose the background color which was a light blue color. I next added two identical rectangles with about 130 pixels in between them. This created my "road".
  
  Next, I began creating classes which in my case were for a Car, a Flower, and a smiley face (frog). Within each class I added a move() and show () function. Each class looked something like this: 
  ```javascript
  class Flower {
  constructor(x, y, s, speedX) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.speedX = speedX;
  }
  show() {
  This is where you add the code to create the "sprite" 
  }
  move() {
    this.x = this.x + this.speedX;
    if (this.x >= width || this.x <= 0) {
      this.speedX = this.speedX * -1;
      // Reverse if it hits a wall.
      let isTooFarLeft = this.x < 0;
      let isTooFarRight = this.x > width;
      if (isTooFarLeft || isTooFarRight) {
        this.addX = -this.addX;
      } } } 
  
 ```
  Next I used loops to establish arrays of both the cars and flowers. I did multiple arrays of both and I also put loops in the draw() function to allow the object and move() and show() functions to appear. Which looked like this: 
  ```javascript 
  function setup() {
  for (let flowersAdded = 0; flowersAdded < 3; flowersAdded++) {
    let offset = 190;
    let interval = 0;
    flowers[flowersAdded] = new Flower(
      offset * flowersAdded + interval,310,0.4,1);
  } }
   function draw() {
     for (let flowersAdded = 0; flowersAdded < flowers.length; flowersAdded++) {
    flowers[flowersAdded].show();
    flowers[flowersAdded].move();
    } }
  ```
  
  Lastly I added the keyPressed() function to allow for the directional keys to move the sprite. I did this by adding the smiley into the if statement withing the keyfuction as shown: 
  ```javascript 
  
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    smiley1.move(-50, 0);
  }
  if (keyCode === RIGHT_ARROW) {
    smiley1.move(+50, 0);
  }
  if (keyCode === DOWN_ARROW) {
    smiley1.move(0, +50);
  }
  if (keyCode === UP_ARROW) {
    smiley1.move(0, -50);
  }
}
  ```
  
  
  If you were to copy this code it would turn out something like this (however it will be a running game):
  
  <img width="625" alt="Screenshot 2023-04-19 at 3 37 54 PM" src="https://user-images.githubusercontent.com/124199359/233181964-e3f84a85-eb4d-405e-bfee-38f4bbe6757f.png">

  

