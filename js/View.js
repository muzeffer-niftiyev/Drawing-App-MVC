export default class View {
  constructor() {
    this.canvas = document.querySelector(".canvas");
    this.colorsContainer = document.querySelector(".colors");
    this.colorPicker = document.querySelector(".color_picker");
    this.clearPageBtn = document.querySelector(".delete");
    this.eraserBtn = document.querySelector(".erase");
    this.boldnessInput = document.querySelector(".boldness input");
    this.boldnessNumber = document.querySelector(".boldness p");
    this.cursor = document.querySelector(".cursor");

    this.canvas.addEventListener("mousemove", (e) => {
        console.log(e);
      const cordinates = {
        x: e.offsetX,
        y: e.offsetY,
      };

      this.setCursorLocation(cordinates.x, cordinates.y);
    });
  }

  setCursorLocation(x, y) {
    this.cursor.style.left = `${x}px`;
    this.cursor.style.top = `${y}px`;
  }
}
