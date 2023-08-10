export default class View {
  constructor() {
    this.canvas = document.querySelector(".canvas");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight - 144;
    this.board = this.canvas.getContext("2d");
    this.eachColor = document.querySelectorAll('.color');
    this.colorsContainer = document.querySelector(".colors");
    this.colorPicker = document.querySelector(".color_picker");
    this.clearPageBtn = document.querySelector(".delete");
    this.eraserBtn = document.querySelector(".erase");
    this.boldnessInput = document.querySelector(".boldness input");
    this.boldnessNumber = document.querySelector(".boldness p");
  }

  removeColorActiveClass() {
    this.eachColor.forEach(color => {
      color.classList.remove('active');
    }) 
  }

  listenForColorClicks(callback) {
    this.colorsContainer.addEventListener("click", function (e) {
      if (!e.target.classList.contains("color")) return;

      e.target
        .closest(".colors")
        .querySelectorAll(".color")
        .forEach((color) => {
          color.classList.remove("active");
        });
      e.target.classList.add("active");

      const colorValue = e.target.dataset.color;
      callback(colorValue);
    });
  }

  listenClearPageClick(callback) {
    this.clearPageBtn.addEventListener('click', callback);
  }

  listenEraserClick(callback) {
    this.eraserBtn.addEventListener('click', callback);
  }

  listenColorPickerSelection(callback) {
    this.colorPicker.addEventListener('change', () => {
      callback(this.colorPicker.value);
    })
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
