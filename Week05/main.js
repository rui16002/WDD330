import {ToDos} from './ToDos.js';
import {onTouch} from './utilities.js';

/* Todo list in the proper container*/
let newTodo = new ToDos("#todoListContainerID");

/* When I click or tap on the + button a new task will be added*/
onTouch("#addButtonID", newTodo.addTodo);

/* When I click on the filters I will see the proper tasks associated to the filter */
onTouch("#seeCompletedID", newTodo.filterCompleted);
onTouch("#seeActiveID", newTodo.filterActive);
onTouch("#seeAllID", newTodo.filterAll);

