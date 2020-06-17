import { newCategory, newList, newTask } from "./state";
import { newCategoryForm, newListForm, newTaskForm, allCategories } from "./populate";

function grabCategory(categoryName) {
  return allCategories.find(category => category.category === categoryName);
}

function grabLists(categoryName, listName) {
  return grabCategory(categoryName).lists.find(list => list.list === listName);
}

function grabTasks(categoryName, listName) {
  return Object.values(grabLists(categoryName, listName).tasks);
}

function displayTasks(categoryName, listName) {
  let contentArea = document.getElementById('content');
  let tasks = grabTasks(categoryName, listName);

  tasks.forEach((task) => {
    const showTaskDescription = document.createElement('h4');
    showTaskDescription.innerHTML = task.description;

    const showTaskDate = document.createElement('p');
    showTaskDate.innerHTML = task.datetime;

    contentArea.appendChild(showTaskDescription);
    contentArea.appendChild(showTaskDate);
  });
}

function storeLocally(categoryName, category){
  localStorage.setItem(categoryName, JSON.stringify(category));
}

function addCategory(categoryName) {
  storeLocally(categoryName, newCategory());
}

function addList(categoryName, listName){
  let category = grabCategory(categoryName);
  category.lists.push(newList(listName));
  
  storeLocally(categoryName, category);
}

function addTask(categoryName, listName, task) {
  // validate datetime is in the future
  let newDescription = task[0];
  let newDatetime = task[1];
  let newTask = newTask(newDescription, newDatetime);
  
  if (!grabCategory(categoryName)){ addCategory(categoryName); } 
  if (!grabLists(categoryName, listName)){ addList(categoryName, listName); }
  
  let category = grabCategory(categoryName);
  category.lists.tasks.push(newTask);
  
  storeLocally(categoryName, category);
}

function deleteCategory(categoryName){
  localStorage.removeItem(categoryName);
}

function deleteList(categoryName, listName){
  let category = grabCategory(categoryName);
  let listIndex = category.lists.findIndex(list => list.name === listName);
  if (listIndex >= 0) { category.lists.splice(listIndex, 1); }
  
  storeLocally(categoryName, category);
}

function deleteTask(categoryName, listName, task) {
  let list = grabLists(categoryName, listName);
  let taskIndex = list.tasks.findIndex(x => x.description === task[0] && x.datetime === task[1]);
  if (taskIndex >= 0) { list.tasks.splice(taskIndex, 1); }
  
  storeLocally(categoryName, grabCategory(categoryName));
}

// Generate forms when 'New' buttons are clicked.

const newCategoryButton = document.getElementById('new-category');
newCategoryButton.addEventListener('click', function(){newCategoryForm();});

const newListButton = document.getElementById('new-list');
newListButton.addEventListener('click', function(){newListForm();});

const newTaskButton = document.getElementById('new-task');
newTaskButton.addEventListener('click', function(){newTaskForm();});