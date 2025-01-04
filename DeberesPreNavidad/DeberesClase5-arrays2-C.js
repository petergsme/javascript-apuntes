/*
  1. Dado el siguiente carrito de la compra, calcular el precio total y mostrarlo por pantalla con console.log
*/
const shoppingCart = [
  { product: 'Red wine', price: 20, quantity: 1 },
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 },
];

let totalPrice = 0;

shoppingCart.forEach(function (product, index) {
  totalPrice += product.price * product.quantity;

  if (index === shoppingCart.length - 1) {
    console.log(`El precio total de la compra es: ${totalPrice.toFixed(2)}€`);
  }
});

/*
  2. Crea un array que contenga un listado de tareas. Las tareas tienen un texto y pueden estar completadas o pendientes. A continuación filtra el array para mostrar todas las 
  tareas que están completadas y luego todas las tareas que están pendientes.
*/

const taskList = [
  { taskName: 'Levantarse', isCompleted: true },
  { taskName: 'Desayunar', isCompleted: false },
  { taskName: 'Lavarse los dientes', isCompleted: false },
  { taskName: 'Vestirse', isCompleted: false },
];

const pendingTasks = [];
const doneTask = [];

//Recuerda aunque la declares const, el interior del array puede cambiar.

taskList.forEach(function (task, index) {
  if (!task.isCompleted) {
    pendingTasks.push(task);
  }

  if (task.isCompleted) {
    doneTask.push(task);
  }
});

console.log(pendingTasks);
console.log(doneTask);

/*
 3. Dado el listado de frutas que ponemos a continuación, recórrelo y crea otro array de igual longitud donde en cada elemento, aparezca el nombre de la fruta y si crece o no en un árbol.
   - Las que crecen en los árboles son las manzanas, las peras, las granadas y los plátanos.
*/

const frutas = ['manzana', 'pera', 'granada', 'platano', 'uva', 'melón', 'sandía'];

const fruitsComplex = [];

frutas.forEach(function (fruit) {
  if (fruit === 'uva' || fruit === 'melón' || fruit === 'sandía') {
    fruitsComplex.push({ name: fruit, isGrownOnTree: false });
    return;
  }
  fruitsComplex.push({ name: fruit, isGrownOnTree: true });
});

//Aqui en vez de else podemos meter un return dentro del primer if, y sacar fuera el else sin return, además se puede simplificar aun más, hay una foto "ejemplo maneras de usar arrays",el ejemplo tiene que ver con predeclarar variables para escribir codigo más limpio.

console.log(fruitsComplex);

/* 
   4. Dado el carrito de la compra del ejercicio 1, transforma ese array en otro que contenga además los impuestos. Por ejemplo, el primer elemento será:
	  { product: 'Red wine', price: 20, quantity: 1, taxes: 2 }

   Asumiremos que los impuestos son el 10% del precio total del producto.

   PD: La idea es que recorras el array original y lo transformes en otro con esa propiedad.
*/

const shoppingCart2 = [
  { product: 'Red wine', price: 20, quantity: 1 },
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 },
];

shoppingCart2.forEach(function (product) {
  product.taxes = 0.1 * product.price;
});

console.log(shoppingCart2);

const pepino = (shoppingcartlist) => {
  return shoppingcartlist.map((product) => {
    return { ...product, taxes: 0.1 * product.price };
  });
};

console.log(pepino(shoppingCart2));

/*
   5. Dado el carrito de la compra del ejercicio 1, implementa una función que permita eliminar una unidad de producto del carrito de la compra basándose en el nombre del producto. Por ejemplo, si la función se invoca con "Red wine", el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con "Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
*/

const shoppingCart3 = [
  { product: 'Red wine', price: 20, quantity: 1 },
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 },
];

function deleteProduct(boughtProduct) {
  shoppingCart3.forEach(function (item, index) {
    if (item.product === boughtProduct && item.quantity === 1) {
      shoppingCart3.splice(index, 1);
      return;
    }

    if (item.product === boughtProduct) {
      item.quantity = item.quantity - 1;
    }
  });
}

console.log(deleteProduct('Red wine'));
console.log(deleteProduct('Pizza carbonara'));
console.log(shoppingCart3);

//ejemplo evitar romper arrays es una mejora de este. El ejemplo trata la idea de no modificar el array original de manera elegante y muestra el poder de declarar una constante dentro de una funcion pero fuera de la parte del forEach. Recordemos que al declararla dentro de la función pero fuera del forEach su valor se mantendrá a lo largo de la ejecución (en el ForEach el valor de una variable interna se reinicia cada iteración, CUIDADO.). Aún así, si queremos guardar el valor final deberiamos declarar la funcion con una variable.
