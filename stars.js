function Star() {

  this.reset = function() {

  this.x = random(width);
  this.y = -random(height);
  this.colour = color(random(255), random(255), random(255));
  this.speed = random(1);

}

  this.show = function() {

    fill(this.colour);
    ellipseMode(CENTER);
    ellipse(this.y, this.x, 5, 5)



  }

    this.reset();

  this.move = function() {
    this.y = this.y + (this.speed * 3);
    if(this.y > height ){
      this.reset();
    }
  }
}
