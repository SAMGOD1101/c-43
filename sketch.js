const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



function setup() {
  createCanvas(1350,700);
  edges = createEdgeSprites();
  WallGroup = createGroup();


  engine = Engine.create();
  world = engine.world; 
  
  wall1 = new Wall(82,0,10,100);
  wall2 = new Wall(0,151,90,10);
  wall3 = new Wall(93,45,90,10);
  wall4 = new Wall(160,55,10,60);
  wall5 = new Wall(170,83,40,10);
  wall6 = new Wall(278,0,10,300);
  wall7 = new Wall(62,161,10,90);
  wall8 = new Wall(72,217,90,10);
  wall9 = new Wall(190,150,90,10);
  wall10 = new Wall(190,280,90,10);
  wall11 = new Wall(0,408,200,10);
  wall12 = new Wall(151,416,10,70);
  wall13 = new Wall(71,418,10,90);
  wall14 = new Wall(160,445,100,10);
  wall15 = new Wall(211,454,10,90);
  wall16 = new Wall(0,630,160,10);
  wall17 = new Wall(286,180,150,10);
  wall18 = new Wall(524,0,10,550);
  wall19 = new Wall(348,187,10,50);
  wall20 = new Wall(437,370,90,10);
  wall21 = new Wall(531,121,90,10);
  wall22 = new Wall(820,300,10,450);
  wall23 = new Wall(741,290,90,10);
  wall24 = new Wall(851,0,10,200);
  wall25 = new Wall(858,85,90,10);
  wall26 = new Wall(905,92,10,80);
  wall27 = new Wall(1107,0,10,250);
  wall28 = new Wall(1050,133,60,10);
  wall29 = new Wall(1016,426,10,400);
  wall30 = new Wall(1256,0,10,70);
  wall31 = new Wall(1246,503,10,250);
  wall32 = new Wall(1160,627,90,10);
  wall33 = new Wall(1115,190,90,10);
  wall34 = new Wall(1016,510,90,10);
  wall35 = new Wall(823,465,90,10);
  wall36 = new Wall(933,581,90,10);
  wall37 = new Wall(532,467,90,10);

  tank1 = new Tank(30,358);
  tank2 = new Tank(1295,354);
}

function draw() {
  background("dark blue");

wall1.display();
wall2.display();
wall3.display();
wall4.display();
wall5.display();
wall6.display();
wall7.display();
wall8.display();
wall9.display();
wall10.display();
wall11.display();
wall12.display();
wall13.display();
wall14.display();
wall15.display();
wall16.display();
wall17.display();
wall18.display();
wall19.display();
wall20.display();
wall21.display();
wall22.display();
wall23.display();
wall24.display();
wall25.display();
wall26.display();
wall27.display();
wall28.display();
wall29.display();
wall30.display();
wall31.display();
wall32.display();
wall33.display();
wall34.display();
wall35.display();
wall36.display();
wall37.display();

  tank1.display();
  tank2.display();

  keyPressed();

 

  drawSprites();

  if(tank1.isTouching(wall1)){
    tank1.x=28;
    tank1.y=358;
  }
  
  textSize(30);
  fill("white");
  text(mouseX + "," + mouseY,30,30);
}
function keyPressed(){
  if(keyDown("UP_ARROW")){
    tank1.y = tank1.y-5;
  }
  if(keyDown("DOWN_ARROW")){
    tank1.y = tank1.y+5;
  }
  if(keyDown("LEFT_ARROW")){
    tank1.x = tank1.x-5;
  }
  if(keyDown("RIGHT_ARROW")){
    tank1.x = tank1.x+5;
  }
}