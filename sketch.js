var car, wall;
var speed, weight;

function setup() {
  createCanvas(1600, 400);

  speed = random(55, 90);
  weight = random(400, 1500);

  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, 60, height / 2);
  wall.shapeColour = color(80, 80, 80)
}

function draw() {
  background(255, 255, 255);
  car.velocityX = speed;
  if (car.isTouching(wall)) {
    car.velocityX = 0;
  }
  drawSprites();
}

function collide() {
  if (wall.x - car.x < (car.width + wall.width) / 2) {
    car.velocityx = 0;
    var deformation = 0.5 * weight * speed / 22509;
  }
  if (deformation > 180) {
    car.shapeColour = color(225, 0, 0);
  }
  if (deformation < 180 && deformation > 100) {
    car.shapeColour = color(230, 230, 0);
  }
  if (deformation < 100){
    car.shapeColour = color(0, 225, 0);
  }
}