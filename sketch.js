
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper,leftdustbin,rightdustbin,centerdustbin;
var ground
var dustbinimg

function preload()
{
	dustbinimg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);
dustbin = createSprite(550,570)
dustbin.addImage(dustbinimg)
dustbin.scale = 0.8

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(150,400,20)
leftdustbin = new Dustbin(460,630,10,100)
rightdustbin = new Dustbin(640,630,10,100)
centerdustbin = new Dustbin(550,680,200,10)
ground = new Ground(400,690,800,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  


  paper.display()
  leftdustbin.display()
  rightdustbin.display()
  centerdustbin.display()
  ground.display()
  drawSprites();
  
 
}
function keyPressed(){
	if (keyCode === UP_ARROW)
	Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-80})

	
	
}




