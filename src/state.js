const newCategory = (name) => {
  return { name };
}

const newList = (category, name) => {
  let color = "#E03A53";
  let tasks = [];
  
  return { category, name, color, tasks };
};

const newTask = (list, description, datetime) => {  
  return { list, description, datetime };
};

export { newCategory, newTask, newList };