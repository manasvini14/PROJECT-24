const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer, iron, stone, rubber;
var sand1, sand2, sand3, sand4, sand5, sand6;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone = new Stone (700,320,100,200);
    iron = new Iron (300,350);
    rubber = new Rubber (900,450,70);
  
    sand1 = new Sand (505,450,10);
    sand2 = new Sand (510,450,10);
    sand3 = new Sand (515,450,10);
    sand4 = new Sand (525,450,10);
    sand5 = new Sand (515,450,10);
    sand6 = new Sand (520,450,10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron.display();    
    rubber.display();
    stone.display();

    sand1.display();
    sand2.display();
    sand3.display();
    sand4.display();
    sand5.display();
    sand6.display();


}