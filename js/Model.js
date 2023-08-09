export default class Model {
  constructor() {
    this.color = "black";
    this.boldness = 1;
    this.isDrawing = false;
    this.prevX = 0;
    this.prevY = 0;
  }

  changeLineBoldness(data) {
    this.boldness = data;
    return this.boldness;
  }

  startDrawing(e, board) {
    this.isDrawing = true;
    this.prevX = e.offsetX - board.getBoundingClientRect().left;
    this.prevY = e.offsetY - board.getBoundingClientRect().top;

    board.beginPath();
    board.strokeStyle = this.color;
    board.fillStyle = this.color;
    board.lineWidth = this.boldness;
    board.moveTo(this.prevX, this.prevY);
  }

  finishDrawing() {
    this.isDrawing = false;
  }

  drawing(e, board) {
    if (!this.isDrawing) return;

    const currentX = e.offsetX;
    const currentY = e.offsetY;
    console.log(board);

    board.lineTo(currentX, currentY);
    board.stroke();

    this.prevX = e.offsetX;
    this.prevY = e.offsetY;
  }
}
