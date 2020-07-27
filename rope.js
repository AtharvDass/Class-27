class Rope{
    constructor(body1,offset){
    
    
        var options={
            bodyA:body1,
           
            pointB:offset
        }
        this.pointB=offset;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
        
    }
    display(){
        var pA=this.rope.bodyA.position;
        var pB=this.pointB;
        strokeWeight(2)
        line(pA.x,pA.y,pB.x,pB.y);
    }
}