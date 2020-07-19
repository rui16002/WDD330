export default // soundBoard View handler

class SoundBoardView {
  constructor (soundList, container)
  {
    this.soundList = soundList;
    this.container = container;
  }

  renderSoundBoardList() {
    //clean first
    const container = this.container;
    container.innerHTML = "";
    this.soundList.then(function(list){
      Object.entries(list).forEach(obj => {        
      //key is 0, 1 is the json object that contains the values
      const item = newSoundBoardItem(obj[1])
      container.appendChild(item);
    });
});
}
} //Close class

function newSoundBoardItem(element){
//Create a container for a single sound
const item = document.createElement('div');
//I don't think it is a good idea to have this constant here
const baseURL = "./AnimalSoundBoard/Assets/";
item.setAttribute('id', 'img'+ element.id);
item.classList.add('soundBoardItem');
item.classList.add('gridItem');

//Create the image that represents the sound
const image = document.createElement('img');
image.setAttribute('src', baseURL+element.imgSource);
image.setAttribute('alt', element.description);

//Create the sound that represents the image
const sound = document.createElement('audio');
sound.setAttribute('id', 'audio' + element.id);
sound.setAttribute('src', baseURL+element.audioSource)
sound.setAttribute('type', 'audio/mp3');
sound.innerHTML = 'Audio element not supported';

//Put it all together
item.appendChild(image);
item.appendChild(sound);

//add the event listener, change click for touchend
item.addEventListener('click',function(audioItem){
  const audio = this.querySelector("audio");
  audio.currentTime = 0;  
  audio.play();
});

return item;
}
