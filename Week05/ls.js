/**
 * read a value from local storage and parse it as JSON
 * @param  {string} key The key under which the value is stored under in LS
 * @return {array}     The value as an array of objects
 */
export function readFromLS(key) {
  // Check browser support
if (typeof(Storage) !== "undefined") {
  // Retrieve
  return JSON.parse(localStorage.getItem(key));
 }
}
/**
 * write an array of objects to local storage under the provided key
 * @param  {string} key The key under which the value is stored under in LS
 * @param {array} data The information to be stored as an array of objects Must be serialized.
 */
export function writeToLS(key, data) {
  // Check browser support
  if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem(key, Array.from(data)); 
  }
 }
