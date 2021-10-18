var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var coin
var energyDrink
var bomb

function preload(){
  pathImg = loadImage("path.png");
  boyImg = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");

  coin = loadAnimation("Jake5.png","coin.png");
  energyDrink = loadAnimation("energyDrink.png","Jake4.png");
  bomb = loadAnimation("bomb.png","Jake3.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;
path.scale=1.2;

//creating boy running
boy = createSprite(180,340,30,30);
boy.scale=0.6;
boy.addAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png");
//  boy.addAnimation(boyImg)

leftBoundary=createSprite(0,0,100,800);

leftBoundary.invisible = false;
leftBoundary.visible = true;
leftBoundary.invisible = true;
leftBoundary.visible = false;


rightBoundary=createSprite(410,0,100,800);
rightBoundary.visible = false;

  coin = createSprite(180,260,30,30);
  coin.scale=0.2;
  coin.addAnimation("Jake5.png","coin.png");
  
  energyDrink = createSprite(120,80,20,20);
  energyDrink.scale=0.06;
  energyDrink.addAnimation("Jake4.png","energyDrink.png");
  
  bomb = createSprite(290,160,20,20);
  bomb.scale=0.05;
  bomb.addAnimation("Jake3.png","bomb.png");
}

function draw() {
  background(0);
  path.velocityY = 4;
  coin.velocityY = 4;
  energyDrink.velocityY = 4;
  bomb.velocityY = 4;
  
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  //code to reset the background

  if(path.y > 400 ){
    path.y = height/2;
  }

  if(path.y > 400 ){
   
  path.y = height/2;
  }

  if(path.y > 400 ){
path.y = height/2;}

if(path.y > 400 ){path.y = height/2;}

if(coin.y > 400 ){
  coin.y = height/2;}
  
  if(coin.y > 400 ){coin.y = height/2;}

  if(bomb.y > 400 ){
    bomb.y = height/2;}
    
    if(bomb.y > 400 ){bomb.y = height/2;}

    if(energyDrink.y > 400 ){
      energyDrink.y = height/2;}
      
      if(energyDrink.y > 400 ){energyDrink.y = height/2;}
  
  drawSprites();
}