
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
  class pendelum{
constructor(x,y,color){
var options={
restitution:1,
friction:0,
frictionAir:0.0,
slop:1,
interia:infinity
};
this.bodie=bodies.rectangle(x,y,40,40,options)
this.x=x;
this.y=y
this.color=color
world.add(world,this.body);
}
display(){
var angle=this.body.angle;
var pos=this.body.position;
push();
translate(pos.x,pos.y);
rotate(angle);
noStroke();
fill(this.color);
ellipse(0,0,60,60);
Pop();
}
  









  



























  }
}



