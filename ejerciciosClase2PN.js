//Ejercicios de CLAVE-VALOR.

/**
 * 1. Vamos a hacer una función a la que le pasamos un número y nos va a devolver
 * un array del tamaño igual al número que le pasamos con tareas random.
 *
 * Una tarea random es una tarea con un texto aleatorio, por ejemplo "Tarea de prueba 402"
 * También tiene que tener una fecha random con un mes aleatorio entre 0 y 11, y un dia aleatorio entre 1 y 28
 * y aleatoriamente también, las tareas pueden estar completadas o no
 *
 */

const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min);
};

const getRandomTaskArray = (number) => {
  const randomArray = [];

  for (let counter = 0; counter <= number; counter++) {
    randomArray[counter] = {
      tarea: `Tarea de prueba ${randomNumber(0, 999)}`,
      fecha: new Date(2025, randomNumber(0, 11), randomNumber(1, 28)),
      isComplete: !randomNumber(0, 1),
    };
  }
  return randomArray;
};

console.log(getRandomTaskArray(14));

/**
 * 2. Haz una función que categorice las tareas por mes, y dentro del mes, por día.
 * Por ejemplo el objeto resultante sería algo así:
 *  {
 *    0: { //mes
 *       1: [ARRAY DE TAREAS] //día
 *    }
 *  }
 * En [ARRAY DE TAREAS] estarán todas las tareas del día 1 de enero.
 */

const arrayOfTasks = getRandomTaskArray(500);

const organizeTasks = (tasks) => {
  const organizedTasks = {};

  tasks.forEach((task) => {
    const taskMonth = task.fecha.getMonth();
    const taskDay = task.fecha.getDate();

    if (!organizedTasks[taskMonth]) {
      organizedTasks[taskMonth] = {};
    }

    if (!organizedTasks[taskMonth][taskDay]) {
      organizedTasks[taskMonth][taskDay] = [];
    }

    organizedTasks[taskMonth][taskDay].push(task);
  });
  return organizedTasks;
};

console.log(organizeTasks(arrayOfTasks));

const check = organizeTasks(arrayOfTasks);

console.log(check[5][10]);
