//Ejemplo usar objeto como parámetros de funcion cuando tenga >3 parametros y queramos ser mas descriptivos y menos destructivos.

function randomFunction(param1, param2, param3, param4) {
  console.log(param1, param2, param3, param4);
}

function randomFunctionWithObject(params) {
  console.log(params.param1, params.param2, params.param3, params.param4);
}

randomFunction('1', 2, 3, '4232');
randomFunctionWithObject({ param1: '1', param2: 2, param3: 3, param4: '4232' });

//Para copiar un objeto en otro cambiándole una variable hacemos: (también serviría acceder a su propiedad tras copiarlo y cambiarla)

const vehicle = {
  model: 2024,
  wheel: 4,
  color: 'red',
};

const vehicle2 = { ...vehicle, color: 'white' };

/* También podrías poner color: 'white' antes, pero si el objeto que copia ya posee la propiedad la sobreescribira. Es bueno para casos donde a veces el objeto viene sin esa propiedad.*/

//1.a Ejercicio 1 del deber de arrays modificado. Aplica un filtro que haga que solo se muestren las tareas pendientes.

const wakeUp = {
  taskName: 'Levantarse',
  taskStatus: true,
};

const haveBreakfast = {
  taskName: 'Desayunar',
  taskStatus: false,
};

const brushTeeth = {
  taskName: 'Lavarse los dientes',
  taskStatus: true,
};

const suitUp = {
  taskName: 'Vestirse',
  taskStatus: false,
};

const taskList = [wakeUp, haveBreakfast, brushTeeth, suitUp];

console.log(taskList);

if (taskList[0].taskStatus) {
  console.log('La tarea está completada.');
}

let pendingTasks = [];

taskList.forEach(function (task) {
  if (!task.taskStatus) {
    pendingTasks.push(task.taskName);
  }
});

console.log(pendingTasks);

//2.a Ejercicio 2 del deber de arrays de coches modificado. Aplica un filtro.

const car1 = {
  brand: 'Toyota',
  model: 'Corolla',
  lastUpdated: 2024,
  lowestPriceEuro: 26000,
  blackFridayOffer: false,
};

const car2 = {
  brand: 'Jaguar',
  model: 'F-Type',
  lastUpdated: 2024,
  lowestPriceEuro: 82600,
  blackFridayOffer: false,
};

const car3 = {
  brand: 'Seat',
  model: 'Ibiza',
  lastUpdated: 2022,
  lowestPriceEuro: 15430,
  blackFridayOffer: true,
};

const vehicleList = [car1, car2, car3];

let isBlackFriday = [];

vehicleList.forEach(function (car) {
  if (car.blackFridayOffer) {
    isBlackFriday.push(car);
  }
});

console.log(isBlackFriday);
