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
  const tasks = getRandomArray();
  document.querySelector("#tasks").innerHTML = "";

  tasks.forEach((task) => {
    createTaskNode(task, true);
  });
}

function giveTaskListeners(task) {
  task.addEventListener("click", (event) => {
    if (task.querySelector(".completed")) {
      task.querySelector(".completed").classList.toggle("completed");
      task.querySelector(".status").innerHTML = "pending";
      return;
    }
    task.querySelector("span").classList.toggle("completed");
    task.querySelector(".status").innerHTML = "completed";
  });
}

function createTaskNode(task, addToEnd) {
  const taskNode = document.createElement("div");
  //.createElement() sirve para crear elementos dinámicamente antes de agregarlos al DOM con algún append.
  taskNode.className = "task";

  taskNode.innerHTML = `
    <span class="${task.isCompleted ? "completed" : ""}">${task.text}</span> -
    <span class="status">${task.isCompleted ? "completed" : "pending"}</span>
    <button style="opacity: 0"> class="${task.isFav ? "fav" : ""}">${task.isFav ? "💝" : "💔"}</button>`;

  const tasksNode = document.querySelector("#tasks");

  if (addToEnd) {
    tasksNode.appendChild(taskNode);
  } else {
    tasksNode.prepend(taskNode);
  }

  taskNode.addEventListener("click", () => {
    const taskTextNode = taskNode.querySelector("span");
    const isCurrentlyCompleted = taskTextNode.classList.contains("completed");
    taskTextNode.classList.toggle("completed");
    taskNode.querySelector(".status").innerText = isCurrentlyCompleted ? "pending" : "completed";
  });

  // Tendras que usar mouseOver y mouseOut para hacer la logica del boton que aparece y desaparece.
  // Voy a crear una clase normal y una clase hover le dare la normal y le pondre y quitare hover con un toggle.
  // Le quitare lo de style opacity 0.

  const favButton = taskNode.querySelector("button");
  favButton.addEventListener("click", (event) => {
    event.stopPropagation();
    const isCurrentlyFav = favButton.classList.contains("fav");
    favButton.classList.toggle("fav");
    favButton.innerText = isCurrentlyFav ? "💔" : "💝";
  });
} //Esta función toma de parámetro si debe añadir o no la tarea al final del array, y la tarea en cuestion a añadir. Si te fijas al acceder a su innerHTML los valores de la tarea son las propiedades del parámetro correspondiente a la tarea.

function addTask(addToEnd) {
  const task = generateRandomTask();
  createTaskNode(task, addToEnd);
}

// event listeners para que los botones llamen a las funciones anteriores
document.querySelector("#regenate").addEventListener("click", () => {
  regenerateArray();
});

document.querySelector("#add-first").addEventListener("click", () => {
  addTask();
});

document.querySelector("#add-last").addEventListener("click", () => {
  addTask(true);
});

// Botoncico en las tareas, que nos encanta.
