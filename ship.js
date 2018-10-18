function Ship() {
  this.x = width / 2;
  this.y = height - 20;
  this.r = 20;
  this.velocity = .5;
  this.direction = 0;

  this.show = function() {

    image(player, this.x - 10 , this.y - 15);
  }

  this.move = function() {
    this.x = this.x + (this.direction * 2);
  }

  this.setDirection = function(dir) {
    this.direction = dir;
  }

  this.Range = function() {
    if (this.x > width - 25 || this.x < 0) {
      this.direction = 0;
    }
  }

  this.hitShip = function(alienBullet) {
    let distance = dist(this.x, this.y, alienBullet.x, alienBullet.y);

    if (distance < this.r + alienBullet.r) {
      return true;
    } else {
      return false;
    }
  }
}
