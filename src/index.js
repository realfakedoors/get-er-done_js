import { newCategory, newList, newTask } from "./state";
import { newCategoryForm, newListForm, newTaskForm } from "./populate";
// import { validate, validate } from "./validations";

let myTasks = [];
// change to localstorage

function createCategory(name){
  // validate name uniqueness
}

function createList(category, name){
  // validate name length < 26 chars AND uniqueness
}

function createTask(list, description, datetime){
  // validate description length < 120 chars
  // validate datetime is in the future
}

function displayCategories(){
  
}

function displayTasks(list){
  
}

function displayAllTasks(){
  
}

function displayThisWeek(){
  
}

function displayAllTime(){
  
}

function updateColor(list){
  
}

function deleteTask(task){
  
}

function deleteList(list){
  
}

const newCategoryButton = document.getElementById('new-category');
newCategoryButton.addEventListener('click', function(){newCategoryForm();});

const newListButton = document.getElementById('new-list');
newListButton.addEventListener('click', function(){newListForm();});

const newTaskButton = document.getElementById('new-task');
newTaskButton.addEventListener('click', function(){newTaskForm();});