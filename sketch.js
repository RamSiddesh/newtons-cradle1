
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(250,200,250,20);
	bob1 = new BobClass(150,300,20);
	bob2 = new BobClass(190,300,20);
	bob3 = new BobClass(230,300,20);
	bob4 = new BobClass(270,300,20);
	bob5 = new BobClass(310,300,20);
	
	chain1 = new Chain(bob1.body,{x:150,y:200});
	chain2 = new Chain(bob2.body,{x:190,y:200});
	chain3 = new Chain(bob3.body,{x:230,y:200});
	chain4 = new Chain(bob4.body,{x:270,y:200});
	chain5 = new Chain(bob5.body,{x:310,y:200});



	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("green");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof1.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:-25});
	 }
   }



