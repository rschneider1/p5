var theta;
var theta_vel;
var r;
var x;
var y;
var radius;
var starOne;

function setup() {
  createCanvas(1950, 900);
  starOne = new Star();
  starTwo = new Star();
  starThree = new Star();
  starFour = new Star();
  starFive = new Star();
}

function draw() { 
  background(0);
  translate(width, height);
  //ellipse(10, 10, 10, 10);
  starOne.move();
  starOne.display();
  starTwo.move();
  starTwo.display();
  starThree.move();
  starThree.display();
  starFour.move();
  starFour.display();
  starFive.move();
  starFive.display();
}

function Star(){
  this.r = height * random(.5, 2.3);
  this.theta = 0;
  //this.theta_vel = -.005;
  this.theta_vel = -(10 / this.r);
  this.x = -(this.r * cos(this.theta));
  this.y = (this.r * sin(this.theta));
  this.radius = random(30, 50);
  
  this.move = function(){
    this.theta += this.theta_vel;
    this.x = -(this.r * cos(this.theta));
    this.y = (this.r * sin(this.theta));
  }
  this.display = function(){
    fill(255);
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}