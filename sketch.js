const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,slingshot ,box1



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;


  ground=new Ground (440,270,70,50)
  box1=new Box(330,235,30,40)
  box2=new Box(360,235,30,40)
  box3=new Box(390,235,30,40)
  box4=new Box(420,235,30,40)
  box5=new Box(450,235,30,40)
  box6=new Box(360,195,30,40)
  box9=new Box(390,195,38,40)
  box7=new Box(420,195,30,40)
  box8=new Box(390,155,30,40)
  poly=new Polygon(250,180,20,20)
  slingshot = new SlingShot(polygon.body,{x:100, y:200});
  
}

function draw() {
  background(255,255,255); 
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  poly.display()
  slingshot.display()
  
  drawSprites();
}
function mouseDragged(){
  
      Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  slingshot.fly();
  
}

function keyPressed(){
  if(keyCode === 32){
      slingshot.attach(polygon.body);
  }
}