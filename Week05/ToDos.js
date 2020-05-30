import {qs} from './utilities.js';
import {getTimestamp} from './utilities.js';
import {createRow} from './utilities.js';
import {readFromLS} from './ls.js';
import {writeToLS} from './ls.js';

//Contants defined for filterin type.
const C_COMPLETED = 0;
const C_ACTIVE = 1;
const C_ALL = 1;

//Our todo list
export let todoList = [];

/*I had to use this variable to store the context of the class, since I have been seen an undefined in several places
I couldn't find a more elegant solution to this issue.*/
let $this = null;

class ToDos {
  /*In the constructor you should set a variable with the element our todo list will be built in,
  and the key we will use to read/write from localStorage 
  */
 constructor(elementId) {
   this.listContainer = elementId;
   this.key = "todoList";
   this.listTodos();
   /*I am saving the Class context to be used in other places, 
   since I cannot reference it with "this" reserved word*/
   $this = this;
  }

  /*Add a method to the Todos class called listTodos(). It should use the renderTodoList function to output our todo list when called. 
  It should get called when a todo is added, or removed, and when the Todos class is instantiated.*/
  listTodos(){
    //this context works fine here.
    renderTodoList(getTodos(this.key), this.listContainer);
  }

  /*Add a method to the Todos class called addTodo. It should grab the input in the html where users enter the text of the task, then send that along with the key to a SaveTodo() function.  Then update the display with the current list of tasks*/
  addTodo(){
    //get input content
    let task = qs("#inputToDo");
    //save todo
    saveTodo(task.value, $this.key);
    //render the new list with a saved context variable.
    $this.listTodos();
    //Clear the input for a new task to be added
    task.value = "";
    }

  filterCompleted(){
    //Render the list after the filter, otherwise I will not see the changes.
    renderTodoList((getTodos($this.key).filter(todo => todo.completed === true)), $this.listContainer);
  }

  filterActive(){
    //Render the list after the filter, otherwise I will not see the changes.
    renderTodoList((getTodos($this.key).filter(todo => todo.completed === false)), $this.listContainer);
  }

  filterAll(){
    //Just list the original list.
    $this.listTodos();
  }

}

//Expor the class to be used by main.js
export {ToDos}

/**
 * build a todo object, add it to the todoList, and save the new list to local storage.
 * @param  {string} key The key under which the value is stored under in LS
* @param {string} task The text of the task to be saved. 

A todo should look like this: { id : timestamp, content: string, completed: bool

 */

export function saveTodo(task, key) {
    //Build a new todo object
    let newTask = [];
    //Add ID
    newTask.id = getTimestamp();
    //Add content
    newTask.content = task;
    //Add completed boolean value
    newTask.completed = false;
    //push the new todo to the list
    todoList.push(newTask);
    //Save the list to local storage.
    writeToLS(key, todoList); 
 }

/**
 * check the contents of todoList, a local variable containing a list of ToDos. If it is null then pull the list of todos from localstorage, update the local variable, and return it
 * @param  {string} key The key under which the value is stored under in LS
  * @return {array}     The value as an array of objects
 */

export function getTodos(key) {
  if (todoList === null){
    todoList = readFromLS(key);
  }
  return todoList;
 }

//Removes an existing Todo
export function removeTodoById(id){
  /* overwrite the existing list, filter out the value that matches the id
     in other words, save in the new list everything but the value that matches*/
  todoList = todoList.filter(todo => todo.id != id);
  //Update the UI to reflect the change.
  renderTodoList(todoList, $this.listContainer);
}

export function completeTodoById(id){
  //toogle the complete flag
  todoList.forEach(todo => {
    if(todo.id == id) todo.completed = !todo.completed;
  })
  //update the UI
  renderTodoList(todoList, $this.listContainer);
}

/**
foreach todo in list, build a li element for the todo, and append it to element
@param  {array} list The list of tasks to render to HTML
@param {element} element The DOM element to insert our list elements into. 
 */

export function renderTodoList(list, element) { 
  //get the container
  let container = qs(element);
  //Clear the container
  container.innerHTML = "";
  //draw the items from scratch
  list.forEach(todo => {
    container.appendChild(createRow(todo.id, todo.content, todo.completed));
  }) 
  //update the task counter
  qs("#itemsLeftID").innerHTML = list.length + " tasks left";
}


