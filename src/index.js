// eslint-disable-next-line import/no-unresolved
import './styles/styles.css';

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners

// Functions

function addTodo(e) {
  // Prevent natural behaviour
  e.preventDefault();
  // Create todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // Create list
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  todoInput.value = '';
  // Create Completed Button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('complete-btn');
  todoDiv.appendChild(completedButton);
  // Create trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  // attach final Todo
  todoList.appendChild(todoDiv);
}

todoButton.addEventListener('click', addTodo);
