var movingRect;
var fixedRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 200, 80, 30);

  fixedRect = createSprite(600, 400, 50, 80);

  
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject4 = createSprite(400, 100, 50, 50);

  gameObject1.shapeColor = "blue";
  gameObject2.shapeColor = "blue";
  gameObject3.shapeColor = "blue";
  gameObject4.shapeColor = "blue";

  gameObject3.velocityX = 3;
  gameObject4.velocityX = -3;

}

function draw() {
  background(255,255,255);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
bounceOff(gameObject3, gameObject4)

if(isTouching(movingRect, gameObject4)){
  movingRect.shapeColor = "red";
  gameObject4.shapeColor = "red";
}
else{
  movingRect.shapeColor = "blue";
  gameObject4.shapeColor = "blue";

}
  drawSprites();
}
