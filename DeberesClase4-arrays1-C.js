/*
  1. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. 
*/

const wakeUp = {
  taskName: 'Levantarse',
  taskStatus: true,
};

const haveBreakfast = {
  taskName: 'Desayunar',
  taskStatus: true,
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

//En variables con solo dos posibles valores, como el estado de la compleción de la tarea, la mejor práctica es usar booleans. Fíjate en ese if que luego usarías para, en caso de que sea true (completado) el estado de la tarea, devuelva el string pertinente.

/*
  2. Crea un array que contenga un listado de vehículos. Usa al menos 5 propiedades en cada vehículo. 
*/

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

console.log(vehicleList);

/*
  3. Imagina que estás en un supermercado haciendo la compra y tienes que comprar lo que está 
  en la variable shoppingList.

  Crea una función a la que le pases dos parámetros, el array de la compra, y el elemento que has comprado
  esa función debe buscar el elemento en el array y eliminarlo.

  Por ejemplo, si le paso un array ['pepino', 'tomate', 'sandía'] y el string 'tomate', debe devolver un array ['pepino', 'sandía']
*/

const shoppingList = [
  'x2 leche de coco',
  'pimiento rojo',
  'pimiento verde',
  'x6 garrafas de agua',
  'aguacates',
  'avena',
  'tomate frito',
  'pepino',
];

function deleteBought(shopList, boughtItem) {
  if (shopList.includes(boughtItem)) {
    shopList.splice(shopList.indexOf(boughtItem), 1);
    return shopList;
  }
  return 'No has comprado nada';
}

/*
Mejor evitar declarar dos veces una variable y hacerlo así de la siguiente manera (ESTA ES LA MANERA CORRECTA):
-Declaramos una variable que recorre una vez el array en busca del índice del objeto a eliminar del carrito de la compra.
-Usamos el valor almacenado en esa variable para evitar recorrer el array de nuevo.(En el mio, el de arriba, lo recorre dos veces)
-La condición del IF funciona en base a que indexOf devuelve -1 cuando no encuentra el boughtItem en ninguna posición. -1 es el valor de fallo de indexOf, por eso si el valor de indexToRemove es mayor o distinto podemos ejecutar el splice.

function deleteBought(shopList, boughtItem) {
  const indexToRemove = shopList.indexOf(boughtItem);

  if (indexToRemove > -1) {
    shopList.splice(indexToRemove, 1);
  }

  return shoplist;
}
*/

console.log(deleteBought(shoppingList, 'pepino'));
console.log(deleteBought(shoppingList, 'judía'));
console.log(shoppingList);

/**
 * 4. Repite el ejercicio anterior sin modificar el array que le pasas como parámetro a la función.
 * Si ya has hecho el ejercicio anterior sin modificar el array, hazlo modificándolo.
 */

const shoppingList2 = [
  'x2 leche de coco',
  'pimiento rojo',
  'pimiento verde',
  'x6 garrafas de agua',
  'aguacates',
  'avena',
  'tomate frito',
  'pepino',
];

function deleteBought2(shopList, boughtItem) {
  const shoplist2 = [...shopList];

  if (shopList.includes(boughtItem)) {
    shoplist2.splice(shoplist2.indexOf(boughtItem), 1);
    return shoplist2;
  }
  return 'No has comprado nada';
}

console.log(deleteBought2(shoppingList2, 'judía'));
console.log(deleteBought2(shoppingList2, 'pepino'));
console.log(shoppingList2);

//5. Tonterías adicionales que he estado probando de los ejemplos del Notion.

const bookCategory = {
  name: 'Fantasía',
  books: [
    {
      title: 'El señor de los anillos',
      format: 'Tapa blanda',
      category: 'Fantasía',
    },
    {
      title: 'La sabiduría de las multitudes',
      format: 'ebook',
      category: 'Fantasía oscura',
    },
  ],
};

console.log(bookCategory);
//Printea el objeto antes de las modificaciones.

bookCategory.books[0] = { titulo: 'John Wick', género: 'comedia' };

console.log(bookCategory);

bookCategory.name = 'Acción';
//Accedemos a una propiedad y la cambiamos.

bookCategory.status = false;
//Accedemos a una propiedad previamente INEXISTENTE y la definimos/AÑADIMOS.

bookCategory['¿Acaso es millonario?'] = true;
//Añadimos una propiedad de nombre complejo entre corchetes y entre comillas. Si la estuvieramos declarando dentro del objeto no harían falta los corchetes pero para añadirla como función/método sí son necesarios.

console.log(bookCategory);
//Printea el objeto tras las modificaciones.

//6. Puedo acceder a un texto como si fuera un array de caracteres.

const textArray = 'peluca';

console.log(textArray[5]);
console.log(textArray[0]);

//7. split convierte string en array de caracteres o de palabras si quieres y tu string tiene varias.

const textToArray = 'peluca fea';
const seeThis = textToArray.split(' ');

console.log(textToArray);
console.log(seeThis);
