function populateForm(fields, submit){
  const form = document.getElementById('creation-form');
  
  while (form.firstChild) {
    form.removeChild(form.lastChild);
  };
  
  fields.forEach(item => {
    let field = document.createElement('span');
    field.setAttribute('class', 'field');
    field.appendChild(item);
    
    form.appendChild(field);
  });
  
  const submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'button');
  submitButton.setAttribute('id', 'submit-button');
  submitButton.setAttribute('value', submit);
  form.appendChild(submitButton);
}

function newCategoryForm(){
  const categoryName = document.createElement('input');
  categoryName.setAttribute('type', 'text');
  categoryName.setAttribute('id', 'category-name-field');
  categoryName.setAttribute('placeholder', 'Category Name');
  
  populateForm([categoryName], "Create Category");
}

const categories = ['Urgent', 'Work', 'Fun', 'Travel', 'Social'];

function showCategories(){
  const listCategoryLabel = document.createElement('label');
  listCategoryLabel.setAttribute('for', 'category');
  listCategoryLabel.innerHTML = 'Category:';
  
  const listCategory = document.createElement('select');
  listCategory.setAttribute('name', 'category');
  
  categories.forEach( (category) => {
    let categoryName = document.createElement('option');
    categoryName.setAttribute('value', category);
    categoryName.innerHTML = category;
    listCategory.appendChild(categoryName);
  });
  
  return [listCategoryLabel, listCategory];
}

function newListForm(){
  const listName = document.createElement('input');
  listName.setAttribute('type', 'text');
  listName.setAttribute('id', 'list-name-field');
  listName.setAttribute('placeholder', 'List Name');
  
  populateForm([showCategories()[0], showCategories()[1], listName], "Create List");
}

const lists = ['Safety Classes', 'Horse Riding Practice', 'Drone Photography'];

function showLists(){
  const taskListLabel = document.createElement('label');
  taskListLabel.setAttribute('for', 'list');
  taskListLabel.innerHTML = 'List:';
  
  const taskList = document.createElement('select');
  taskList.setAttribute('name', 'list');
  
  lists.forEach( (list) => {
    let listName = document.createElement('option');
    listName.setAttribute('value', list);
    listName.innerHTML = list;
    taskList.appendChild(listName);
  });
  
  return [taskListLabel, taskList];
}

function newTaskForm(){
  const taskName = document.createElement('input');
  taskName.setAttribute('type', 'text');
  taskName.setAttribute('id', 'task-name-field');
  taskName.setAttribute('placeholder', 'Task Name');
  
  populateForm([showCategories()[0], showCategories()[1], showLists()[0], showLists()[1], taskName], "Create Task")
}

export { newCategoryForm, newListForm, newTaskForm };