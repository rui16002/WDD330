export default // Bubble View handler

class BubblesView {
  constructor (bubbles, container)
  {
    this.container = container;
    this.bubbles = bubbles;
    this.poppedBubbles = [];
  }

  renderBubbleList() {
    //clean first
    const container = this.container;
    container.innerHTML = "";
    //Create the sound that represents the image
    const sound = document.createElement('audio');
    sound.setAttribute('id', 'bubblePopAudio');
    sound.setAttribute('src', baseURL+"bubblePop.mp3")
    sound.setAttribute('type', 'audio/mp3');
    sound.innerHTML = 'Audio element not supported';
    container.appendChild(sound);
    for (var i = 0; i < this.bubbles.length; i++) {
      const item = newBubble(i, this.bubbles[i]);
      container.appendChild(item);
}
}

animate(){
    this.bubbles.forEach((currBubble, index) => {
      const bubble = document.querySelector("#bubble"+index);
      //If the buble has not been popped
      if (bubble.style.display != "none"){
      currBubble.interval = setInterval(frame, 25);
   
      function frame(){
        const bubble = document.querySelector("#bubble"+ index);
        const posy = parseFloat(bubble.style.bottom);
        if (posy < 700)
          bubble.style.bottom = Math.floor(posy + currBubble.speed) + "px";
        else
          bubble.style.bottom = "-100px";//Move them back to the bottom
    }
  }
  else if(bubble.style.display == "none")
    clearInterval(currBubble.interval);
});
}


} //Close class

const baseURL = "./BubblePopping/Assets/";

function newBubble(id, bubble){
//Create a container for a single sound
const item = document.createElement('div');
item.setAttribute('id', 'bubble'+id);
item.classList.add('bubble');
item.style.left = bubble.pos.x+"px";
item.style.bottom = bubble.pos.y+"px";

//add the event listener, change click for touchend
item.addEventListener('click',function(bubble){
  const audio = document.querySelector("#bubblePopAudio");
  audio.currentTime = 0;  
  audio.play();
  item.style.display = "none";
});
return item;
}
