class Sand {
    constructor(x,y){
        var options = {
            restitution:0.8,
            friction:3,
            dencity:30
        }
        this.x=x;
        this.y=y;
        this.r=20;
        this.body=Bodies.circle(this.x,this.y,20,options)

        World.add(world,this.body);

    }
    display(){
        var sandpose=this.body.position;
        push();
        translate(sandpose.x,sandpose.y);
        rectMode(CENTER);
        strokeWeight(4);
        fill("yellow");
        rect(0, 0 , this.r,this.r);
        pop();
        
    }
};