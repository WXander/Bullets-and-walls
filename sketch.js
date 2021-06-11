var bullet, wall;
var speed, weight;
var thickness;



function setup() {
  createCanvas(1600,400);

  bullet = createSprite(50,200,100,20);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);
  

  thickness=random(22,83);
  weight=random(30,52);
  speed=random(223,321);
  bullet.velocityX = speed;
}

function draw() {
  background(0);  

  

if (wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX = 0;
  var damage=(0.5 * weight * speed * speed)/(thickness*thickness*thickness);
  console.log("weight"+weight)
  console.log("speed"+speed)
  console.log("thickness"+thickness);
  if(damage>10){
    bullet.shapeColor = "red";
  }
  else{
    bullet.shapeColor = "green";
  }
}

console.log(damage)
  drawSprites();
}