class BobClass{
    constructor(x, y, radius) {
        var options = {
            'restitution':0.5,
            'friction':0.5,
            'density':0.5
        }
        this.body = Bodies.circle(x, y,radius,options);
        this.radius = radius;
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle)
        ellipseMode(RADIUS);
        ellipse( 0,0, this.radius, this.radius);
        pop();
      }
}