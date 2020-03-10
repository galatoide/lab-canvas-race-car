class Car {
    constructor(game) {
      this.context = game.context;
      this.x = game.width / 4;
      this.y = game.height / 2;
  
      this.width = 30;
      this.height = 30;
  
      this.speedX = 0;
      this.speedY = 0;
    }
}