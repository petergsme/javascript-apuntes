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

//Añade los impuestos.
const shoppingCart2 = [
  { product: 'Red wine', price: 20, quantity: 1 },
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 },
];

const pepino = (shoppingcartlist) => {
  return shoppingcartlist.map((product) => {
    return { ...product, taxes: 0.1 * product.price };
  });
};

//Dado el carrito de la compra del ejercicio 1, implementa una función que permita eliminar una unidad de producto del carrito de la compra basándose en el nombre del producto. Por ejemplo, si la función se invoca con "Red wine", el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con "Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
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

//Ejercicio de las frutas que crecen o no en arboles con map, filter y find:
const fruits = ['manzana', 'pera', 'granada', 'plátano', 'uva', 'melón', 'sandía'];

const fruitsCompleteInformation = fruits.map(function (fruitName) {
  return {
    name: fruitName,
    growInTree: fruitName === 'manzana' || fruitName === 'pera' || fruitName === 'granada' || fruitName === 'plátano',
  };
});
console.log(fruitsCompleteInformation);

const fruitsFromTrees = fruitsCompleteInformation.filter(function (item) {
  return item.growInTree;
});
console.log(fruitsFromTrees);

//Ahora buscamos con .find la primera fruta que no crece en un arbol.
const fruitNotOnTree = fruitsComplete.find(function (fruit) {
  return !fruit.growInTree;
});
console.log(fruitNotOnTree);

//4. Katas importantes a revisar.

//Square Every Digit.
function squareDigits(num) {
  const numToString = String(num).split('');

  const solveIt = numToString.map(function (item) {
    return item * item;
  });
  return Number(solveIt.join(''));
}

//High and Low.
function highAndLow(numbers) {
  const convertToArray = numbers.split(' ');

  return `${Math.max(...convertToArray)} ${Math.min(...convertToArray)}`;
}
//mira el ejemplo de aitana de high and low.

//Mumbling.(Aquí recibimos como parámetro algo como "aVZdC", tenemos que devolver "A-Vv-Zzz-Dddd-Ccccc")
function accum(s) {
  const convertToArray = s.toUpperCase().split('');

  const whateverArray = convertToArray.map(function (letter, index) {
    return `${letter}${letter.repeat(index).toLowerCase()}`;
  });

  return whateverArray.join('-');
}

//Complimentary DNA. ("ATTGC" --> "TAACG").
function dnaStrand(dna) {
  const dnaToArray = dna.split('');

  const dnaFunction = dnaToArray.map(function (letter, index) {
    if (letter === 'A') {
      return 'T';
    }
    if (letter === 'T') {
      return 'A';
    }
    if (letter === 'C') {
      return 'G';
    }
    return 'C';
  });

  return dnaFunction.join('');
}

//Double Char("String"      -> "SSttrriinngg").
function doubleChar(str) {
  const stringToArray = str.split('');

  const doubleLetters = stringToArray.map((letter) => {
    return letter + letter; //También posible: "letter.repeat(2);"
  });
  return doubleLetters.join('');
}

//Exes and Ohs(Cuenta el número de X y O de un string, solo si hay la misma cantidad será true.)
function XO(str) {
  const stringNormalizeArray = str.toLowerCase().split('');
  let counterOfX = 0;
  let counterOfO = 0;

  stringNormalizeArray.forEach((letter) => {
    if (letter === 'x') {
      counterOfX += 1;
    }
    if (letter === 'o') {
      counterOfO += 1;
    }
  });

  return counterOfX === counterOfO;
}

//Mexican Wave (wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"])
function wave(str) {
  const result = [];
  const characters = str.split('');

  characters.forEach(function (char, index) {
    if (char === ' ') {
      return;
    }

    const charactersCopy = [...characters]; //La clave, el segundo array en el interior se aprovecha del indice del array principal del foreach.
    charactersCopy[index] = char.toUpperCase();
    result.push(charactersCopy.join(''));
  });
  return result;
}

//Otra manera.
function wave2(str) {
  return str.split('').map((char, index) => {
    if (char === ' ') {
      return;
    }
    const arrayOfCharacters = str.split(''); //La clave, el segundo array en el interior se aprovecha del indice del array principal del foreach.
    arrayOfCharacters[index] = arrayOfCharacters[index].toUpperCase();
    return arrayOfCharacters.join('');
  });
}

//Categorize new member (tiene una cosa interesante sobre cómo tratar los arrays dentro de arrays)
//data es un array así: '[[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]'. Cada posición es un subarray.
function openOrSenior(data) {
  const categories = data.map(function ([age, handicap]) {
    //Hemos dado nombre a las posiciones internas del array dentro del array para operar.
    if (age >= 55 && handicap > 7) {
      return 'Senior';
    }
    return 'Open';
  });
  return categories;
}

//es lo mismo hacer:
const categories = data.map(function (person) {
  if (person[0] >= 55 && person[1] > 7) {
    return 'Senior';
  }
  return 'Open';
});

//El infame count smileys.
function countSmileys(arr) {
  const checkNumberOfValidSmiley = arr.filter((face, index) => {
    if (
      (face[0] === ':' || face[0] === ';') &&
      (face.length === 2 || face.length === 3) &&
      (face[face.length - 1] === ')' || face[face.length - 1] === 'D') &&
      (face.length === 2 || face[1] === '-' || face[1] === '~')
    ) {
      return face;
    }
  });
  return checkNumberOfValidSmiley.length;
} //Hay una versión con EARLY RETURNS (capturas.)
