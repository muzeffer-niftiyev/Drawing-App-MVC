export default class Model {
  constructor() {
    this.color = "#111";
    this.boldness = 1;
    this.isDrawing = false;
    this.prevX = 0;
    this.prevY = 0;
  }

  changeLineBoldness(data) {
    this.boldness = data;
    return this.boldness;
  }

  setColor(color) {
    this.color = color;
  }

  startDrawing(e) {
    this.isDrawing = true;
    this.prevX = e.offsetX;
    this.prevY = e.offsetY;
  }

  finishDrawing() {
    this.isDrawing = false;
  }

  drawing(e, board) {
    if (!this.isDrawing) return;

    let curX = e.offsetX;
    let curY = e.offsetY;

    board.beginPath();
    board.moveTo(this.prevX, this.prevY);
    board.lineTo(curX, curY);
    board.strokeStyle = this.color;
    board.lineWidth = this.boldness;
    board.lineCap = "round";
    board.stroke();
    board.closePath();

    this.prevX = curX;
    this.prevY = curY;
  }

  clearPage(board, canvas) {
    board.clearRect(0, 0, canvas.width, canvas.height);
  }
}