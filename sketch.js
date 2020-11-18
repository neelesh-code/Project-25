
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, dustbin2, dustbin3;
var ngdustbin;
var ground1;
var paper1;

function preload()
{
	dustbinImg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(450, height-70,width, 20);
	dustbin1= new Dustbin(600,height-107.5,25,100);
	dustbin2= new Dustbin(800, height-107.5,25,100);
	dustbin3=new Dustbin(700,height-70,200,25);
	paper1=new Paper(150,350,30);

	ngdustbin=createSprite(700, height-200, 100, 100);
	ngdustbin.addImage(dustbinImg);
	ngdustbin.scale = 0.8;


	Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  background(255);
  paper1.display(); 
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 }

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:150,y:-150});
	}
}

