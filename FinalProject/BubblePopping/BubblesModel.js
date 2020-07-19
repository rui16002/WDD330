// BubbleModel Model
export default class BubbleModel {
  constructor(size = 10) {
    this.bubbles = new Array();
    this.size = size;
    this.bubblesLeft = size;
    for (var i = 0; i < this.size; i++) {
    	this.blow(i);
    }
  }

  getBubbleList() {
    return this.bubbles;
  }

  pop(bubbleId){
  	this.bubbles[bubbleId].popped = true;
  	this.bubblesLeft--;
  }

  blow(bubbleId){
  	const marginLeft = Math.floor(window.innerWidth * 0.2);
  	const marginRight = window.innerWidth - 150;
  	const left = generateRandom(marginLeft, marginRight);
  	const blowSpeed = generateRandom(1,5);
	this.bubbles.push({pos:{x:left, y:generateRandom(-50,-300)}, popped:false, interval:null, speed: blowSpeed});
  }
}

function generateRandom(min, max){
  return (Math.floor(Math.random() * (max - min)) + min);
}