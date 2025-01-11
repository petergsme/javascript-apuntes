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
