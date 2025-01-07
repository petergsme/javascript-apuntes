/*


1. UN INTERESANTE INDEXOF ----------------------------------------------------------------------


*/

// Función que recibe una lista de la compra y un elemento, lo busca y lo elimina del array.
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
  const indexToRemove = shopList.indexOf(boughtItem);

  if (indexToRemove > -1) {
    shopList.splice(indexToRemove, 1);
  }
  return shoplist;
}

/*
  -Declaramos una variable que recorre una vez el array en busca del índice del objeto a eliminar del carrito de la compra.
  -Usamos el valor almacenado en esa variable para evitar recorrer el array de nuevo.
  -La condición del IF funciona en base a que indexOf devuelve -1 cuando no encuentra el boughtItem en ninguna posición. -1 es el valor de fallo de indexOf, por eso si el valor de indexToRemove es mayor o distinto podemos ejecutar el splice, ya que significará que sí ha encontrado el producto a eliminar del carrito de la compra.
*/

/*


2. TRASTEANDO CON LOS OBJETOS ----------------------------------------------------------------------


*/

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

bookCategory.books[0] = { titulo: 'John Wick', género: 'comedia' };
//Accedemos a la propiedad books, que resulta ser un array. Una vez dentro accedemos a la posición 0 del array, que es un objeto y lo cambiamos por otro.

bookCategory.name = 'Acción';
//Accedemos a una propiedad y la cambiamos.

bookCategory.status = false;
//Accedemos a una propiedad previamente INEXISTENTE y la definimos/AÑADIMOS.

bookCategory['¿Acaso es millonario?'] = true;
//Añadimos una propiedad de nombre complejo entre corchetes y entre comillas. Si la estuvieramos declarando dentro del objeto no harían falta los corchetes pero para añadirla como función/método sí son necesarios.

console.log(bookCategory);

//Para copiar un objeto en otro cambiándole una variable hacemos: (también serviría acceder a su propiedad tras copiarlo y cambiarla).
const vehicle = {
  model: 2024,
  wheel: 4,
  color: 'red',
};

const vehicle2 = { ...vehicle, color: 'white' };

/*


3. EJERCICIOS RELEVANTES DE ARRAYS.(alguno incluye TERNARIOS, FOR...) ------------------------------------------------------------


*/

//Añade los impuestos al carrito de la compra.
const shoppingCart = [
  { product: 'Red wine', price: 20, quantity: 1 },
  { product: 'water', price: 1, quantity: 2 },
  { product: 'Pizza carbonara', price: 10, quantity: 3 },
  { product: 'Tiramisú', price: 5.99, quantity: 2 },
];

const cartWithTaxes = (shoppingcartlist) => {
  return shoppingcartlist.map((product) => {
    return { ...product, taxes: 0.1 * product.price };
  });
};

//Para el mismo carro de la compra, implementa una función que permita eliminar una unidad de producto del carrito de la compra basándose en el nombre del producto. Si la función se invoca con "Red wine", el array debe eliminar ese elemento de la lista porque solo hay 1, pero si se invoca con "Tiramisú", simplemente se restará uno a la propiedad quantity de ese elemento.
function removeProduct(productList, productName) {
  const productListCopy = [];
  productList.forEach((ruperto) => {
    if (ruperto.product !== productName) {
      productListCopy.push(ruperto);
      return;
    }

    if (ruperto.quantity === 1) {
      return;
    }

    productListCopy.push({
      ...ruperto,
      quantity: ruperto.quantity - 1,
    });
  });
  return productListCopy;
} //Este ejemplo es interesante porque funciona bajo la premisa de los EARLY RETURNS.

//Ejercicio de las frutas que crecen o no en arboles.
const fruits = ['manzana', 'pera', 'granada', 'plátano', 'uva', 'melón', 'sandía'];

//Con .map
const fruitsCompleteInformation = fruits.map(function (fruitName) {
  return {
    name: fruitName,
    growInTree: fruitName === 'manzana' || fruitName === 'pera' || fruitName === 'granada' || fruitName === 'plátano',
  };
});
console.log(fruitsCompleteInformation);

//Con .filter
const fruitsFromTrees = fruitsCompleteInformation.filter(function (item) {
  return item.growInTree;
});
console.log(fruitsFromTrees);

//Ahora buscamos con .find la primera fruta que no crece en un arbol.
const fruitNotOnTree = fruitsComplete.find(function (fruit) {
  return !fruit.growInTree;
});
console.log(fruitNotOnTree);

// Función que recibe name y age:
// - Si ambos tienen valor, devuelve "Hola, me llamo [NAME] y tengo [AGE] años".
// - Si solo name tiene valor, devuelve "Hola, me llamo [NAME]".
// - Si ninguno tiene valor, devuelve "No quiero decirte mi nombre, pringao".
function greetings(name, age) {
  if (age && name) {
    return `Hola me llamo ${name} y tengo ${age} años`;
  }

  if (!age && name) {
    return `Hola me llamo ${name}`;
  }

  return 'No quiero decirte mi nombre, pringao';
}
//Aqui en las condiciones no hace falta usar comparar a undefined, piensa que los casos de error son: undefined, null, numero que sea 0 y cadenas de texto vacías. Si te paras a pensarlo puedes poner los valores utilizando su valor intrinseco para saber si son truthy o falsy. Recuerda que se evaluan falsy el 0 y -0, los null y undefined, y las cadenas de texto vacías.
//Al comparar un elemento a null y undefined a la vez, podrías retirar el triple igual y comparar únicamente el elemento con dos iguales a undefined. Esto es porque javascript trata null como un undefined a nivel de valor, aunque su tipo sea objeto y no undefined.

//Escribe una función que dado un número, te devuelva una lista de nombres de película que te encantaría ver.
//Los nombres de película se formarán aleatoriamente con dos arrays:
//['La venganza', 'El retorno', 'La comunidad', 'El reino', 'La abuela', 'Godofredo', 'Robustia', 'Pitifasio']
//['de los ornitorrincos salvajes', 'de los cangrejos de rio', 'de los murcianos', 'de los paparajotes', 'con cucharón']
const youShouldWatch = (number) => {
  const titlePart1 = [
    'La venganza',
    'El retorno',
    'La comunidad',
    'El reino',
    'La abuela',
    'Godofredo',
    'Robustia',
    'Pitifasio',
  ];
  const titlePart2 = [
    'de los ornitorrincos salvajes',
    'de los cangrejos de rio',
    'de los murcianos',
    'de los paparajotes',
    'con cucharón',
  ];

  const yourMovieList = [];

  for (let counter = 0; counter <= number; counter++) {
    const temporaryContainer = [];
    temporaryContainer.push(titlePart1[Math.floor(Math.random() * (7 - 0) + 0)]);
    temporaryContainer.push(titlePart2[Math.ceil(Math.random() * (4 - 0) + 0)]);
    yourMovieList.push(temporaryContainer.join(' '));
  }

  return yourMovieList;
};
console.log(youShouldWatch(7));
// Creamos un array temporal dentro del bucle para almacenar las dos partes del título. Luego, empujamos (push) las dos mitades unidas(con join) al array donde deberán ir los títulos. Repetimos este proceso tantas veces como películas indique 'number'.
// Para tomar un título al azar, usamos Math.random ajustado a los parámetros necesarios. Podrímaos haberlo implementado como una función externa para mayor claridad.

/*


4.KATAS IMPORTANTES. ----------------------------------------------------------------------


*/

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
} //*mira el "ejemplo de aitana de high and low".

//Mumbling.("aVZdC" --> "A-Vv-Zzz-Dddd-Ccccc")
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

//Double Char("String" --> "SSttrriinngg").
function doubleChar(str) {
  const stringToArray = str.split('');

  const doubleLetters = stringToArray.map((letter) => {
    return letter + letter; //También posible: "letter.repeat(2);"
  });
  return doubleLetters.join('');
}

//Exes and Ohs(Cuenta el número de 'X' y 'O' de un string, solo si hay la misma cantidad será true.)
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
    const arrayOfCharacters = str.split(''); //La clave, el segundo array en el interior se aprovecha del índice del array principal del foreach.
    arrayOfCharacters[index] = char.toUpperCase();
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

//Your order.("is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est")
function order(words) {
  const stringToArray = words.split(' ');

  const orderedSentence = [];

  for (let counter = 1; counter <= stringToArray.length; counter++) {
    orderedSentence.push(
      stringToArray.find((word) => {
        return word.includes(counter);
      })
    );
  }
  return orderedSentence.join(' ');
}

//Supermarket queue.(queueTime([10,2,3,3], 2) --> 10, queueTime([2,3,10], 2) --> 12)
function queueTime(customers, n) {
  const arrayOfTills = [];

  for (let counter = 1; counter <= n; counter++) {
    arrayOfTills[counter - 1] = 0;
  }

  customers.forEach((personTime, index) => {
    const shortestQueue = Math.min(...arrayOfTills);
    const indexOfShortestQueue = arrayOfTills.indexOf(shortestQueue);
    arrayOfTills[indexOfShortestQueue] += personTime;
  });

  return Math.max(...arrayOfTills);
}

/*


5. RECUERDAS ----------------------------------------------------------------------


*/

//Puedes utilizar la condición TRUTHY o FALSY intrínseca de un valor para comprobar su validez y descartar valores inválidos como: NULL, UNDEFINED, 0 o -0, EL STRING VACÍO o el NAN.

//Puedes definir variables a partir de los valores de otras variables: const isJosemiChef = !isJosemiDeveloper;

//Cuando algo resulte tedioso, considera invertir la lógica: en lugar de eliminar elementos de un sitio, podrías añadir los que necesitas a otro, lo que podría simplificar el problema. Los EARLY RETURNS son otra estrategia útil: en lugar de buscar directamente cumplir un objetivo, descartamos las opciones no deseadas. Por ejemplo, en lugar de verificar si A es igual a B, detendríamos la función si A no es igual a B. Esto es especialmente útil cuando hay muchas condiciones por comprobar, ya que simplifica el flujo al detener la ejecución en cuanto se cumple una condición no deseada.

//Puedes concatenar métodos: words.split(' ').forEach((word) => {...

//Conforme avanzas en la ejecucion de una funcion piensa que tus condiciones que no se cumplen excluyen cosas a comprobar (KATA SMILIES). El orden en que se validan las condiciones descarta opciones.

//Es buena práctica sustituir código repetido por variables predeclaradas. Predeclarar variables también es útil en muchos otros casos (inicialización del mayor y el menor en AITANA HIGHER LOWER). Los contadores (KATA EXES AND OHS), tienen que ver con esto

//Si necesitas que una función ya compleja haga uso de otra que no has implementado aún, escribela fuera e invocala dentro de la función donde quieras usarla. Tu código será más claro.

/* Interesa usar TERNARIOS en:
- declaracion/asignacion de valores a propiedades de objetos/variables.
- returns de funciones.
- permite que valores de variables/propiedades dependan de otros lugares.
*/

//los BUCLES FOR, son útiles para crear listados de objetos con prácticamente el mismo valor.

//MUY IMPORTANTE, crear ARRAYS TEMPORALES dentro de funciones es la clave para resolver muchos problemas, puedes utilizarlos como contenedores temporales (PELÍCULAS ALEATORIAS) o para copiar el valor del array sobre el que operas y operar sobre el (MEXICAN WAVE). Tampoco debes olvidar que la parte del código de los métodos de los array (.map, .find, .filter, .some y .every) puede incluir más que el return de su propósito. (ejerciciosClase10 - 03).

/*


6. MÉTODOS VARIOS QUE PODRÍAS OLVIDAR ----------------------------------------------------------------------


*/

/*
.join('')
.split('')

.push
.unshift
.splice(0, 2) - 0 es el índice desde el que debe borrar, 2 el número de elementos a borrar.
.slice(3, -5) - extraerá desde el carácter en la posición 3 hasta el que se encuentra 5 posiciones antes del final.

String(x)
Number(x)

.indexOf() - Sorprendentemente útil para cambiar partes específicas de cosas (KATA SUPERMARKET QUEUE).
.charAt()

.length
.startsWith()
.includes()

Math.max()
Math.min()
Math.abs(5 - 78)
Math.floor()
Math.ceil()

.repeat()

isNaN()
Array.isArray()
*/

/*En resumen, si te encuentras atascado con un ejercicio que te supera:

-Encuentra la manera sencilla de afrontarlo. Dale vueltas a de qué manera funciona el problema que debes resolver, a veces son más fáciles de lo que pensamos y escribimos código innecesario.

-Elabora un plan que establezca qué ES LO QUE BUSCAS.

-Encuentra los métodos que orgánicamente se prestan a cumplir tu objetivo. Si crees que has encontrado la manera sencilla de afrontar el problema pero no terminas de encontrar la escritura del código, revisa los métodos sobre este texto.
*/
