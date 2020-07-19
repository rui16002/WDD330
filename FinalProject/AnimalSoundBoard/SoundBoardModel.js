import { getJSON } from "./../utilities.js";
// SoundBoard Model
export default class SoundBoard {
  constructor() {
    this._soundList = [];
  }
  getSoundList() {
    const query = "./AnimalSoundBoard/Assets/soundList.json";
    this._soundList = getJSON(query);
    return this._soundList;
  }
}
