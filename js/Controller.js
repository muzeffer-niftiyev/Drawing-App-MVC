export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  init() {
    this.changeBoldness();

    this.view.listenMouseDown((e) => {
      this.model.startDrawing(e, this.view.boardEl);
    });

    this.view.listenMouseUp(() => {
      this.model.finishDrawing();
    });

    this.view.listenMouseMove((e) => {
      this.model.drawing(e, this.view.boardEl);
    });
  }

  changeBoldness() {
    this.view.listenBoldnessInputChange(() => {
      const boldnessInputValue = this.view.boldnessInputValue;

      this.model.changeLineBoldness(boldnessInputValue);
      this.view.setBoldnessInputNum(boldnessInputValue);
    });
  }
}
