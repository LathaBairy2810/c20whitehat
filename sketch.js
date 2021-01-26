var fixRect, movingRect;

function setup() {
  createCanvas(1200, 800);
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = ("green");
  gameObject1.debug = true;
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = ("green");
  gameObject2.debug = true;
  gameObject3= createSprite(300,100,50,50);
  gameObject3.shapeColor = ("green");
  gameObject3.debug = true;
  gameObject4= createSprite(400,100,50,50);
  gameObject4.shapeColor = ("green");
  gameObject4.debug = true;
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = ("green");
  fixedRect.debug = true;
  movingRect = createSprite(400, 200, 80, 30);
  movingRect.shapeColor = ("green");
  movingRect.debug = true;
}

function draw() {
  background(255,255,255);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(istouching(movingRect,gameObject1)){


    movingRect.shapeColor = "red";
    gameObject1.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }
  if(istouching(movingRect,gameObject2)){


    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }
  drawSprites();

}
function istouching(object1,object2) {
  if(object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      return true;
    }
    else {
      return false;
    } 
}




