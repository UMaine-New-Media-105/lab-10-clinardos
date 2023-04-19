// Lab 10
// Linardos, Caitlin

// Defining arrays
let cars = [];
let cars2 = [];
let cars3 = [];
let flowers = [];
let flowers2 = [];
let flowers3 = [];
let smiley1

function setup() {
  createCanvas(500, 500);

  // Establishing Smiley 1 array
  
    smiley1 = new Smiley(230, 435, 0.55, 10);

  // Establishing cars Array
  for (let carsAdded = 0; carsAdded < 3; carsAdded++) {
    let offset = 120;
    let interval = 0;
    cars[carsAdded] = new Cars(offset * carsAdded + interval, 168, 1.5, 1.2);
  }

  // Establishing Cars2 array
  for (let carsAdded = 0; carsAdded < 2; carsAdded++) {
    let offset = 220;
    let interval = 0;
    cars2[carsAdded] = new Cars(offset * carsAdded + interval, 330, 1.3, 0.5);
  }

  // Establishing Cars3 array
  for (let carsAdded = 0; carsAdded < 3; carsAdded++) {
    let offset = 320;
    let interval = 0;
    cars3[carsAdded] = new Cars(offset * carsAdded + interval, 65, 1.5, 1);
  }

  // establishing flower array
  for (let flowersAdded = 0; flowersAdded < 3; flowersAdded++) {
    let offset = 190;
    let interval = 0;
    flowers[flowersAdded] = new Flower(
      offset * flowersAdded + interval,
      310,
      0.4,
      1
    );
  }

  // establishing flower2 array
  for (let flowersAdded = 0; flowersAdded < 2; flowersAdded++) {
    let offset = 220;
    let interval = 0;
    flowers2[flowersAdded] = new Flower(
      offset * flowersAdded + interval,
      400,
      0.4,
      2
    );
  }
  // establishing flower3 array
  for (let flowersAdded = 0; flowersAdded < 2; flowersAdded++) {
    let offset = 220;
    let interval = 0;
    flowers3[flowersAdded] = new Flower(
      offset * flowersAdded + interval,
      150,
      0.4,
      1.5
    );
  }
}

function draw() {
  background("#c2e5fb");

  // For the lanes
  fill("#bbbbbb");
  rect(0, 75, 500, 150);
  rect(0, 280, 500, 150);


    smiley1.show();

  // cars loop
  for (let carsAdded = 0; carsAdded < cars.length; carsAdded++) {
    cars[carsAdded].shown();
    cars[carsAdded].move();
  }

  // cars2 loop
  for (let carsAdded = 0; carsAdded < cars2.length; carsAdded++) {
    cars2[carsAdded].shown();
    cars2[carsAdded].move();
  }
  for (let carsAdded = 0; carsAdded < cars3.length; carsAdded++) {
    cars3[carsAdded].shown();
    cars3[carsAdded].move();
  }
  for (let flowersAdded = 0; flowersAdded < flowers.length; flowersAdded++) {
    flowers[flowersAdded].show();
    flowers[flowersAdded].move();
  }
  for (let flowersAdded = 0; flowersAdded < flowers2.length; flowersAdded++) {
    flowers2[flowersAdded].show();
    flowers2[flowersAdded].move();
  }
  for (let flowersAdded = 0; flowersAdded < flowers3.length; flowersAdded++) {
    flowers3[flowersAdded].show();
    flowers3[flowersAdded].move();
  }
  // new Smiley(250, 450, 1, 10);
}

// This is for the "logs"
class Flower {
  constructor(x, y, s, speedX) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.speedX = speedX;
  }
  show() {
    push();
    // allows flower to be moved
    translate(this.x, this.y);
    // Controls size of flower
    scale(this.s);

    // This fills the color based on each flower parameters
    fill("#a6cc8b");

    //This creates the petals
    for (let petalsAdded = 0; petalsAdded < 106; petalsAdded++) {
      ellipse(0, 41, 7, 45);
      rotate(310);
    }
    push();
    noStroke();

    // Bulb of the flower
    fill("#607356");
    ellipse(0, 0, 40);
    pop();
    pop();
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
      }
    }
  }
}

// This is for the cars
class Cars {
  constructor(x, y, s, speedX) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.speedX = speedX;
  }
  shown() {
    push();
    fill("#f4b3ce");
    translate(this.x, this.y);
    scale(this.s);
    // Add your sprite here.
    rect(10, 20, 30, 10);
    fill("black");
    ellipse(18, 32, 10);
    ellipse(32, 32, 10);
    fill("#f4b3ce");
    rect(25, 8, 15, 12);
    push();
    strokeWeight(2);
    line(24.5, 11, 13, 20);
    pop();
    fill("skyblue");
    rect(29, 11, 8, 6);
    fill("silver");
    ellipse(18, 32, 6);
    ellipse(32, 32, 6);
    pop();
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
      }
    }
  }
}


// Class for Smiley
class Smiley {
  constructor(x, y, s, interval) {
    this.x = x;
    this.y = y;
    this.s = s;
    this.interval = interval;
  }
  show() {
    push();
    translate(this.x, this.y);
    scale(this.s);
    fill("#c3b5e8");

    // This is the code used to create the actual smiley face

    ellipse(55, 55, 100);

    fill("black");
    ellipse(70, 40, 13, 40);
    ellipse(40, 40, 13, 40);

    // push () pop() is used to allow only this section of code to have a strokeWeight of 5
    push();
    noFill();
    strokeWeight(5);
    arc(57, 57, 80, 80, 0, 16);
    pop();
    pop();
  }
  move(x, y) {
    this.x = this.x + x;
    this.y = this.y + y;
  }
}


// For smiley to move

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
