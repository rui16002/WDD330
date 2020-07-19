import SoundBoardController from './AnimalSoundBoard/SoundBoardController.js';
import BubblesController from './BubblePopping/BubblesController.js';
import ShapeMatchingController from './ShapeMatching/ShapeMatchingController.js';

//Minigame buttons
const soundBoardButton = document.querySelector('#animalSoundBoardButton');
const bubblePoppingButton = document.querySelector('#bubblePoppingButton');
const shapeMatchingButton = document.querySelector('#shapeMatchingButton');

//Minigame containers
const soundBoardContainer = document.querySelector('#soundBoardContainer');
const bubblePoppingContainer = document.querySelector('#bubblePoppingContainer');
const shapeMatchingContainer = document.querySelector('#shapeMatchingContainer');

//Bubble popping minigame
const bubblesCtrl = new BubblesController('#bubblePoppingContainer');

bubblePoppingButton.addEventListener('click',function(){
soundBoardContainer.classList.add("hidden");
bubblePoppingContainer.classList.remove("hidden");
shapeMatchingContainer.classList.add("hidden");

bubblesCtrl.renderList();
bubblesCtrl.play();
});

const soundBoardCtrl = new SoundBoardController('#soundBoardContainer');

soundBoardButton.addEventListener('click',function(){
soundBoardContainer.classList.remove("hidden");
bubblePoppingContainer.classList.add("hidden");
shapeMatchingContainer.classList.add("hidden");
soundBoardCtrl.renderList();
});

//Bubble popping minigame
const shapeMatchingCtrl = new ShapeMatchingController('#shapeMatchingContainer');

shapeMatchingButton.addEventListener('click',function(){
soundBoardContainer.classList.add("hidden");
bubblePoppingContainer.classList.add("hidden");
shapeMatchingContainer.classList.remove("hidden");

shapeMatchingCtrl.renderMiniGame();
});