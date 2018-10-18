function Open() {

  this.shiftToStart = "Press SHIFT to start";
  this.livesHeader = "Lives: "
  this.gameOver = "";
  this.youWin = "";

  this.show = function(gameStart) {
    text(shiftToStart, width / 2 - 75, height / 2);
    text(youWin, width / 2 - 75, height / 2);
    text(gameOver, width / 2 - 75, height / 2);

    if (gameStart) {
      this.shiftToStart = "";
      text(livesHeader + lives, width - 75, height - 25);
    }

    if (aliens.length == 0) {
      this.youWin == "YOU WIN!!!!";
      gameStart = false;
    }

    if (lives == 0) {
      gameOver = "GAME OVER";
    }
  }

}
