const taskInput = document.getElementById('task');
const form = document.getElementById('task-form');
const filter = document.getElementById('filter');
const clear = document.getElementById('clear');
const list = document.querySelector('.collection');

loadEventListeners();

function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', addTasksFromLS);
  form.addEventListener('submit', addTask);
  clear.addEventListener('click', clearList);
  list.addEventListener('click', removeItem);
  filter.addEventListener('keyup', filterTask);
}

function addTasksFromLS() {
let tasks; 
if(localStorage.getItem('tasks')=== null) {
  tasks = []
}
else {
  tasks = JSON.parse(localStorage.getItem('tasks'))
}
  tasks.forEach(function(item){
   
    const li = document.createElement('li');
    li.className = 'collection-item';
    const task = document.createTextNode(item);
    li.appendChild(task);
    const deleteLink = document.createElement('a');
    deleteLink.className = 'delete-item secondary-content';
    deleteLink.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(deleteLink);
    list.appendChild(li);

  })

}

function filterTask(e) {
  const task = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(item) {
    if (item.firstChild.textContent.toLowerCase().indexOf(task) != -1) {
      item.style.display = 'block';
    }                          else {
      item.style.display = 'none';
    }
  });
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      removeItemFromLS(e.target.parentElement.parentElement)
    }
  }
}


function removeItemFromLS(element) {
   
  let tasks;
  if (localStorage.getItem('tasks')===null) {
    tasks = []
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
      }
    tasks.forEach(function(task, index){
      if(element.textContent === task) {
        tasks.splice(index, 1)
      }
  })
  localStorage.setItem('tasks', JSON.stringify(tasks));
   
}

function addTask(e) {
  if (taskInput.value === '') {
    alert('Please add a task!');
  } else {
    const li = document.createElement('li');
    li.className = 'collection-item';
    const task = document.createTextNode(taskInput.value);
    li.appendChild(task);
    const deleteLink = document.createElement('a');
    deleteLink.className = 'delete-item secondary-content';
    deleteLink.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(deleteLink);
    list.appendChild(li);
    saveTaskToLS(taskInput.value);
    taskInput.value = '';
  }

  e.preventDefault();
}

function saveTaskToLS(task) {
  let tasks;
  if(localStorage.getItem('tasks') === null) {
    tasks = [];
  }
  else {
    tasks = JSON.parse(localStorage.getItem('tasks'))
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearList() {
  list.innerHTML = '';
  localStorage.clear();
}
