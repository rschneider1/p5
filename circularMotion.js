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
  translate(width/2, height);
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
  fill(252, 212, 64);
  ellipse(0, 0, 300, 300)
}

function Star(){
  this.r = width/2 * random(.4, .97);
  this.radius = random(10, 30);
  this.theta = 0;
  //this.theta_vel = -(random(5,12) / this.r);
  this.theta_vel = -((this.radius/3) / this.r);
  this.x = -(this.r * cos(this.theta));
  this.y = (this.r * sin(this.theta));
  
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