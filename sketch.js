//Global Variables

var monkey,bananaImage,obstacleImage,background_img,score,obstacleGroup,bananaGroup

function preload(){
  
  background_img=loadImage("jungle.jpg")
  
monkey_running = loadAnimation("Monkey_01.png,Monkey_02.png,Monkey_03.png,Monkey_04.png,Monkey_055.png,Monkey_06.png,Monkey_07.png,Monkey_08.png,Monkey_09.png,Monkey_10.png");
  
  bananaImage = loadImage("banana.png")
  obstacleImage = loadImage("stone.png")
}


function setup() {
  createCanvas(600,300);
  var background=("jungle.jpg");
  ground.visibility=false
  monkey.addAnimation=("monkey_running")
}


function draw(){
  
  
  
  Stone();
  Banana();
  drawSprite();
}

function Stone() {
if (frameCount%200===0) {
  var stone = createSprite(400, 350,20,20);
  stone.setAnimation( "Stone")
  stone.scale=0.15
  stone.velocityX=-5
  stone.lifetime=100
  stoneGroup.add(stone)
  
}
}

function Banana() {
if (frameCount%100===0) {
 var banana = createSprite(400, 255,10,10);
 banana.setAnimation( "Banana")
 banana.scale=0.05
 banana.velocityX=-4
 banana.lifetime=100
 bananaGroup.add(banana)
}
}




