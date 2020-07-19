import BubblesModel from './BubblesModel.js';
import BubblesView from './BubblesView.js';

// Quake controller
export default class BubblesController {
  constructor(container) {
    this.container = document.querySelector(container);
    // this is how our controller will know about the model and view...
    //we add them right into the class as members.
    this.bubblesModel = new BubblesModel(10);
    this.bubbleList = this.bubblesModel.getBubbleList();
    this.bubbleView = new BubblesView(this.bubbleList, this.container);
  }

  renderList(){
    // render the list to html
    this.bubbleView.renderBubbleList();
  }

  play(){
   this.bubbleView.animate();
  }
}