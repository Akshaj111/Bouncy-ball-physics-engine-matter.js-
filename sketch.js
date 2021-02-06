const Engine = Matter.Engine;
//name spacing 
const World = Matter.World;
const Bodies = Matter.Bodies; 
//const (constant) keyword 
//engine is used to create Physics Engine
//world is used to create physical world
//bodies is used to create the physical objects that inhabit the world
var engine,world;
var ground;
var ball;
function setup() {
  createCanvas(400,400);
  
  engine = Engine.create();
  world = engine.world; 
var ground_options = {    
isStatic:true 

}
var ball_options = {
restitution: 1

}

  ball = Bodies.circle(200,200,20,ball_options);
  World.add(world,ball);

  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
  console.log(ground)
}

function draw() {
  background("green");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  //3 objects in matter.js
  
}