const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;



function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;


    ground1 = new ground(600,600,1200,20);
   

    box1 = new box(900,100,70,70);
    box2 = new box(900,100,70,70);
    box3 = new box(900,100,70,70);
    box4 = new box(900,100,70,70);
    box5 = new box(900,100,70,70);
    box6 = new box(900,100,70,70);
    box7 = new box(800,100,70,70);
   
    ball1=new ball(200,200,80,80)
   // log6 = new Log(230,180,80, PI/2);
    rope1 = new rope(ball1.body,{x:500,y:50});
}

function draw(){
    background("black");
    Engine.update(engine);
   
    box1.display();
    box2.display();
    ground1.display();
   

    box3.display();
    box4.display();
    

    box5.display();
    box6.display();
    box7.display();
    ball1.display();
   // log6.display();
   rope1.display();    
}
function mouseDragged(){
Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    rope1.fly()
}
