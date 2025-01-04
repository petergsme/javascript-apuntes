//1. Ingenioso ejercicio sobre el funcionamiento de indexOf.
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

//2. Trasteando con los objetos.

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

//Para copiar un objeto en otro cambiándole una variable hacemos: (también serviría acceder a su propiedad tras copiarlo y cambiarla)

const vehicle = {
  model: 2024,
  wheel: 4,
  color: 'red',
};

const vehicle2 = { ...vehicle, color: 'white' };

//3. Cuidado que vienen curvas (los arrays)

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
