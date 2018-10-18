function Alien(x, y) {
  this.x = x;
  this.y = y;
  this.r = 10;
  this.yDirection = 3;
  this.xDirection = 1;
  this.velocity = 1;
  this.toDelete = false;

  this.show = function() {
    image(alienImage1, this.x - 10, this.y + 20);
  }

  this.move = function() {
    this.x = this.x + (this.xDirection * this.velocity);

  }

  this.down = function() {
    this.velocity = this.velocity * -1;
    this.y = this.y + this.yDirection;

  }

  this.up = function() {
    this.yDirection = this.yDirection * -1;
  }

  this.destroy = function() {
    this.toDelete = true;
  }

  this.shoot = function() {

    if (random(1000) < aliensarrayLenght / aliens.length) {
      aliensBullets.push(new Bullet(this.x, this.y));

    }
  }
}
