function Wall(x,y) {
  this.x = x;
  this.y = y;
  this.xDir = 3;
  this.r = 20;
  this.health = 15;
  this.toDelete = false;

  this.show = function(){
    image(wall, this.x, this.y);
  }

  this.showHealth = function() {
    textSize(20);
    text(this.health, this.x + 18, this.y - 10);
  }

  this.move = function() {
    this.x = this.x + this.xDir;

    if(walls[walls.length - 1]. x > width - this.r){
      this.xDir = this.xDir *  -1;
    }

    if(walls[0].x < 0){
      this.xDir = this.xDir * -1;
    }
  }

  this.hitsWall = function(Bullet) {
    let d = dist(this.x, this.y, Bullet.x, Bullet.y)
    if(d < this.r + Bullet.r){

      return true;
    }
  }

  this.damage = function() {
    if(this.health > 0 ){
      this.health--;
    }

    if(this.health == 0){
      this.toDelete = true;
    }
  }
}
