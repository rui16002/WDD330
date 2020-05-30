import {removeTodoById} from './ToDos.js';
import {completeTodoById} from './ToDos.js';

/**
 * do a querySelector lookup
 * @param  {string} selector The selector passed to querySelector
  * @return {element}     The matching element or null if not found
 */
export function qs(selector) {
  return document.querySelector(selector);
 }

/**
 * add a touchend event listener to an element for mobile with a click event fallback for desktops
 * @param  {string} elementSelector The selector for the element to attach the listener to
* @param {function} callback The callback function to run
  
 */
export function onTouch(elementSelector, callback) {
  qs(elementSelector).addEventListener("touchend", callback);
  qs(elementSelector).addEventListener("click", callback); 
}

/* Get the timestamp to use as part of the todo id*/
export function getTimestamp(){
var date = new Date();
return date.getTime();
}

function checkCallback(){
  //see if the item is checked or unchecked (the space before checked in the search is there on purpose)
  let checked = this.getAttribute("class").search(" checked");
  if (checked === -1) //if unchecked
  this.setAttribute("class","itemCkeckContainer check checked");
  else
  this.setAttribute("class","itemCkeckContainer check unchecked");
  //Extract the ID number from the elementID 
  let rawid = this.getAttribute("id");
  //the number is right after the ID word
  rawid = rawid.substring(rawid.lastIndexOf("D")+1);
  //toggle the item in the list.
  completeTodoById(rawid);
}

function deleteCallback(){
  //Extract the ID number from the elementID 
  let rawid = this.getAttribute("id");  
  //the number is right after the ID word
  rawid = rawid.substring(rawid.lastIndexOf("D")+1);
  //remove the item from the list.
  removeTodoById(rawid);
}

export function createRow(id, content, completed){
  //create the row for the new todo
  const todo = document.createElement("tr");
  todo.setAttribute("id", "todoListItemID"+id);
  todo.setAttribute("class", "todoListItem");
  
  //create the check button column
  const todoCheck = document.createElement("td");
  todoCheck.setAttribute("id", "itemCheckContainerID"+id);
  todoCheck.innerHTML = "X";

  if(completed === true){
    todoCheck.setAttribute("class", "itemCkeckContainer check checked");
  }
  else
  todoCheck.setAttribute("class", "itemCkeckContainer check unchecked");
  
  //create the content column
  const todoContent = document.createElement("td");
  todoContent.setAttribute("id", "itemNameContainerID"+id);
  todoContent.setAttribute("class", "itemNameContainer");
  todoContent.innerHTML = content;

  //create the delete button column
  const todoDelete = document.createElement("td");
  todoDelete.setAttribute("id", "itemDeleteContainerID"+id);
  todoDelete.setAttribute("class", "itemDeleteContainer button");
  todoDelete.innerHTML = "Delete"

  //put everything together before appending to container
  todo.appendChild(todoCheck);
  todo.appendChild(todoContent);
  todo.appendChild(todoDelete);

  //Add the listeners
  todoCheck.addEventListener("touchend", checkCallback);
  todoCheck.addEventListener("click", checkCallback);

  todoDelete.addEventListener("touchend", deleteCallback);
  todoDelete.addEventListener("click", deleteCallback);

  return todo; 
}

/*This here clicks the add button on Enter while editing*/
document.getElementById("inputToDo").addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("addButtonID").click();
  }
});