var palmerStarter;
var startButton;
var title;
var gameStarted = false;
var net;
var lostScreen;
var howToPlay;
var addDifficult = 0.001;

title = createSprite(220, 70);
title.setAnimation("title");
title.scale = 1.5;

howToPlay = createSprite(220, 300);
howToPlay.setAnimation("howplay");
howToPlay.scale = 0.5;

startButton = createSprite(200, 200);
startButton.setAnimation("start");
startButton.scale = 0.25;

palmerStarter = createSprite(330, 340);
palmerStarter.setAnimation("palmer running");
palmerStarter.scale = 0.3;
palmerStarter.visible = false; 

net = createSprite(200, 50);
net.setAnimation("net");
net.scale = 0.5;
net.visible = false;


function changefromstartingscreen() {  
  title.visible = false;
  startButton.visible = false;
  howToPlay.visible = false;
  
  gameStarted = true;
  
  palmerStarter.visible = true;
  net.visible = true;
}
function makenetsmaller() {
  net.scale = net.scale - (0.01 + addDifficult);
}
function lost() {
  net.visible = false;
  palmerStarter.visible = false;
  lostScreen = createSprite(200, 200);
  lostScreen.setAnimation("lost");
  lostScreen.scale = 0.65;
}

function draw() {
  background("green");
  if (gameStarted) {
    makenetsmaller();
  }
  if (net.scale < 0.1) {
    lost();
    net.x = randomNumber(1, 400);
    net.y = randomNumber(1, 400);
  }
  
  if (!gameStarted && mousePressedOver(startButton)) {
    changefromstartingscreen();
  }
  if (mouseIsOver(net)) {
    net.scale = 0.5;
    net.x = randomNumber(1, 400);
    net.y = randomNumber(1, 400);
    addDifficult = addDifficult + 0.001;
  }
  
  if (gameStarted) {
    palmerStarter.position.x = mouseX;
    palmerStarter.position.y = mouseY;
  }
  

  drawSprites();
}
