
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground1,box1,box2,box3,paper1,paperImg
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	
   box1= new Box(1200,650); 
   
   paper1= new Paper (200,450,40)
  //paper1.addAnimation(paperImg)
   ground1= new Ground (width/2,670,width,20) 

	//Create the Bodies Here.
   //ground= Bodies.rectangle(width/2,600,width,10,{isStatic:true});
   //World.add(world,ground);
   var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(210);
  box1.display();
  paper1.display();
  ground1.display();

  drawSprites();
 
}


function keyPressed(){
  if (keyCode === UP_ARROW){

  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

  }


}
