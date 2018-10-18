function Bullet(x, y) {
  this.x = x;
  this.y = y;
  this.r = 3;
  this.bulletVelocity = 5;
  this.distance = 0;
  this.toDelete = false;
  this.alienBulletRemover = false;

  this.show = function() {
    fill(255);
    rectMode(CENTER);
    rect(this.x, this.y, this.r, 15);

  }

  this.move = function() {
    this.y = this.y - this.bulletVelocity;

  }

  this.hits = function(aliens) {
    this.distance = dist(this.x, this.y, aliens.x, aliens.y);
    if (this.distance < this.r + aliens.r) {
      return true;
    } else {
      return false;
    }
  }

  this.destroy = function() {
    this.toDelete = true;
  }

  this.alienBulletsMove = function() {
    this.y = this.y + this.bulletVelocity;
  }

}
