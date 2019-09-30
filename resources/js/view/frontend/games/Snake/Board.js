export const Board = {
  cells: [],
  countWidthCell: 20,
  countHeightCell: 15,
  cellV: 0,
  offsetX: 0,
  offsetY: 0,
  cellPadding: 1,
  game: null,

  init(game, snake){
    this.cells = [];
    this.countWidthCell = 20;
    this.countHeightCell = 15;
    this.cellV = 0;
    this.offsetX = 0;
    this.offsetY = 0;
    this.cellPadding = 0;
    this.game = game;
    this.snake = snake;
  },

  create(offsetX, offsetY, cellV) {
    this.createCells(offsetX, offsetY, cellV);
  },

  createCellObject(type){
    let cell = this.cells.find(cell => cell.type === type);
    if (cell) {
      cell.type = false;
    }

    cell = this.getRandomAvailableCell();
    cell.type = type;
  },

  createFood() {
    this.createCellObject('food');
  },

  createBomb(){
    this.createCellObject('bomb');
  },

  getRandomAvailableCell(){
    let poll = this.cells.filter(cell => !cell.type && !this.snake.hasCell(cell));

    let index = this.game.random(0, poll.length - 1);

    return poll[index];
  },

  createCells(offsetX, offsetY, cellV) {
    this.cellV = cellV + this.cellPadding;
    this.offsetX = offsetX;
    this.offsetY = offsetY;
    for (let i = 0; i < this.countWidthCell; i++) {
      for (let j = 0; j < this.countHeightCell; j++) {
        let cell = this.createCell(i, j);
        this.cells.push(cell);
      }
    }
  },

  isFoodCell(cell){
    return cell.type === 'food';
  },

  isBombCell(cell){
    return cell.type === 'bomb';
  },

  getCell(x, y){
    return this.cells.find(cell => {
      return cell.x === x && cell.y === y
    })
  },

  createCell(x, y) {
    return {x: x, y: y, type: false};
  },

  render() {
    this.cells.forEach(cell => {
      this.game.ctx.drawImage(this.game.sprites.cell, cell.x * this.cellV + this.offsetX, cell.y * this.cellV + this.offsetY);
      if (cell.type) {
        this.game.ctx.drawImage(this.game.sprites[cell.type], cell.x * this.cellV + this.offsetX, cell.y * this.cellV + this.offsetY);
      }
    });
  }
};

