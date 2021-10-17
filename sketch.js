var garden,rabbit,apple,orangeL,redL;
var gardenImg,rabbitImg,carrotImg,orangeImg,redImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png");
  leafImg = loadImage("leaf.png")
}


function setup(){
  
  createCanvas(400,400);
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);


//creating boy running
rabbit = createSprite(160,340,20,20);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}

function draw() {
  background(0);
  
  // boy moving on Xaxis with mouse'
  rabbit.x = World.mouseX;
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
   drawSprites();
   
  
// var select_sprites = Math(random(1,3));
var appleImg = Math.random(1,3)
// var select_sprites = Math.random(random(1,3));
var redImg = Math.random(1,3)
// var select_sprites = Math.round(1,3);
var orangeImg = Math.random(1,3)
// var select_sprites = Math.round(random(1,3));
var leafImg = Math.random(1,3)
  
if (frameCount % 70 == 0) {
  if (appleImg == 1) {
       createApples(1,2);
     } else if (appleImg  == 2) {
       createApples(1,2);
     }else {
       createApples(1,2);
     }
   }

if (frameCount % 90 == 0) {
    if (redImg == 1) {
       createRed(1,2);
      } else if (redImg  == 2) {
       createRed(1,2);
      }else {
        createRed(1,2);
      }
    }

if (frameCount % 110 == 0) {
    if (orangeImg == 1) {
      createOrange(1,2);
      } else if (orangeImg  == 2) {
        createOrange(1,2);
      }else {
        createOrange(1,2);
      }
    }
}

function createApples() {
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocityY = 3;
apple.lifetime = 150;
  
}

function createOrange() {
orangeL = createSprite(random(50, 350),40, 10, 10);
orangeL.addImage(orangeImg);
orangeL.scale=0.08;
orangeL.velocityY = 3;
orangeL.lifetime = 150;
}

function createRed() {
redL = createSprite(random(50, 350),40, 10, 10);
redL.addImage(redImg);
redL.scale=0.06;
  redL.velocityY = 3;
  redL.lifetime = 150;
}
