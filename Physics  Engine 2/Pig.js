class Pig{
    constructor(x,y){
        var options ={
            friction:0.3,
            density:1.0,
            restitution:0.7
        }

this.body = Bodies.rectangle(x,y,40,40,options);
this.width = 40;
this.height = 40;
World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("green");
    strokeWeight(2);
    stroke("yellow");
    rect(0,0,this.width,this.height);
    pop();
    
}
}