import { todoLists, displayTodoList } from './todos.js';
// eslint-disable-next-line no-use-before-define
const updateLocalStorage = () => {
  localStorage.setItem('todoLists', JSON.stringify(todoLists));
};

// Function to clear all completed tasks
const clearCompletedTasks = () => {
  const incompleteTasks = todoLists.filter((todo) => !todo.completed);
  todoLists.length = 0;
  Array.prototype.push.apply(todoLists, incompleteTasks);
  updateLocalStorage();
  displayTodoList();
};

// Add event listener for Clear All Completed button
const clearCompletedBtn = document.getElementById('clear-all');
clearCompletedBtn.addEventListener('click', clearCompletedTasks);
