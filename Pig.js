class Pig {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 40, 40, options);
    this.width = 40;
    this.height = 40;
    this.image=loadImage("sprites/enemy.png")
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
