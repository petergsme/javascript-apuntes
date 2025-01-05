//Versión de EARLY RETURNS de 'count smilies'(CAPTURA EJEMPLO).

//Ejemplo Aitana High and Low. Mi captura no viene con su inicializacion de las variables "lowest" y "highest". La clave está en que ella inicializa ambas variables desde el valor en la primera posicion del array.

/** Crear una función que, dados dos parámetros, name y age:
 * Si name y age tienen un valor devolveremos Hola me llamo [NAME] y tengo [AGE] años
 * Si age no tiene valor pero name si devolveremos Hola me llamo [NAME]
 * Si ninguno tiene valor devolveremos No quiero decirte mi nombre, pringao
 */

//Aqui en las condiciones no hace falta usar comparar a undefined, piensa que los casos de error son: undefined, null, numero que sea 0 y cadenas de texto vacías. Si te paras a pensarlo puedes poner los valores utilizando su valor intrinseco para saber si son truthy o falsy. Recuerda que se evaluan falsy el 0 y -0, los null y undefined, y las cadenas de texto vacías.
function greetings(name, age) {
  if (age && name) {
    return `Hola me llamo ${name} y tengo ${age} años`;
  }

  if (!age && name) {
    return `Hola me llamo ${name}`;
  }

  return 'No quiero decirte mi nombre, pringao';
}

//Hecho con IFs exclusivamente.
const helloFriend = (name, age) => {
  if (name != undefined && age == undefined) {
    return `Hola me llamo ${name}.`;
  }

  if (name != undefined && age != undefined) {
    return `Hola me llamo ${name} y tengo ${age} años.`;
  }
  return `No quiero decirte mi nombre, pringao.`;
};

console.log(helloFriend('pepe', 28));
console.log(helloFriend('pepe', null));
console.log(helloFriend());

//Hecho con IFs y ternarios.
const helloFriend2 = (name, age) => {
  if (name != undefined && age == undefined) {
    return `Hola me llamo ${name}.`;
  }

  return name != undefined && age != undefined
    ? `Hola me llamo ${name} y tengo ${age} años.`
    : `No quiero decirte mi nombre, pringao.`;
};

console.log(helloFriend2('pepe', 28));
console.log(helloFriend2('pepe', null));
console.log(helloFriend2());

//Hecho exclusivamente con ternarios.
const helloFriend3 = (name, age) => {
  const firstCondition =
    name != undefined && age != undefined
      ? `Hola me llamo ${name} y tengo ${age} años.`
      : `No quiero decirte mi nombre, pringao.`;

  return name != undefined && age == undefined ? `Hola me llamo ${name}.` : firstCondition;
};

console.log(helloFriend3('pepe', 28));
console.log(helloFriend3('pepe'));
console.log(helloFriend3());

//Al comparar un elemento a null y undefined a la vez, podrías retirar el triple igual y comparar únicamente el elemento con dos iguales a undefined. Esto es porque javascript trata null como un undefined a nivel de valor, aunque su tipo sea objeto y no undefined.

/**
 * A los alumnos y alumnas de programación de ID3 les cuesta poner los nombres de las variables. Por eso,
 * el profesor en su eterna sabiduría ha decidido que programen una función que les de nombres útiles
 * que puedan usar para sus variables.
 *
 * Programa una función, que devuelva un nombre aleatorio para una variable. La función tendrá un
 * parámetro con el número de variables que tiene que devolver. El número de variables máximo es 2
 * y el mínimo es 1.
 *
 * Si el número es 2, la función debe devolver un array con dos cadenas de texto y si es uno, debe
 * devolver una cadena de texto (no un array, solo la cadena de texto).
 *
 * El nombre de las variables siempre será ruperto[sufijo], sufijo será un número aleatorio
 */

const nameVariable = (numOfNames) => {
  const arrayOfRandom = [];
  const isValidNumber = typeof numOfNames === 'number';

  const intoArray = (array) => {
    if (numOfNames === 2 && isValidNumber) {
      array.push(`ruperto${Math.random()}`);
      array.push(`ruperto${Math.random()}`);
      return array;
    }
    return `No has introducido un valor válido`;
  };

  return isValidNumber && numOfNames === 1 ? `ruperto${Math.random()}` : intoArray(arrayOfRandom);
};

console.log(nameVariable(1));
console.log(nameVariable(2));
console.log(nameVariable(4));
console.log(nameVariable('pepe'));

//Manera mucho más sencilla de hacer el ejercicio anterior. No hace falta montar un array ahí. Usa las condiciones negativas/inversas:

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomVars(numVars) {
  if (numVars !== 1 && numVars !== 2) {
    console.log('numVars debe estar entre 0 y 1');
    return;
  }

  return numVars === 1
    ? `ruperto${getRandomInt(0, 100)}`
    : [`ruperto${getRandomInt(0, 100)}`, `ruperto${getRandomInt(0, 100)}`];
}

console.log(getRandomVars(1));
console.log(getRandomVars(2));
console.log(getRandomVars(4));
console.log(getRandomVars('pepe'));

//EMPEZAMOS CON BUCLES FOREACH.

/**
 * Escribe una función que dado un número, escriba su tabla de multiplicar en consola
 * Por ejemplo si le digo 1 debe escribir:
 *  1 x 1 = 1
 *  1 x 2 = 2
 *  .........
 */

const printTimesTable = (number) => {
  for (let counter = 1; counter <= 10; counter++) {
    console.log(`${number} x ${counter} = ${number * counter}`);
  }
};

printTimesTable(9);

/**
 * Haz una función que dado un número, escriba todos los números pares desde el 0 al número introducido.
 * Por ejemplo si introduzco 6, mostrará:
 *  0
 *  2
 *  4
 *  6
 */

const printEven = (number) => {
  for (let start = 0; start <= number; start += 2) {
    console.log(start);
  }
};

printEven(149);

/** Haz una función que, dado un número, escriba una cuenta atrás de ese número en pantalla.
 * Por ejemplo, si introduzco 3, escribirá:
 * 3
 * 2
 * 1
 * 0
 */

const countdown = (number) => {
  for (let countdown = number; countdown >= 0; countdown--) {
    console.log(countdown);
  }
};

countdown(128);

/**
 * Escribe una función que acepte una letra y un número, y el programa mostrará una cadena formada por la letra repetida el número que haya introducido.
 */

const letterTimesNumber = (letter, number) => {
  const arrayOfLetters = [];

  for (let counter = 1; counter <= number; counter++) {
    arrayOfLetters.push(letter);
  }

  return arrayOfLetters.join('');
};

console.log(letterTimesNumber('z', 3));

/**
 * Escribe una función que dado un número, te devuelva una lista de nombres de película que te encantaría ver.
 * Los nombres de película se formarán aleatoriamente con dos arrays:
 * ['La venganza', 'El retorno', 'La comunidad', 'El reino', 'La abuela', 'Godofredo', 'Robustia', 'Pitifasio']
 * ['de los ornitorrincos salvajes', 'de los cangrejos de rio', 'de los murcianos', 'de los paparajotes', 'con cucharón']
 */
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

//tenemos que crear un for que tenga un array que se reincia dentro donde mete los dos trozos de titulo. luego hace un push de ese array con join al array titlepart2. Hara eso tantas veces como peliculas tenga que contener la lista que indique el number.

//para que lo pille al azar tenemos que meter un math random que funcione para los parametros especificos de este ejercicio, puede ser creado como una funcion externa creo.

//De aqui los ejercicios worth it son el primero y último.
