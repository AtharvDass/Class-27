class Bob{
    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution:1.1,
            friction:0.5,
            density:1.2
        }
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
        this.r=r;
    }
    display(){
    
     
    push();
    translate(this.body.position.x,this.body.position.y);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
    }
}