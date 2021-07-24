var Play = 0;
var Pause = 1;
var Resume = 2;
var End = 3;
var gameState = Play;

var obstaclesGroup;
var wallsGroup;
var textGroup;
var buttonGroup;

var bg;
var text1, text2, text3;
var money=0;
var ob1, ob2, ob3, ob4;
var restart;
var reButton;
var char1, char2, char3, char4;
var pc, npc1, npc2, npc3, npc4;
var ground, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5,obstacle6,obstacle7,obstacle8;
var obstacle9,obstacle10,obstacle11,obstacle12,obstacle13,obstacle14,obstacle15,obstacle17;
var obstacle18,obstacle19,obstacle20,obstacle21;
var object1, object2, object3;
var obstacleImage, obstacleImage2, obstacleImage3, obstacleImage4, boulder;
var textbox1, textbox2, textbox3, textbox4;
var resumeButton1, resumeButton2, resumeButton3, resumeButton4;
var wall1, wall2, wall3;
var endwall;
var spikes;


function preload() {
  obstacleImage = loadImage();
  obstacleImage2 = loadImage();
  obstacleImage3 = loadImage();
  boulder = loadImage("boulder.png")
  bg = loadImage("IMG_3680.jpg");
  button1 = loadImage("button.png")
  button2 = loadImage("button.png")
  button3 = loadImage("button.png")
  button4 = loadImage("button.png")
  ob1 = loadImage("switch.png")
  ob2 = loadImage("mirror.png")
  ob3 = loadImage("purse.png")
  reButton = loadImage("restart.png")
  spikes = loadImage("spikes.png")
  text1 = loadImage("npc1.png")
  text2 = loadImage("npc2.png")
  text3 = loadImage("npc3.png")
  char1 = loadImage("pc.png")
  char2 = loadImage("npcc.png")
  char3 = loadImage("npc2 copy.png")
  char4 = loadImage("image-removebg-preview (3).png")

}

function setup() {
createCanvas(1200,400);  //windowWidth/windowHeight

textbox1 = createSprite(1075, 200, 700, 350);
textbox1.addImage(text1);
textbox1.scale = 0.38;

textbox2 = createSprite(2425, 200, 700, 350);
textbox2.addImage(text2);
textbox2.scale = 0.38;

textbox3 = createSprite(4825, 200, 700, 350);
textbox3.addImage(text3);
textbox3.scale = 0.38;

textbox4 = createSprite(6200, 200, 700, 350);

resumeButton1 = createSprite(1400, 270, 45, 40);
resumeButton1.addImage(button1);
resumeButton1.scale = 0.50;

resumeButton2 = createSprite(2750, 270, 45, 40);
resumeButton2.addImage(button1);
resumeButton2.scale = 0.50;

resumeButton3 = createSprite(5150, 270, 45, 40);
resumeButton3.addImage(button1);
resumeButton3.scale = 0.50;

resumeButton4 = createSprite(6525, 270, 45, 40);
resumeButton4.addImage(button1);
resumeButton4.scale = 0.50;

pc = createSprite(100,400,30,150)
pc.addImage(char1);

restart = createSprite(100,250,150,50);
restart.addImage(reButton);
restart.scale = .7;
restart.visible = false;

wall1 = createSprite(1050,350,30,1500);
wall1.visible = false;
//wallsGroup.add(wall1);

wall2 = createSprite(2450,350,30,1500);
wall2.visible = false;
//wallsGroup.add(wall2);

wall3 = createSprite(4750,350,30,1500);
wall3.visible = false;
//wallsGroup.add(wall3);


object1 = createSprite(2350,350,30,35);
object1.addImage(ob1);
object1.scale = 0.2;

object2 = createSprite(4650,350,30,35);
object2.addImage(ob2);
object2.scale = 0.05;

object3 = createSprite(6050,350,30,35);
object3.addImage(ob3);
object3.scale = 0.1;

endwall = createSprite(6200,350,30,1500);
endwall.visible = false;

npc1 = createSprite(1110,350,30,150);


obstacle1 = createSprite(300, 340, 40, 10);
obstacle1.addImage(boulder);
obstacle1.scale = 0.2;

obstacle2 = createSprite(600, 365, 160, 40);
obstacle2.addImage(spikes);
obstacle2.scale = 0.25;

obstacle3 = createSprite(900, 325, 40, 60);
obstacle3.addImage(boulder);
obstacle3.scale = 0.24;

obstacle4 = createSprite(1250, 360, 40, 60);

obstacle5 = createSprite(1480, 360, 40, 60);

obstacle6 = createSprite(1730, 360, 40, 60);

obstacle7 = createSprite(2000, 360, 40, 60);

obstacle8 = createSprite(2200, 360, 40, 60);

obstacle9 = createSprite(2680,360,40,60);

obstacle10 = createSprite(2950,360,40,60);

obstacle11 = createSprite(3200,360,40,60);

obstacle12 = createSprite(3500,360,40,60);

obstacle13 = createSprite(3750,360,40,60);

obstacle14 = createSprite(4050,360,40,60);

obstacle15 = createSprite(4450,360,40,60);

//obstacle16 = createSprite(4600,360,40,60);

obstacle17 = createSprite(4950,360,40,60);

obstacle18 = createSprite(5150,360,40,60);

obstacle19 = createSprite(5400,360,40,60);

obstacle20 = createSprite(5650,360,40,60);

obstacle21 = createSprite(5900,360,40,60);


npc2 = createSprite(2500,350,30,150);

npc3 = createSprite(4800,350,30,150);


ground = createSprite(10,400,10000,20);
ground.x = ground.width /2;

money = 0; 


obstaclesGroup = new Group();

textGroup = new Group();
}

function draw() {
background(bg);



if(gameState === Play) {


  textbox1.visible = false;
  resumeButton1.visible = false;

  textbox2.visible = false;
  resumeButton2.visible = false;

  textbox3.visible = false;
  resumeButton3.visible = false;

  textbox4.visible = false;
  resumeButton4.visible = false;
  
  if(keyDown("SPACE") ) { 
    pc.velocityY = -10;
  }

  pc.velocityY = pc.velocityY + 0.5

  if(keyDown("RIGHT_ARROW")) {
    changePosition(5,0);
  }

  if(keyDown("LEFT_ARROW")) {
    changePosition(-5,0);
  }  

    if (pc.isTouching(wall1)){
      gameState = Pause;
       }

}
 else if (gameState === Pause) {

  if(keyDown("SPACE")) {
  pc.velocityY = 0;
  }

  if(keyDown("RIGHT_ARROW")) {
    changePosition(0,0);
  }

  if(keyDown("LEFT_ARROW")) {
    changePosition(0,0);
  }

    resumeButton1.visible = true;
    textbox1.visible = true;

    resumeButton2.visible = true;
    textbox2.visible = true;

    resumeButton3.visible = true;
    textbox3.visible = true;

    resumeButton4.visible = true;
    textbox4.visible = true;

    if(mousePressedOver(resumeButton1)) {
      gameState = Resume;
    }

    else if(mousePressedOver(resumeButton2)) {
      gameState = Resume;
    }

    else if(mousePressedOver(resumeButton3)) {
      gameState = Resume; 
    }

    else if(mousePressedOver(resumeButton4)) {
      gameState = Resume; 
    }
}
 else if (gameState === Resume) {

  textbox1.visible = false;
  resumeButton1.visible = false;

  textbox2.visible = false;
  resumeButton2.visible = false;

  textbox3.visible = false;
  resumeButton3.visible = false;

  textbox4.visible = false;
  resumeButton4.visible = false;


   if (pc.isTouching(wall2)){
    wall2.destroy();
    gameState = Pause;
    }

  else if (pc.isTouching(wall3)){
    wall3.destroy();
    gameState = Pause;
    
    }  

    else if (pc.isTouching(endwall)){
      endwall.destroy();
      gameState = End; 
      }
  

  if(keyDown("SPACE") ) {
    pc.velocityY = -10;
  }
  pc.velocityY = pc.velocityY + 0.5

  if(keyDown("RIGHT_ARROW")) {
    changePosition(5,0);
  }
  if(keyDown("LEFT_ARROW")) {
    changePosition(-5,0);
  } 
 }
 if(gameState === End) {

  if(keyDown("SPACE")) {
    pc.velocityY = 0;
    }
  
    if(keyDown("RIGHT_ARROW")) {
      changePosition(0,0);
    }
  
    if(keyDown("LEFT_ARROW")) {
      changePosition(0,0);
    }
 }

textSize(20);
fill(57, 255, 20);
text("$ "+ money, money.x = pc.x,50);

restart.x = pc.x;

if (pc.isTouching(object1)){
  object1.destroy();
  money = +10;
  } 
  else if (pc.isTouching(object2)){
    object2.destroy();
    money = +20;
    } 
    else if (pc.isTouching(object3)){
      object3.destroy();
      money = +30;
      } 
      else if (pc.isTouching(obstacle1)){
        restart.visible = true;
        gameState = End;
        } 
        else if (pc.isTouching(obstacle2)){
          restart.visible = true;
          gameState = End;
          }
          else if (pc.isTouching(obstacle3)){
            restart.visible = true;
            gameState = End;
            }

            if(mousePressedOver(restart)) {
              gameState = Play; 
            }        
          
camera.position.x = pc.x;

  if (ground.x > 1200){
    ground.x = ground.width/2;
  }

  textbox1.depth = textbox1.depth + 1;
  textbox2.depth = textbox2.depth + 1;
  textbox3.depth = textbox3.depth + 1;

  function changePosition(x,y){
    pc.x = pc.x + x;
    pc.y = pc.y + y;
  }


pc.collide(ground);

 drawSprites();
}