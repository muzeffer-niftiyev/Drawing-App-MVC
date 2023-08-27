export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.changeBoldness();
    this.viewEventListeners();
  }

  changeBoldness() {
    this.view.listenBoldnessInputChange(() => {
      const boldnessInputValue = this.view.boldnessInputValue;

      this.model.changeLineBoldness(boldnessInputValue);
      this.view.setBoldnessInputNum(boldnessInputValue);
    });
  }

  viewEventListeners() {
    this.view.listenMouseDown((e) => {
      this.model.startDrawing(e);
    });

    this.view.listenMouseUp(() => {
      this.model.finishDrawing();
    });

    this.view.listenMouseMove((e) => {
      this.model.drawing(e, this.view.boardEl);
    });

    this.view.listenForColorClicks((color) => {
      this.model.setColor(color);
    });

    this.view.listenColorPickerSelection((color) => {
      this.model.setColor(color);
    });

    this.view.listenClearPageClick(() => {
      this.model.clearPage(this.view.boardEl, this.view.canvasEl);
    });

    this.view.listenEraserClick(() => {
      this.model.setColor("#fff");
      this.view.removeColorActiveClass();
    });
  }
}
