
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree1,tree2,stone,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8;
var apple1,apple2,apple3,apple4,apple5,apple6,apple7;
var world,boy,gardenImg;
var launcher;

function preload(){
	boy=loadImage("images/boy.png");
  gardenImg=loadImage("images/garden2.jpg");
}

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stone = new Stone(235,420,30); 

	mango1 = new Mango(1100,100,30);
  mango2 = new Mango(1170,150,30);
	mango3 = new Mango(1010,140,30);
	mango4 = new Mango(1000,70,30);
	mango5 = new Mango(1100,70,30);
	mango6 = new Mango(1000,230,30);
	mango7 = new Mango(900,230,40);
	mango8 = new Mango(1140,230,40);

  apple1 = new Apple(575,100,30);
  apple2 = new Apple(500,175,40);
  apple3 = new Apple(600,20,36);
  apple4 = new Apple(450,100,30);
  apple5 = new Apple(700,30,30);
  apple6 = new Apple(675,150,30);
	apple7 = new Apple(775,100,36);

	tree1 = new Tree(1100,580);
  tree2 = new Tree(670,500)
	ground = new Ground(width/2,600,width,20);

  launcher = new Launcher(stone.body,{x:140,y:420});

	Engine.run(engine);
}

function draw() {

  background(gardenImg);
  Engine.update(engine);
  textSize(25);
  fill("black")
  text("Hit the mangoes and apples with the stone!",10 ,50);
  image(boy ,100,340,200,300);
  

  tree1.display();
  tree2.display();
  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();

  apple1.display();
  apple2.display();
  apple3.display();
  apple4.display();
  apple5.display();
  apple6.display();
  apple7.display();

  stone.display();
  ground.display();
  launcher.display();


  detectollision1(stone,mango1);
  detectollision1(stone,mango2);
  detectollision1(stone,mango3);
  detectollision1(stone,mango4);
  detectollision1(stone,mango5);
  detectollision1(stone,mango6);
  detectollision1(stone,mango7);
  detectollision1(stone,mango8);

  detectollision2(stone,apple1);
  detectollision2(stone,apple2);
  detectollision2(stone,apple3);
  detectollision2(stone,apple4);
  detectollision2(stone,apple5);
  detectollision2(stone,apple6);
  detectollision2(stone,apple7);

}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased() {
	launcher.fly();
}

function keyPressed() {
  if(keyCode===32){
    launcher.attach(stone.body)
  }
}

function detectollision1(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }

  function detectollision2(lstone,lapple){

    appleBodyPosition=lapple.body.position
    stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, appleBodyPosition.x, appleBodyPosition.y)
      if(distance<=lapple.r+lstone.r)
      {
        Matter.Body.setStatic(lapple.body,false);
      }
  
    }