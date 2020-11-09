
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
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(width/2, height-70,width, 20);
	dustbin1= new Dustbin(width/3+150,height-107.5,25,100);
	dustbin2= new Dustbin(2*width/3+150, height-107.5,25,100);
	dustbin3=new Dustbin(width/2+150,height-70,800/3,25);
	paper1=new Paper(100,350,30);
	ngdustbin= new Dustbin1(33*width/48, height-180, 300, 300)

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
  
  ngdustbin.display();
  drawSprites();
 }

function keyPressed()
{
	if(keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:150,y:-150});
	}
}

