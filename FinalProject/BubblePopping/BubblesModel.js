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
    const bubbleSize = window.innerWidth * 0.1;
  	const marginLeft = window.innerWidth - this.container.clientWidth;
  	const marginRight = window.innerWidth - bubbleSize;
  	const left = generateRandom(marginLeft, marginRight);
  	const blowSpeed = generateRandom(1,5);
	this.bubbles.push({pos:{x:left, y:generateRandom(0,10)}, interval:null, speed: blowSpeed});
  }
}