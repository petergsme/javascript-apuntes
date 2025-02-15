// LA FUNCIÓN QUE RECUPERA LAS TAREAS DE MEMORIA SI LAS HUBIERA.

function getTasks() {
  const tasksAsString = localStorage.getItem('tasks');

  if (!tasksAsString) {
    return [];
  }

  return JSON.parse(tasksAsString);
}

const tasks = getTasks();
let isCompletedFilterSelected = localStorage.getItem('isCompletedFilter') === 'true';

// LA FUNCIÓN QUE SE ENCARGA DE QUE LA PÁGINA CARGUE CON LOS DATOS DEL LOCALSTORAGE.

function renderTasksArray() {
  const completedFilterButtonNode = document.querySelector('#completed-filter');

  if (isCompletedFilterSelected) {
    completedFilterButtonNode.classList.add('button-selected');
  } else {
    completedFilterButtonNode.classList.remove('button-selected');
  }

  const filteredTasks = isCompletedFilterSelected
    ? tasks.filter((task) => {
        return task.isCompleted;
      })
    : tasks;

  document.querySelector('#tasks').innerHTML = '';

  filteredTasks.forEach((task) => {
    createTaskNode(task, true);
  });
}

// LA FUNCIÓN QUE USAREMOS PARA ACTUALIZAR LOS DATOS DE UNA TAREA EN LOCAL TRAS MODIFICARLA.

function saveTasks() {
  const tasksAsString = JSON.stringify(tasks);
  localStorage.setItem('tasks', tasksAsString);
}

renderTasksArray();

function editTask(taskId, propsToChange) {
  // coger el nuevo objeto tarea
  // buscar la posición que ocupa en el array
  // modificar la tarea en el array
  // meter el array en el local Storage
  const taskIndex = tasks.findIndex((task) => {
    return taskId === task.id;
  });
  tasks[taskIndex] = {
    ...tasks[taskIndex],
    ...propsToChange,
  };
  console.log(tasks);
  saveTasks();
}

// LA FUNCIÓN PRINCIPAL.

function createTaskNode(task, addToEnd) {
  const taskNode = document.createElement('div');
  //.createElement() sirve para crear elementos dinámicamente antes de agregarlos al DOM con algún append.
  taskNode.className = 'task';

  taskNode.innerHTML = `
    <span class="${task.isCompleted ? 'completed' : ''}">${task.text}</span> -
    <span class="status">${task.isCompleted ? 'completed' : 'pending'}</span>
    <button class="fav-button ${task.isFav ? 'fav' : ''}">${task.isFav ? '💝' : '💔'}</button>
    `;

  const tasksNode = document.querySelector('#tasks');

  if (addToEnd) {
    tasksNode.appendChild(taskNode);
  } else {
    tasksNode.prepend(taskNode);
  }

  taskNode.addEventListener('click', function () {
    const taskTextNode = taskNode.querySelector('span');
    const isCurrentlyCompleted = taskTextNode.classList.contains('completed');
    taskTextNode.classList.toggle('completed');
    taskNode.querySelector('.status').innerText = isCurrentlyCompleted ? 'pending' : 'completed';

    editTask(task.id, { isCompleted: !isCurrentlyCompleted });
  });

  const favButtonNode = taskNode.querySelector('button');
  favButtonNode.addEventListener('click', function (event) {
    event.stopPropagation();
    const isCurrentlyFav = favButtonNode.classList.contains('fav');
    favButtonNode.classList.toggle('fav');
    favButtonNode.innerText = isCurrentlyFav ? '💔' : '💝';

    editTask(task.id, { isFav: !isCurrentlyFav });
  });
}

// EL LISTENER DEL SUBMIT PARA CREAR TAREAS.

const formButton = document.querySelector('#create-task button');
document.querySelector('#create-task').addEventListener('submit', function (event) {
  event.preventDefault(); // Enviar un formulario recarga la página, esto lo evita.

  const formData = new FormData(event.target);
  // FormData es un objeto de JavaScript que permite recolectar los valores de un formulario de forma sencilla sin acceder a cada input individualmente.
  const taskText = formData.get('taskText');
  // .get("nombreDelCampo") obtiene el valor de un campo del formulario.

  const task = {
    text: taskText,
    isFav: false,
    isCompleted: false,
    id: Date.now(),
  };

  if (!isCompletedFilterSelected) {
    createTaskNode(task, false);
  }

  tasks.unshift(task);
  saveTasks();

  event.target.reset();
  formButton.disabled = true;
});

// EL LISTENER DEL CAMPO DE TEXTO DEL FORMULARIO.

const taskTextNode = document.querySelector('[name=taskText]');
taskTextNode.addEventListener('input', function (event) {
  formButton.disabled = event.target.value === '';
});

// EL LISTENER DEL BOTÓN QUE FILTRA.

const completedFilterButtonNode = document.querySelector('#completed-filter');
completedFilterButtonNode.addEventListener('click', function () {
  isCompletedFilterSelected = !isCompletedFilterSelected;
  renderTasksArray();
  localStorage.setItem('isCompletedFilter', isCompletedFilterSelected);
});

// ¿Por qué setItem no mueve la clave en localStorage cuando actualizo una tarea? técnicamente no es la misma tarea.

// Porque setItem no borra y vuelve a crear la clave, solo actualiza su valor. localStorage no mantiene un orden basado en el tiempo de modificación, sino en cómo el navegador lo maneja internamente. Para mantener el orden, es mejor usar un array dentro de una sola clave.
