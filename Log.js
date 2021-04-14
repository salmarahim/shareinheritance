class Log {
  constructor(x, y, height,angle) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 20, height, options);
    this.width = 20;
    this.height = height;
    this.image=loadImage("sprites/wood2.png")
    Matter.Body.setAngle(this.body,angle)
    World.add(world, this.body);
  }
  display(){

    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    imageMode(CENTER);
    fill("brown");
    strokeWeight(4);
    stroke("green");
    image(this.image,0, 0, this.width, this.height);
    pop();
  }
};

  