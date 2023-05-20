
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var pacman, pacmanImage;
var ghost;
var pellet;

var rightup;
var leftup;
var leftdown;
var rightdown;
var middleup;
var middledown;
var middleright;
var middleleft;

var wallright;
var wallleft;
var wallup;
var walldown;

function preload() {
 pacmanImage = loadImage("pacman.gif"); 
}

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;


  var circle_options = {
    restitution: 0.2,
    isStatic: true,
  }

  pacman = Bodies.circle(130,30,15, circle_options);
  World.add(world, pacman);


  var rect_options = {
    isStatic: true,
  }

  rightup = Bodies.rectangle(320, 80, 80, 80, rect_options);
  World.add(world, rightup);

  rightdown = Bodies.rectangle(320, 320, 80, 80, rect_options);
  World.add(world, rightdown);

  
  leftup = Bodies.rectangle(80, 80, 80, 80, rect_options);
  World.add(world, leftup);

  
  leftdown = Bodies.rectangle(80,320,80,80, rect_options);
  World.add(world, leftdown);

  
  middleup = Bodies.rectangle(200, 80, 80, 80, rect_options);
  World.add(world, middleup);

  middledown = Bodies.rectangle(200, 320, 80, 80, rect_options);
  World.add(world, middledown);

  
  middleleft = Bodies.rectangle(80, 200, 80, 80, rect_options);
  World.add(world, middleleft);

  middleright = Bodies.rectangle(320, 200, 80, 80, rect_options);
  World.add(world, middleright);

  wallright = Bodies.rectangle(5, 200, 10, 400, rect_options);
  World.add(world, wallright);

  wallleft = Bodies.rectangle(395, 200, 10, 400, rect_options);
  World.add(world, wallleft);

  wallup = Bodies.rectangle(200, 5, 10, 400, rect_options);
  World.add(world, wallup);

  walldown = Bodies.rectangle(200, 395, 10, 400, rect_options);
  World.add(world, walldown);



 // pacman = createSprite(40,40,20,50);
 
}

function draw() {
  background(255,255,255); 
  rectMode(CENTER);
  ellipseMode(RADIUS);1
 // pacman.addImage(pacmanImage);
  background("black");
   moveRight();
  
  
     if(keyCode === 40){
      pacman.position.y += 2;
     }

  ellipse(pacman.position.x, pacman.position.y, 15,15);

  rect(rightup.position.x, rightup.position.y, 80, 80);
  rect(rightdown.position.x, rightdown.position.y, 80, 80);
  rect(leftup.position.x, leftup.position.y, 80, 80);
  rect(leftdown.position.x, leftdown.position.y, 80, 80);
  rect(middleup.position.x, middleup.position.y, 80, 80);
  rect(middledown.position.x, middledown.position.y, 80, 80);
  rect(middleleft.position.x, middleleft.position.y, 80, 80);
  rect(middleright.position.x, middleright.position.y, 80, 80);

  rect(wallright.position.x, wallright.position.y, 10, 400);
  rect(wallleft.position.x, wallleft.position.y, 10, 400);
  rect(wallup.position.x, wallup.position.y, 400, 10);
  rect(walldown.position.x, walldown.position.y, 400, 10);

// pacman.scale = 1;
// pacman.speed = 0.4;
// image(pacmanImage, 0, 0, 20, 20);

Engine.update(engine);

  drawSprites();
}

function moveRight(){
  if(keyCode === 39){
    pacman.position.x += 2;
     }

}

//animation and border