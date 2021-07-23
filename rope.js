class Rope {
    constructor(body1, body2, offsetX, offsetY) {
        this.offsetX = offsetX
        this.offsetY = offsetY
        var rope_options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:offsetY}
        }
        this.rope = Constraint.create(rope_options);
        World.add(world, this.rope);
    }

    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        
        strokeWeight(4);

       

        var AnchorX = pointB.x+this.offsetX
        var AnchorY = pointB.y+this.offsetY

        line(pointA.x, pointA.y, AnchorX, AnchorY);
    }
}