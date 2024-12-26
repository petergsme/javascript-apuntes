// 1 Ejercicios inicio segunda clase. 14-11-24

/*
  Define una persona con 8 variables
*/

let humanSex = 'varón';
const humanHeightM = 1.68;
let humanWeightKg = 68;
const humanEthnicity = 'caucásico';

/*
  Define una mesa con 6 variables
*/

const tableHeightCm = 60;
const tableWideCm = 35;
const tableLengthCm = 90;
const tableMaterial = 'wood';
const tableShape = 'rectangular';
const tableStyle = 'modern';
const tableThicknessMm = 30;
const legNum = 4;

// 2 Ejercicios realizados durante la segunda clase.

/*
  Arregla los errores
*/

const firstName = 'Jose Miguel';
const lastName = 'González García';
const fullName = `${firstName} ${lastName}`;

console.log(fullName);

/*
  Arregla el error
*/

let x = 2;
const y = 4;
x = y + x;

console.log(x);

/*
  Cambia la declaración de variables usando let o const
*/

const myVar1 = 1;
const myVar2 = 25;
let sum = myVar1 + myVar2;
sum = sum + 1;

console.log(sum);

/*
  Declara una variable que contenga un número, otra que contenga el texto 'Hola' y otra que contenga el texto "Hola [NUMERO]" donde el [NUMERO] será el valor de la primera variable.
*/

const numSentence = 27;
const halfSentence = 'Hola';
const fullSentence = `${halfSentence} ${numSentence}`;

console.log(fullSentence);
//Otra manera de hacerlo, evitando crear una variable.
console.log(`${halfSentence} ${numSentence}`);

/*
 Declara una variable con una cadena de texto y escribe en la consola el texto "Mi cadena de texto tiene [NUMERO] caracteres", donde [NUMERO] será el tamaño de esa cadena de texto. 
 Por ejemplo, si la cadena de texto es "hola", el resultado debe ser "Mi cadena de texto tiene 4 caracteres".
*/

const myWord = 'jovenzuelos';

console.log(`Mi cadena de texto tiene ${myWord.length} caracteres`);

/*
 Declara una variable numérica, y 3 más de tipo booleano, una que indique si es mayor que 3, otra que indique si es menor que 5 y otra que indique si es igual a 8.
*/

const varNum = '8';
const overThree = varNum > 3;
const underFive = varNum < 5;
const equalsEight = varNum == 8;

console.log(`${varNum} es mayor que tres: ${overThree}`);
console.log(`${varNum} es menor que cinco: ${underFive}`);
console.log(`${varNum} es igual a ocho: ${equalsEight}`);

// * Recuerda, es importante poner las variables en ingles siempre :/
// Por cierto he puesto 8 string y no número para comprobar que en comparaciones JS lo convierte a número.
