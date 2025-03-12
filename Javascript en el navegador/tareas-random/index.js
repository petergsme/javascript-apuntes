function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomTask() {
  return {
    text: `Texto aleatorio número ${getRandomInt(1, 1000)}`,
    isCompleted: getRandomInt(0, 1) === 1,
    isFav: getRandomInt(0, 1) === 1,
  };
}

function getRandomArray() {
  const randomTasks = [];
  for (let i = 0; i < 10; i++) {
    randomTasks.push(generateRandomTask());
  }
  return randomTasks;
}

function regenerateArray() {
  const taskList = getRandomArray();
  document.querySelector('#tasks').innerHTML = '';
  localStorage.clear(); // Regenerar el array limpia el localStorage.

  taskList.forEach((task) => {
    createTaskNode(task, true);
  });
}

function createTaskNode(task, addToEnd) {
  const taskNode = document.createElement('div');
  //.createElement() sirve para crear elementos dinámicamente antes de agregarlos al DOM con algún append.
  taskNode.className = 'task';

  taskNode.innerHTML = `
    <span class="${task.isCompleted ? 'completed' : ''}">${task.text}</span> -
    <span class="status">${task.isCompleted ? 'completed' : 'pending'}</span>
    <button class="${task.isFav ? 'fav' : ''}" style="opacity:0">${task.isFav ? '💝' : '💔'}</button>`;

  const taskListNode = document.querySelector('#tasks');

  if (addToEnd) {
    taskListNode.appendChild(taskNode);
  } else {
    taskListNode.prepend(taskNode);
  }

  taskNode.addEventListener('click', () => {
    const taskTextNode = taskNode.querySelector('span');
    const isCurrentlyCompleted = taskTextNode.classList.contains('completed');
    taskTextNode.classList.toggle('completed');
    taskNode.querySelector('.status').innerText = isCurrentlyCompleted ? 'pending' : 'completed';

    const taskInLocal = JSON.parse(localStorage.getItem(`tarea${task.id}`));
    taskInLocal.isCompleted = !taskInLocal.isCompleted;
    localStorage.setItem(`tarea${taskInLocal.id}`, JSON.stringify(taskInLocal));
  });

  const favButton = taskNode.querySelector('button');
  favButton.addEventListener('click', (event) => {
    event.stopPropagation();
    const isCurrentlyFav = favButton.classList.contains('fav');
    favButton.classList.toggle('fav');
    favButton.innerText = isCurrentlyFav ? '💔' : '💝';

    const taskInLocal = JSON.parse(localStorage.getItem(`tarea${task.id}`));
    taskInLocal.isFav = !taskInLocal.isFav;
    localStorage.setItem(`tarea${task.id}`, JSON.stringify(taskInLocal));
  });

  // ¿Por qué setItem no mueve la clave en localStorage cuando actualizo una tarea? técnicamente no es la misma tarea.

  // Porque setItem no borra y vuelve a crear la clave, solo actualiza su valor. localStorage no mantiene un orden basado en el tiempo de modificación, sino en cómo el navegador lo maneja internamente. Para mantener el orden, es mejor usar un gran array dentro de una única clave.

  favButton.addEventListener('mouseover', () => {
    favButton.style.opacity = 1;
  });

  favButton.addEventListener('mouseout', () => {
    favButton.style.opacity = 0;
  });
} //Esta función toma de parámetro si debe añadir o no la tarea al final del array, y la tarea en cuestion a añadir. Si te fijas al acceder a su innerHTML los valores de la tarea son las propiedades del parámetro correspondiente a la tarea.

function addTask(addToEnd) {
  const task = generateRandomTask();
  createTaskNode(task, addToEnd);
} // Esta función es algo redundante, los eventlistener podrian utilizar createTaskNode(generateRandomTask(), true); La única ventaja de hacerlo con addTask es que es más semántico, pero es un poco lioso.

// Event listeners para que los botones llamen a las funciones anteriores
document.querySelector('#regenerate').addEventListener('click', () => {
  regenerateArray();
});

let counter = 0;
const counterInLocal = localStorage.getItem('counter');

if (counterInLocal >= 1) {
  counter = counterInLocal;
}

const formNode = document.querySelector('#create-task');

formNode.addEventListener('submit', (event) => {
  event.preventDefault(); // Enviar un formulario recarga la página, esto lo evita.

  const formData = new FormData(event.target);
  // FormData es un objeto de JavaScript que permite recolectar los valores de un formulario de forma sencilla sin acceder a cada input individualmente.
  const taskText = formData.get('taskText');
  // .get("nombreDelCampo") obtiene el valor de un campo del formulario.

  counter++;

  const newTask = {
    text: taskText,
    isCompleted: 0,
    isFav: 0,
    id: counter,
  };
  createTaskNode(newTask);
  formNode.reset();

  localStorage.setItem('counter', counter);

  localStorage.setItem(`tarea${newTask.id}`, JSON.stringify(newTask));
});

const inputNode = document.querySelector('#create-task > input');
inputNode.addEventListener('input', (event) => {
  const inputText = event.target.value;

  document.querySelector('#create-task button').disabled = !inputText.length;
});

function reloadSession() {
  for (let i = 1; i <= counterInLocal; i++) {
    Object.values(localStorage).forEach((task) => {
      if (Number(task)) {
        return;
      }
      const taskObject = JSON.parse(task);
      if (taskObject.id === i) {
        createTaskNode(taskObject);
      }
    });
  }
}

reloadSession();

const completedFilterButton = document.querySelector('#show-completed');

completedFilterButton.addEventListener('click', function () {
  completedFilterButton.classList.toggle('filter-selected');
  filterTasks();
});

const pendingFilterButton = document.querySelector('#show-pending');

pendingFilterButton.addEventListener('click', function () {
  pendingFilterButton.classList.toggle('filter-selected');
  filterTasks();
});

function filterTasks() {
  const isCompletedFilterSelected = completedFilterButton.classList.contains('filter-selected');
  const isPendingFilterSelected = pendingFilterButton.classList.contains('filter-selected');

  document.querySelectorAll('.task').forEach((taskNode) => {
    // si no hay ningún filtro aplicado, lo muestra
    if (!isCompletedFilterSelected && !isPendingFilterSelected) {
      taskNode.style.display = '';
      return;
    }

    // si completada aplicado y hay completada lo muestra
    const isCompleted = taskNode.querySelector('span').classList.contains('completed');
    if (isCompleted && isCompletedFilterSelected) {
      taskNode.style.display = '';
      return;
    }

    // si pendiente aplicado y hay pendiente lo muestra
    if (!isCompleted && isPendingFilterSelected) {
      taskNode.style.display = '';
      return;
    }

    taskNode.style.display = 'none';
  });
}

/* 

La tarea es guardada una primera vez en LocalStorage cuando se dispara el submit.

La tarea es "actualizada" cuando se dispara alguno de sus listeners específicos. 

Ahora, cuando los listeners de createTaskNode se disparan:
1. Recuperan el objeto del LocalStorage.
2. Cambian la propiedad correspondiente, sin alterar el resto de sus propiedades.
3. Lo vuelven a guardar en LocalStorage.

Para actualizar la tarea correcta, hemos añadido, solo para el event listener del submit, una nueva propiedad: id.
Id genera un número aleatorio al crear una tarea. Ese número "único" es utilizado para dar nombre a la clave que guardará la tarea en LocalStorage:

const newTask = {
    text: taskText,
    isCompleted: 0,
    isFav: 0,
    id: getRandomInt(1, 1000),
  };

localStorage.setItem(`tarea${newTask.id}`, JSON.stringify(newTask));
 
De este modo podremos encontrarla fácilmente para actualizarla.

Luego, en createTaskNode, utilizaremos esa misma propiedad id del task que pasemos de parámetro para recuperar ese identificador y poder acceder a la tarea correcta.

Esto funciona porque nosotros, al recargar la página recuperamos las tareas de LocalStorage como objetos json string y las reconvertimos a objetos funcionales, para añadirlas a través de createTaskNode como el parámetro task.

*/

// Cuando trabajas con strings/booleans/enteros en memoria se guarda el valor. Pero con objetos se guarda la posicion en memoria, la referencia del objeto. Cambiar el valor cambia referencia en memoria, pero con objetos no.
