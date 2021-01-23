var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600, 400);

  speed = random(55, 90);
  weight = random(30, 52);
  thickness = random(223, 321);

  bullet = createSprite(50, 200, 50, 50);
  wall = createSprite(1500, 200, thickness, height / 2);
  wall.shapeColour = color(80, 80, 80)
}

function draw() {
  background(255, 255, 255);
  bullet.velocityX = speed;
  if (bullet.isTouching(wall)) {
    bullet.velocityX = 0;
  }
  hasCollided();
  collide();
  drawSprites();
}

function collide() {
  if (wall.x - bullet.x < (bullet.width + wall.width) / 2) {
    bullet.velocityx = 0;
    var deformation = 0.5 * weight * speed / 22509;
  }
  if (deformation > 180) {
    bullet.shapeColour = color(225, 0, 0);
  }
  if (deformation < 180 && deformation > 100) {
    bullet.shapeColour = color(230, 230, 0);
  }
  if (deformation < 100) {
    bullet.shapeColour = color(0, 225, 0);
  }
}

function hasCollided(lbullet, lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bullet.bulletRightEdge >= wallLeftEdge) {
    return true
  }
  return false;
}