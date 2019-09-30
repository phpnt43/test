export const Snake = {
  game: null,
  board: null,
  cells: [],
  direction: 0,
  moving: false,

  init(game, board){
    this.game = game;
    this.board = board;
    this.cells = [];
    this.direction = 1;
    this.moving = false;
  },

  create() {
    let startCells = [
      {x: Math.round((this.board.countWidthCell - 1) / 2), y: Math.round((this.board.countHeightCell - 1) / 2)},
      {x: Math.round((this.board.countWidthCell - 1) / 2), y: Math.round((this.board.countHeightCell - 1) / 2) + 1},
    ];

    for (let startCell of startCells) {
      this.cells.push(this.board.getCell(startCell.x, startCell.y));
    }
  },

  start(keyCode){
    switch (keyCode) {
      case (38):
        if (this.direction !== 3) {
          this.direction = 1;
          this.moving = true;
        }
        break;
      case (39):
        if (this.direction !== 4) {
          this.direction = 2;
          this.moving = true;
        }
        break;
      case (40):
        if (this.direction !== 1) {
          this.direction = 3;
          this.moving = true;
        }
        break;
      case (37):
        if (this.direction !== 2) {
          this.direction = 4;
          this.moving = true;
        }
        break;
      case (32):
        this.pause();
        break;
    }
  },

  stop(){
    this.moving = false;
  },

  pause(){
    this.moving ? this.stop() : this.start();
  },

  hasCell(cell){
    return this.cells.find(part => {
      return part.x === cell.x && part.y === cell.y
    })
  },

  move(){
    if (this.moving) {
      this.game.gameScore += Math.round(0.001 * (1000 - this.game.intervalGame));
      let cell = this.getNextCell();

      if (!cell || this.board.isBombCell(cell) || this.hasCell(cell)) {
        this.game.gameOver();
        this.stop();
      }

      this.cells.unshift(cell);

      if (!this.board.isFoodCell(cell)) {
        this.cells.pop();
      } else {
        this.game.onSnakeEat();
        this.game.gameScore += 50;
        this.board.createFood();
      }
    }
  },

  getNextCell(){
    let head = this.cells[0];
    let x = head.x;
    let y = head.y;
    switch (this.direction) {
      case (1):
        y -= 1;
        break;
      case (2):
        x += 1;
        break;
      case (3):
        y += 1;
        break;
      case (4):
        x -= 1;
        break;
    }

    if (x > -1 && x < this.board.countWidthCell && y > -1 && y < this.board.countHeightCell) {
      return this.board.getCell(x, y);
    }
    return false;
  },

  renderHead(){
    let head = this.cells[0],
      halfSizeX = this.game.sprites.head.width / 2,
      halfSizeY = this.game.sprites.head.height / 2,
      degree = 90 * (this.direction - 1);

    this.game.ctx.save();

    this.game.ctx.translate(head.x * this.board.cellV + this.board.offsetX, head.y * this.board.cellV + this.board.offsetY);
    this.game.ctx.translate(halfSizeX, halfSizeY);
    this.game.ctx.rotate(degree * Math.PI / 180);

    this.game.ctx.drawImage(this.game.sprites.head, -halfSizeX, -halfSizeY);

    this.game.ctx.restore();
  },

  renderBody(){
    for (let i = 1; i < this.cells.length; i++) {
      let cell = this.cells[i];
      this.game.ctx.drawImage(this.game.sprites.body, cell.x * this.board.cellV + this.board.offsetX, cell.y * this.board.cellV + this.board.offsetY);
    }
  },

  render() {
    this.renderHead();
    this.renderBody();
  }
};