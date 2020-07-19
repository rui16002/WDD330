import SoundBoardModel from './SoundBoardModel.js';
import SoundBoardView from './SoundBoardView.js';

// Quake controller
export default class soundBoardController {
  constructor(container) {
    this.container = document.querySelector(container);
    // this is how our controller will know about the model and view...
    //we add them right into the class as members.
    this.soundBoard = new SoundBoardModel();
    this.soundList = this.soundBoard.getSoundList();
    this.soundBoardView = new SoundBoardView(this.soundList, this.container);
  }

  renderList(){
    // render the list to html
    this.soundBoardView.renderSoundBoardList();
  }
}
