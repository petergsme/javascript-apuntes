/*
Escribe qué valor debe ser X e Y para que las siguientes condiciones se cumplan (den true)
Cada ejercicio puede tener un valor de X e y distinto
Es posible que alguna condición no se pueda dar nunca. Indica por qué
*/
let result;
let x;
let y;

// Ejemplo, x= 3, y = 1
result = x > y;
console.log(result);

//1.
x = 10;
y = 4;
result = x > y + 5;
console.log(result);

//2.
y = 6;
result = 'pepito'.length === y;
console.log(result);

//3.
y = 32;
x = 'xczxczxczxczxcxzczxczxczxczxczxc';
result =
  'La venganza de los ornitorrincos salvajes'.length < y + 10 && x.length === y;
console.log(result);
/* x.length es siempre un resultado numérico por lo que su tipo siempre será el de Y, sin embargo,
para que sus valores coincidan el número de caracteres del string X deberá ser igual al valor númerico de Y. Solo así será true.*/

//4.
x = 3;
y = 3;
result = x >= y;
console.log(result);

//5.
x = '7';
result = x !== 'number';
console.log(result);
//X debe ser distinto en valor O tipo a 'number' para que sea TRUE. Para eso bien puede ser: número, string numérico o string distinto.

//6.
x = 2 > 3;
y = 3 > 2;
result = y && !x;
console.log(result);

//7.
X = 3;
y = 2;
result = y <= x || x > y;
console.log(result);

//8.
x = 2;
y = 26;
result = -1 + x === y - 25;
console.log(result);

/*9. Nunca será TRUE sin cambiar valores de RESULT. Mientras 'String' esté en mayúscula nunca serán iguales en valor, ya que
typeof Y siempre devolverá 'string' minúscula */
result = typeof y === 'String';
console.log(result);

//10.
x = 0.5;
y = 0.3;
result = x > 0 && x < 1 && y > 0 && y < x;
console.log(result);

//11.
x = 'a';
result = x !== '' && x.length < 2;
console.log(result);

//12.
x = 6;
result = typeof x === 'number' && x > '5';
console.log(result);

/*En comparaciones:
- número y string numérico --> JS intenta convertir string a número y comparar valores.
- número y string NO numérico --> JS vuelve a intentar convertir el string a número y al no ser posible lo clasifica como NaN.
Todas las comparaciones con un NaN dan FALSE siempre.
- dos strings (da igual si tienen números o no) --> JS hara comparación basándose en el orden lexicográfico (alfabético) de Unicode*/

//13.
x = '123456';
result = x.length > 5 && x.length < 6.0000000000001;
console.log(result);

//14.
x = 'cero';
y = 'uno';
result = y.length && x.length && x.length !== y.length;
console.log(result);

//Recuerda que .length es un método de STRINGS.

/*Nunca podrá cumplirse. X tendría que ser un string con al menos un carácter para cumplir la primera condición, lo que haría
imposible cumplir la segunda al mismo tiempo.*/
result = x.length > 0 && x.length < 1;
console.log(result);

//15.
x = 3 > 1;
y = 'abeja';
result = typeof x === 'boolean' && typeof y === 'string';
console.log(result);

//16.
x = 5;
y = '5';
result = x !== y && x === 5 && y == 5;
console.log(result);

//Ojito, !== indica que tienen que ser distintos en TIPO y VALOR, == indica que tienen que ser iguales únicamente en VALOR.

//17.
x = 3 > 5;
result = !x || (x && !y) || (y && x);
console.log(result);

//18.
x = 'Marquitos';
y = 'Marquitos';
result = y === x && y !== 'number' && x.length;
console.log(result);

/*Devuelve nueve en lugar de TRUE porque el último valor evaluado (x.length) es 'TRUTHY' y NO TRUE directamente.
Para que en estos caso devuelva TRUE debemos asegurarnos de que el Truthy no sea el último valor en ser evaluado por JS.

*Cuidado, en casos como x.length === 'number' dará false, si fuera typeof x.length === 'number' sí sería TRUE.
'number' 'boolean' o 'string' no dejan de ser de strings con valores específicos.*/

//19.
x = 5;
y = -2;
result = (!x && !y && x) || (y && x && x < 100 && y < 0);
console.log(result);

/*No podemos usar booleans para X e Y. Darían TRUE y no TRUTHY values pero JS al comparar un boolean con número, convierte
el valor del boolean a 1 para TRUE y 0 para FALSE y los compara. En este caso eso provocaría que y < 0 fuera FALSO.
Tenemos que hacer que X e Y sean TRUTHY values para que las dos últimas operaciones del segundo paréntesis sean verdaderamente
TRUE y JS devuelva un TRUE.*/

//20.
y = 5;
result = y !== '' && typeof y === 'number';
console.log(result);

//21. Nunca encontraremos una mayúscula en un texto normalizado a minúscula.
result = y.toLowerCase().includes('A');
console.log(result);

//22.
y = '';
result = y === '' && typeof y !== 'number';
console.log(result);

//23.
y = '';
result = !y && y !== false && y !== 0;
console.log(result);

/*Recapitulemos. Para que sea TRUE:
-Y tiene que ser FALSY O FALSE para cumplir la primera condición.
-Y tiene que ser FALSY, TRUTHY o TRUE para cumplir la segunda condición. Sí, para JS FALSY es distinto de FALSE.
-Y no puede ser el NÚMERO 0.
Debemos tomar un FALSY value que no sea 0, como por ejemplo: null, undefined, NaN, ''...

*-0 y 0 son tratados como equivalentes en JavaScript así que ese no valdría.

*Ojito cuando veamos una comparacion a TRUE o FALSE, siempre podemos abreviarla dejando la solo la variable o la
variable invertida.*/

//24.
x = 0;
result = typeof x == 'number' && !x;
console.log(result);

//Una inversión (!) delante de un TRUTHY O FALSY lo convierte en su contraparte real TRUE O FALSE.

//25.
x = 0.5;
y = 0.5;
//También puede ser x = '5'; y; O x = 2; y = 1;
result =
  (x === y && x < 1 && y > 0) ||
  (x === y && x > 1 && y < 0) ||
  (x !== y && x === y + 1) ||
  x == 5;
console.log(result);

//No te olvides de los DECIMALES.

//26.
x = 6;
y = 'ala';
result = x > 5 && y.length * 2 == x;
console.log(result);
