
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var slingshot, Tree, stone ;

function preload()
{
	boy = loadImage("boy.png");
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here. 

	Tree = new tree (960,800); 

	stone = new Stone(325,688,50);

	slingshot = new SlingShot(this.stone,{x: 688, y: 50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  image (boy,300,650,200,200);

  Tree.display();
  stone.display();

  slingshot.display();

  drawSprites();
 
}


function mouseDragged(){
    Matter.Body.setPosition(this.stone,{x: mouseX, y: mouseY});
    
    }
    
    function mouseReleased(){
    
        slingshot.fly();
    }
