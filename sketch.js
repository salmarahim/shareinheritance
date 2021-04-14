const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1, box2,box3,box4,box5;
var ground;
var bird;
var log1,log2,log3,log4;
var pig1,pig2;
var bg;


function preload(){
bg=loadImage("sprites/bg.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    bird=new Bird(200,200);

    box1 = new Box(700,380,50,50);
    box2 = new Box(900,380,50,50);
    pig1=new Pig(800,380);
    log1=new Log(800,330,300,PI/2);

    box3=new Box(700,280,50,50);
    box4=new Box(900,280,50,50);
    pig2=new Pig(800,280);
    log2=new Log(800,230,300,PI/2);

    box5=new Box(800,200,50,50);
    log3=new Log(750,200,140,PI/6);
    log4=new Log(850,200,140,-PI/6);



 
}

function draw(){
    background(bg);
    Engine.update(engine);
 
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird.display();
    log1.display();

    box3.display();
    box4.display();
    pig2.display();
    log2.display();

    box5.display();
    log3.display();
    log4.display();


   
}