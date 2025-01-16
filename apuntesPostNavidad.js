//Nuevos métodos interesantes

/*

console.error
.pathname
.pop()

Predeclaracion de parametros
Desestructuracion de parametros
Acceso dinamico a propiedades de objetos
*/

/*
METODOS RELEVANTES DE LAS FECHAS:

-new Date();                fecha actual.
-new Date(2025,2,1))        AÑO, ÍNDICE DE MES, DÍA              1 de marzo de 2025 a las 00:00.
-new Date(2025,1,2, 14))    AÑO, ÍNDICE DE MES, DÍA, HORA        2 de febrero de 2025 a las 14:00.
-new Date('2025-02-01'))    AÑO-MES-DÍA                          1 de febrero a las 1 de la mañana.
-new Date('01/02/25'))      MES/DIA/AÑO                          2 de enero a las 00.
...

new Date('2025-02-01T12:00:00.000Z')    Construcción específica con formato ISO.
new Date().toIsoString())               Convierte a formato ISO.

now.toLocaleDateString());         Muestra fecha local          4/1/2025 
now.toLocaleTimeString());         Muestra hora local           3:02:454
now.toLocaleString());             Muestra ambas                4/1/2025, 3:02:454

A estos se les pueden pasar parámetros de este modo que definen la presentación de lo que imprimen.

now.toLocaleDateString(undefined, {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit',
});                  04/01/25

Y forzar formatos:

now.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});                  sábado 4 de enero de 2025


.getTime()      Fecha en milisegundos calculados desde el 1 de enero de 1970 a las 00 UTC.

Esa fecha en milisegundos se llama TIMESTAMP, se pueden crear fechas con ese valor:

new Date(1736003991648);

También ayuda a operar con fechas:
*/

const date1 = new Date('2025-01-04T15:21:38.207Z');
const date2 = new Date('2025-01-04T15:25:38.207Z');

const msBetweenDates = date2.getTime() - date1.getTime();

const differenceInMinutes = msBetweenDates / 1000 / 60;

/*
En javascript, podemos comparar si una fecha es posterior a otra con los operadores >, >=, <, <=, pero no se pueden comparar con el operador `==` ni `===` directamente. Para comparar si las fechas son iguales, tenemos que comparar los milisegundos
*/

/*

.setFullYear()        cambia AÑO, pero puede usar parámetros opcionales para cambiar MONTH Y DATE.
.setDate()            cambia DIA DEL MES en hora local.
.setHours()           cambia HORAS, pero sus parámetros opcionales permiten alcanzar hasta MS.
.setMinutes()         cambia desde MIN hasta MS.
.setSeconds()         cambia S o MS, los MS son un segundo parámetro opcional.
.setMilliseconds()    cambia solo MS.

Todos estos métodos tienen una contraparte igual con "GET" en lugar de "set" que permite sacar el dato específico de esa fecha:
*/

function addDaysToDate(date, days) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

// En esta función para sumar días a una fecha dada, se declara un objeto fecha con el constructor clásico y luego se opera sobre el utilizando SETDATE para cambiar el DÍA por su día + cuantos haya que sumarle.

/*
CLAVE-VALOR CON OBJETOS.

Hacer operaciones con esta estructura (objetos en vez de arrays) es mucho más rápido a nivel de rendimiento, y según la operación también es mucho más fácil a nivel de código.

Object.keys()     convierte todas las propiedades de un objeto en un array de strings.
Object.values()   convierte todas los valores de las propiedades de un objeto en un array.
Object.entries()  devuelve un array con subarrays que representan propiedades y valores.
*/

const booksReadByCategory1 = { history: 4, fantasy: 5, horror: 1 };
let totalBooks = 0;

//Con KEYS.
Object.keys(booksReadByCategory).forEach((category) => {
  totalBooks += booksReadByCategory[category];
  console.log(`En la categoría ${category} te has leído ${booksReadByCategory[category]} libros`);
});
console.log(`En total, te has leído ${totalBooks} libros`);

//Con VALUES.
Object.values(booksReadByCategory).forEach((count) => {
  totalBooks += count;
});
console.log(`En total, te has leído ${totalBooks} libros`);

//CREACIÓN DINÁMICA del objeto booksReadByCategory
const books = [
  { title: 'El ataque de los ornitorrincos en celo', category: 'horror', read: true },
  { title: 'La venganza de Xindasvinto', category: 'history', read: true },
  { title: 'Ruperto y los caballeros radiantes', category: 'fantasy', read: true },
  { title: 'Arcanum ilimitado', category: 'fantasy', read: false },
  { title: 'El señor de los anillos', category: 'fantasy', read: true },
];

const booksReadByCategory = {};

books.forEach((book) => {
  if (!book.read) {
    return;
  }

  return booksReadByCategory[book.category]
    ? (booksReadByCategory[book.category] += 1)
    : (booksReadByCategory[book.category] = 1);
});
console.log(booksReadByCategory);

//El operador "||" en una asignación significa: "si el primer valor es válido se lo asigno a la variable, si no lo es, le asigno el segundo. Es casi como utilizar un ternario. En este caso de asignación, el segundo valor no llega a evaluarse. De invertir sus posiciones, currentCount siempre sería booksReadByCategory[book.category], porque el 0 siempre será un valor falsy.
const currentCount = booksReadByCategory[book.category] || 0;
