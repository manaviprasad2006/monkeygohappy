var player, player_running;
var ground;

var FoodGroup, bananaImage;
var obstaclesGroup, obstacleImage;

var score;


var survivalTime;
function preload(){
  m1 = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
b1 = loadImage("banana.png")
  o1 = loadImage("stone.png")
  bg1 = loadImage("jungle.jpg")
  
}
function setup(){
  back = createSprite(200,180,20,50);
back.addAnimation("back" , bg1);
 player = createSprite(100,340,20,50);
player.addAnimation("monkey" , m1);
player.scale=0.1;
  

ground = createSprite(400,350,800,10);
ground.velocityX=-4;
ground.x=ground.width/2;
ground.visible = false
FoodGroup = new Group();
obstaclesGroup = new Group();
survivalTime = 0;
score = 0; 
}






function draw() {
  
  background(255);
  back.velocityX = -4
 if(back.x<0) {
    back.x=back.width/2;
  } 
  
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  
  if (FoodGroup.isTouching(player)){
    FoodGroup.destroyEach()
    player.scale=player.scale + 0.001
  }
   if (obstaclesGroup.isTouching(player)){
     obstaclesGroup.destroyEach ()
    player.scale=player.scale - 0.001
  }
   
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);   
    spawnFood();
    spawnObstacles();
 
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/60) 
  text("Survival Time: "+ survivalTime, 100,50);
}

function spawnFood() {
  //write code here to spawn the Food
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.velocityX = -5;
    
     //assign lifetime to the variable
    banana.lifetime = 300;
    player.depth = banana.depth + 1;
    
    //add image of banana
     banana.addImage("Banana", b1);
    banana.scale=0.05;
    
    //add each banana to the group
    FoodGroup.add(banana);
  }
}

function spawnObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(800,320,10,40);
    obstacle.velocityX = -6;
    
    //add image to the obstacle 
    obstacle.addImage("Stone" , o1);
    obstacle.scale=0.15;
    
    //lifetime to the obstacle     
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}


  
