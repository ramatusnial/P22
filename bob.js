class Bob {
    constructor(x,y, r){    
    var bob_options ={
        restitution: 0.9,
         density: 1.2
     }
     this.x =x;
     this.y=y;
     this.r=r;
     this.body = Bodies.circle(this.x,this.y,(this.r)/2, bob_options);
     World.add(world, this.body);
  }

  display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill(66);
    ellipse(0,0, this.r,this.r);
    pop();
  }
};