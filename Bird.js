class Bird {
  constructor(x, y) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 30;
    this.height = 30;
    this.image=loadImage("sprites/bird.png")
    World.add(world, this.body);
  }
  display(){
this.body.position.x=mouseX;
this.body.position.y=mouseY;
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
