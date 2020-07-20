import { generateRandom } from "./../utilities.js";
// BubbleModel Model
export default class BubbleModel {
  constructor(container, size = 10) {
    this.bubbles = new Array();
    this.container = container;
    this.size = size;
    for (var i = 0; i < this.size; i++) {
    	this.blow(i);
    }
  }

  getBubbleList() {
    return this.bubbles;
  }
  blow(bubbleId){
    const windowWidth = window.innerWidth * 0.8;
    const bubbleSize = windowWidth * 0.1;
  	const marginLeft = (windowWidth - this.container.clientWidth) + (windowWidth*0.1);
  	const marginRight = (windowWidth - bubbleSize) + (windowWidth*0.1);
  	const left = generateRandom(marginLeft, marginRight);
  	const blowSpeed = generateRandom(1,4);
	this.bubbles.push({pos:{x:left, y:generateRandom(0,10)}, interval:null, speed: blowSpeed});
  }
}