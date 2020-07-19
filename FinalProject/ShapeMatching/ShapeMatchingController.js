import ShapeMatchingModel from './ShapeMatchingModel.js';
import ShapeMatchingView from './ShapeMatchingView.js';

// Quake controller
export default class ShapeMatchingController {
  constructor(container) {
    this.container = document.querySelector(container);
    // this is how our controller will know about the model and view...
    //we add them right into the class as members.
    this.shapeMatchingModel = new ShapeMatchingModel();
    this.shapeMatchingView = new ShapeMatchingView(this.container);
  }

  renderMiniGame(){
  	this.shapeMatchingView.drawSVG();
  	this.shapeMatchingModel.controlDraggables();
  }
}