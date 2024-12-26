/*
Monta una función que se llame *filterArray* y que sirva para filtrar cualquier array en base a unas condiciones que, a priori no sabemos.

Lo que tiene que hacer esa función es recorrer el array que queramos filtrar, y para cada elemento comprobar si devuelve las condiciones. Si es así, el elemento se guardará en **otro array** que solo tendrá los elementos filtrados.

Después de recorrer la función, devolveremos el array filtrado. 

La función aceptará dos parámetros:
- El primero será el array que queramos filtrar
- El segundo será una función que se llamará para cada elemento del array a filtrar y que debe devolver **true** o **false** . Esta segunda función aceptará a su vez dos parámetros: el elemento del array (aka *ruperto*) y el índice que ocupa.
*/

//Array con las tareas, que tienen un nombre y pueden estar completadas o no.
const tasks = [
  { text: 'hacer deberes', isCompleted: true },
  { text: 'hacer función dentro de función', isCompleted: false },
];

//Función secundaria que comprueba si la tarea de un índice determinado ha sido completada o no.
function isTaskCompleted(index, task) {
  console.log('Comprobando tarea con índice', index);
  return task.isCompleted;
}

//Función que comprueba...

function filterArray(array, filterFunction) {
  const filteredArray = [];

  array.forEach(function (arrayElement, index) {
    if (filterFunction(arrayElement, index)) {
      filteredArray.push(arrayElement);
    }
  });
  return filteredArray;
}

//Puede parecer dificil de seguir pero vayamos por partes. Esta variable ejecuta la función filterArray de arriba con los argumentos "tasks" como array sobre el que ejecutar la función, y una función genérica como la filterfunction. Usamos esa función genérica para poder operar con la funcion específica "isTaskcompleted" en su interior. Es decir, el segundo argumento al completo es: function (element, index) {return isTaskCompleted(index, element); Es un proxy para poder ejecutar la función 'isTaskCompleted'. Semánticamente sería como poner directamente 'isTaskCompleted' como argumento del segundo parámetro.

const completedTasks = filterArray(tasks, function (element, index) {
  return isTaskCompleted(index, element);
});

console.log(completedTasks);

//Esto es un arquetipo de funcion que funciona con una funcion anidada que devuelve un boolean, podras usarlo para muchas tareas.

//Usemos filter para filtrar las frutas que no crecen en un arbol:

const fruits = ['manzana', 'pera', 'granada', 'plátano', 'uva', 'melón', 'sandía'];
const fruitsComplete = [];

fruits.forEach(function (fruitName) {
  fruitsComplete.push({
    name: fruitName,
    growInTree: fruitName === 'manzana' || fruitName === 'pera' || fruitName === 'granada' || fruitName === 'plátano',
  });
});

console.log(fruitsComplete);

const fruitsFromTrees = fruitsComplete.filter(function (item) {
  return item.growInTree;
});

console.log(fruitsFromTrees);

//Ahora lo hacemos con la función .map.

const fruitsAndTrees = fruits.map(function (fruitName) {
  return {
    name: fruitName,
    growInTree: fruitName === 'manzana' || fruitName === 'pera' || fruitName === 'granada' || fruitName === 'plátano',
  };
});

console.log(fruitsAndTrees);

//Ahora buscamos con .find la primera fruta que no crece en un arbol.

const fruitNotOnTree = fruitsComplete.find(function (fruit) {
  return !fruit.growInTree;
});

console.log(fruitNotOnTree);
