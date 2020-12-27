class SlingShot{
    constructor(b1,b2){
        var option = {
            bodyA: b1,
            bodyB: b2
        }
    
        this.sling = Constraint.create(option);
        World.add(world, this.sling);
    
    }
    display(){
        var point1 = this.sling.bodyA.position;
        var point2 = this.sling.bodyB.position;

        strokeWeight(5);
        line(point1.x, point1.y, point2.x, point2.y);

    }
}