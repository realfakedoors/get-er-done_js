const newCategory = () => {
  let lists = [];
  
  return { lists };
};

const newList = (name) => {
  let color = "#E03A53";
  let tasks = [];
  
  return { name, color, tasks };
};

const newTask = (description, datetime) => {  
  return { description, datetime };
};

export { newCategory, newTask, newList };