const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,Ground1,box3,pig1,log1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = new Box(200,200,50,50);
    box2 = new Box(180,50,50,50);
    box3 = new Box(230,10,50,50);
    Ground1 = new Ground(200,390,400,20);
    pig1 = new Pig(200,200);
    log1 = new log(100,300,100,PI/4);
}
function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    Ground1.display();
    box2.display();
    box3.display();
    pig1.display();
    log1.display();
}
