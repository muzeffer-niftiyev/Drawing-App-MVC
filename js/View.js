export default class View {
  constructor() {
    this.canvas = document.querySelector(".canvas");
    this.board = this.canvas.getContext("2d");
    this.colorsContainer = document.querySelector(".colors");
    this.colorPicker = document.querySelector(".color_picker");
    this.clearPageBtn = document.querySelector(".delete");
    this.eraserBtn = document.querySelector(".erase");
    this.boldnessInput = document.querySelector(".boldness input");
    this.boldnessNumber = document.querySelector(".boldness p");

    this.colorsContainer.addEventListener("click", function (e) {
      if (!e.target.classList.contains("color")) return;

      e.target
        .closest(".colors")
        .querySelectorAll(".color")
        .forEach((color) => {
          color.classList.remove("active");
        });

      e.target.classList.add("active");
    });
  }

  get boldnessInputData() {
    return this.boldnessInput;
  }

  get canvasEl() {
    return this.canvas;
  }

  get boardEl() {
    return this.board;
  }

  get boldnessInputValue() {
    return this.boldnessInput.value;
  }

  setBoldnessInputNum(val) {
    this.boldnessNumber.textContent = val;
  }

  listenBoldnessInputChange(callback) {
    this.boldnessInput.addEventListener("input", callback);
  }

  listenMouseDown(callback) {
    this.canvas.addEventListener("mousedown", (e) => {
      callback(e)
    });
  }

  listenMouseUp(callback) {
    this.canvas.addEventListener("mouseup", callback);
  }

  listenMouseMove(callback) {
    this.canvas.addEventListener("mousemove", (e) => {
      callback(e);
    });
  }
}
