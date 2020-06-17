function validateList(){
  let list = document.getElementById('list-name-field').value;
  if (list.length > 26){
    alert("List name must be under 26 characters!");
    return false;
  }
}

function validateTask(){
  let task = document.getElementById('task-name-field').value;
  if (task.length > 120){
    alert("Description must be under 120 characters!");
    return false;
  }
}