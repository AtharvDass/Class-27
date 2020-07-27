
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var roof;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof=new Roof(400,250,300,20);
	bob3=new Bob(400,450,25);
	bob2=new Bob(350,450,25);
	bob4=new Bob(450,450,25);
	bob1=new Bob(300,450,25);
	bob5=new Bob(500,450,25);
	rope1=new Rope(bob1.body,{x:300,y:250});
	rope2=new Rope(bob2.body,{x:350,y:250});
	rope3=new Rope(bob3.body,{x:400,y:250});
	rope4=new Rope(bob4.body,{x:450,y:250});
	rope5=new Rope(bob5.body,{x:500,y:250});
   
	Engine.run(engine);
	
}


function draw() {
  
  background(255);
  rectMode(CENTER);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope2.display();
  rope3.display();
  rope1.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:0});
	}
}



