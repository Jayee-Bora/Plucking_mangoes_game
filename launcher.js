class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
       
        if(this.chain.bodyA!=null){
            var A = this.chain.bodyA.position;
            var B = this.chain.pointB;
            strokeWeight(4);
            line(A.x, A.y, B.x, B.y);
        }
    }
    fly(){
        this.chain.bodyA= null;
    }
}