let ship;
let open;
let aliens = [];
let walls = [];
let stars = new Array(100);
let gameStart = false;
let aliensarrayLenght;
let aliensBullets = [];
let bullets = [];
let shiftToStart = "Press SHIFT to start";
let lives = 3;
let livesHeader = "Lives: ";
let gameOver = "";
let youWin = ""

let invaderKilled;
let shoot;
let alienImage1;
let player;
let wall;

function setup() {
  let alienCounter = 0;
  createCanvas(600, 600);
  ship = new Ship();
  open = new Open();

  for (let i = 0; i < 7; i++) {
    for (let u = 0; u < 7; u++) {
      aliens[alienCounter++] = new Alien(i * 50 + 160, u * 25 + 25);
    }
  }

  for (let i = 0; i < 4; i++) {
    walls[i] = new Wall(i * 80 + 100, height - 150);
  }

  aliensarrayLenght = aliens.length;

  for (let i = 0; i < stars.length; i++) {
    stars[i] = new Star();
  }
}

function preload() {

  invaderKilled = loadSound("extra/invaderkilled.wav");
  shoot = loadSound("extra/shoot.wav");
  alienImage1 = loadImage("extra/alien1.png");
  player = loadImage("extra/player.png");
  wall = loadImage("extra/space-invaders.png");

}

function draw() {
  alienImage1.resize(15, 15);
  wall.resize(50, 50);
  background(0);
  textSize(20);
  open.show(gameStart);

  if (gameStart) {
    shiftToStart = "";
    ship.show();
    ship.move();
    ship.Range();

    //Walls showing and Moving
    for (let i = 0; i < walls.length; i++) {
      walls[i].show();
      walls[i].showHealth();
      walls[i].move();
    }

    for (let i = 0; i < walls.length; i++) {
      for (let j = 0; j < aliensBullets.length; j++) {
        if (walls[i].hitsWall(aliensBullets[j])) {
          walls[i].damage();
          aliensBullets[j].alienBulletRemover = true;
        }
      }
    }

    for (let i = 0; i < walls.length; i++) {
      for (let j = 0; j < bullets.length; j++) {
        if (walls[i].hitsWall(bullets[j])) {
          bullets[j].destroy();
        }
      }
    }

    // Alien Bullet showing and Moving
    for (let i = 0; i < aliensBullets.length; i++) {

      aliensBullets[i].show();
      aliensBullets[i].alienBulletsMove();
    }

    for (let i = 0; i < aliensBullets.length; i++) {
      if (ship.hitShip(aliensBullets[i])) {
        aliensBullets[i].alienBulletRemover = true;

        if (lives > 0) {
          lives--;
        }
      }
    }

    // Aliens showing and movinng. Calling the shoot(). Aliens motion
    for (let i = 0; i < aliens.length; i++) {
      aliens[i].show();
      aliens[i].move();
      aliens[i].shoot();

      if (aliens[aliens.length - 1].x >= width || (aliens[0].x <= 0)) {
        aliens[i].down();
      }
      if (aliens[aliens.length - 1].y > height / 2 || (aliens[0].y < 0)) {
        aliens[i].up();
      }

    }

    // Ships bullets showing and moving. Destroying aliens with bullet contact
    for (let i = 0; i < bullets.length; i++) {
      bullets[i].show();
      bullets[i].move();
      for (let u = 0; u < aliens.length; u++) {
        if (bullets[i].hits(aliens[u])) {

          invaderKilled.play();
          bullets[i].destroy();
          aliens[u].destroy();
        }
      }
    }
    // Deleting the bullets that hit the alien
    for (let i = bullets.length - 1; i >= 0; i--) {
      if (bullets[i].toDelete) {
        bullets.splice(i, 1);
      }
    }

    // Deleting the aliens that were hit by the ship's bullet
    for (let i = aliens.length - 1; i >= 0; i--) {
      if (aliens[i].toDelete) {
        aliens.splice(i, 1);
      }
    }

    for (let i = aliensBullets.length - 1; i >= 0; i--) {
      if (aliensBullets[i].alienBulletRemover) {
        aliensBullets.splice(i, 1);
      }
    }

    for (let i = walls.length - 1; i >= 0; i--) {
      if (walls[i].toDelete) {
        walls.splice(i, 1);
      }
    }
  }

  // Stars moving and showing
  for (let i = 0; i < stars.length; i++) {
    stars[i].show();
    stars[i].move();
  }
}

function keyPressed() {
  if (keyCode === SHIFT) {
    gameStart = true;
  }
  if (keyCode === SHIFT) {
    bullets.push(new Bullet(ship.x, ship.y));
    shoot.play();
  }
  if (keyCode === RIGHT_ARROW) {
    ship.setDirection(1);
  }
  if (keyCode === LEFT_ARROW) {
    ship.setDirection(-1);
  }

}
