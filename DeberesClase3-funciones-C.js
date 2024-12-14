/*
  1. Crear una función que me diga si un número está entre 0 y 10 
   => utilizar un return;
*/

function isBetweenZeroAndTen(num) {
  if (num > 0 && num < 10) {
    return `El número ${num} está entre 0 y 10.`;
  } else if (num === 0) {
    return 'El número es 0.';
  } else if (num === 10) {
    return 'El número es 10.';
  }

  return `No, ${num} no está entre 0 y 10.`;
}

console.log(isBetweenZeroAndTen(0));
console.log(isBetweenZeroAndTen(4));
console.log(isBetweenZeroAndTen(10));
console.log(isBetweenZeroAndTen(23));

/*
  2. Crea una función que me diga si un parámetro es de tipo cadena de texto o número.
*/

const isItStringOrNumber = (numOrString) => {
  if (typeof numOrString === 'string') {
    return `El tipo de tu variable es 'string'`;
  } else if (typeof numOrString === 'number') {
    return `El tipo de tu variable es 'number'`;
  }

  return `No, ${numOrString} no es ni 'string' ni 'number'`;
};

console.log(isItStringOrNumber('pepe'));
console.log(isItStringOrNumber('5'));
console.log(isItStringOrNumber(5));
console.log(isItStringOrNumber(null));
console.log(isItStringOrNumber(3 > 2));

/*
  3. Crea una función que me diga si una cadena de texto tiene el valor 'pending'. Debe ser case insensitive, es decir,
  me dirá "true" en todas las variantes mayúsculas/minúsculas de este texto: 'Pending', 'PEnding', 'PeNdIng', etc.
*/

const isStringPending = (couldBePending) => {
  return (
    typeof couldBePending === 'string' &&
    couldBePending.toLowerCase() === 'pending'
  );
};

/*Arriba ponía: return typeof couldBePending === 'string' && couldBePending.toLowerCase() === 'pending';
Pero por algún motivo al guardar me cambia el Formatting*/

console.log(isStringPending('Pending'));
console.log(isStringPending('PEnding'));
console.log(isStringPending('PeNdIng'));
console.log(isStringPending('agupendingacate'));
console.log(isStringPending(2));
console.log(isStringPending(true));

/*
  4. Crea una función que simule una compra con tarjeta de crédito. Tendrá tres parámetros: 
    - El precio del producto
    - El dinero gastado este mes
    - El límite mensual
  Si me queda dinero suficiente para comprar el producto, la función debe devolver el dinero gastado este
  mes incluyendo el precio del producto. Si no puedo comprar el producto pq el dinero no me da, debe escribir 
  en pantalla un mensaje diciendo que no se puede comprar por llegar al límite mensual.
*/

function creditCard(price, spent, limit) {
  if (
    typeof price !== 'number' ||
    typeof spent !== 'number' ||
    typeof limit !== 'number'
  ) {
    return 'Ese valor debería ser un número';
  } else if (price + spent <= limit) {
    return `Su gasto mensual ha sido de: ${price + spent} euros.`;
  }
  return `No puede comprar este producto, su tarjeta ha alcanzado el límite mensual de ${limit} euros.`;
}

console.log(creditCard(1000, 250, 3000));
console.log(creditCard(3000, 250, 1000));
console.log(creditCard('banana', 250, 1000));
console.log(creditCard(34, true, 1000));
console.log(creditCard(34, '98', 1000));
console.log(creditCard(34, NaN, 1000));

/*
  5. Crea una función que indique si un número es par o impar.
*/

function isItOddOrEven(num) {
  if (typeof num !== 'number' || isNaN(num)) {
    return 'Por favor, introduce un valor numérico válido';
  } else if (num % 2 === 0) {
    return `${num} es par.`;
  }
  return `${num} es impar.`;
}

console.log(isItOddOrEven(0));
console.log(isItOddOrEven(5));
console.log(isItOddOrEven(-5));
console.log(isItOddOrEven(26));
console.log(isItOddOrEven(NaN));
console.log(isItOddOrEven(true));
console.log(isItOddOrEven('7'));
console.log(isItOddOrEven('siete'));

/*
  6. Crea una función que indique el mayor de dos números
*/

function getMaxNumber(num1, num2) {
  if (
    typeof num1 !== 'number' ||
    isNaN(num1) ||
    typeof num2 !== 'number' ||
    isNaN(num2)
  ) {
    return 'Por favor, introduce valores numéricos válidos.';
  } else if (num1 === num2) {
    return 'Los dos números son iguales';
  } else if (num1 > num2) {
    return num1;
  }
  return num2;
}

console.log(getMaxNumber(1, 7));
console.log(getMaxNumber(-6, -12));
console.log(getMaxNumber(0, 0));
console.log(getMaxNumber(1.66, 1.65));
console.log(getMaxNumber(NaN, 5));
console.log(getMaxNumber(false, 7));
console.log(getMaxNumber('1', 5));
console.log(getMaxNumber('uno', 7));

/*
  7. Crea una función que indique el mayor de tres números
*/

const getMaxNumber2 = (num1, num2, num3) => {
  if (typeof num1 !== 'number' || isNaN(num1)) {
    return 'Por favor, introduce valores numéricos válidos.';
  } else if (num1 === num2 && num2 === num3) {
    return 'Los tres números son iguales';
  } else if (num1 > getMaxNumber(num2, num3)) {
    return num1;
  } else if (getMaxNumber(num2, num3) === 'Los dos números son iguales') {
    return num2;
  }
  return getMaxNumber(num2, num3);
};

console.log(getMaxNumber2(-9, -34, -127));
console.log(getMaxNumber2(5, 5, 5));
console.log(getMaxNumber2(NaN, 8, 5));
console.log(getMaxNumber2(6, NaN, 5));
console.log(getMaxNumber2(0, 5, 5));

/*
  8. Crea una función que, dados dos edades, te diga cuántos años hay entre ellas
*/

function distanceBetweenAges(age1, age2) {
  if (
    typeof age1 !== 'number' ||
    isNaN(age1) ||
    age1 < 0 ||
    typeof age2 !== 'number' ||
    isNaN(age2) ||
    age2 < 0
  ) {
    return `Introduce valores numéricos válidos.`;
  } else if (age1 === age2) {
    return `Tienen la misma edad.`;
  }
  return `La diferencia de edad es de ${Math.abs(age1 - age2)} años.`;
}

console.log(distanceBetweenAges(57.5, 42));
console.log(distanceBetweenAges(42, 57.87));
console.log(distanceBetweenAges(31, 31));
console.log(distanceBetweenAges(-57, 42));
console.log(distanceBetweenAges(NaN, 42));

/*
 9. Crea una función que al pasarle la nota de un examen (de 0 a 10) te devuelva la nota: suspenso, aprobado, bien, 
 notable o sobresaliente.
*/

const examMark = (mark) => {
  if (typeof mark !== 'number' || isNaN(mark) || mark < 0 || mark > 10) {
    return `Introduce valores numéricos válidos.`;
  } else if (mark >= 5 && mark < 6) {
    return `Tu nota es un ${mark}, has aprobado por los pelos.`;
  } else if (mark >= 6 && mark < 7) {
    return `Tu ${mark} está bien, pero puedes trabajar más.`;
  } else if (mark >= 7 && mark < 9) {
    return `Bien hecho, tu ${mark} es un notable.`;
  } else if (mark >= 9) {
    return `Enhorabuena por tu ${mark}, es un sobresaliente.`;
  }
  return `Tu ${mark} es un suspenso, alguien va a pasar el verano estudiando este año.`;
};

/*Se podría haber hecho sin entre 6 y 7, empezando desde 9 hacia abajo. O al reves y haciendo los menores (si menor que 5 suspenso, si menor que 6 aprobado, si menor que 7 bien...)
else if (mark >= 9) {
    return `Enhorabuena por tu ${mark}, es un sobresaliente.`;
  } else if (mark >= 7) {
    return `Bien hecho, tu ${mark} es un notable.`;
  } else if (mark >= 6) {
    return `Tu ${mark} está bien, pero puedes trabajar más.`;
  } else if (mark >= 5) {
    return `Tu nota es un ${mark}, has aprobado por los pelos.`;
  }
*/

console.log(examMark(3));
console.log(examMark(5.23));
console.log(examMark(6.75));
console.log(examMark(7.8));
console.log(examMark(9.9));
console.log(examMark(NaN));
console.log(examMark(-4));
console.log(examMark(10.1));

/*
  10. Comprueba si dado un mes(Enero, Febrero...) y un día del mes (del 1 al 31), estamos en otoño, invierno, primavera o verano. 
*/

function whatSeasonNorthHem2025Es(month, day) {
  if (
    typeof month !== 'string' ||
    (month.toLowerCase() !== 'enero' &&
    month.toLowerCase() !== 'febrero' &&
    month.toLowerCase() !== 'marzo' &&
    month.toLowerCase() !== 'abril' &&
    month.toLowerCase() !== 'mayo' &&
    month.toLowerCase() !== 'junio' &&
    month.toLowerCase() !== 'julio' &&
    month.toLowerCase() !== 'agosto' &&
    month.toLowerCase() !== 'septiembre' &&
    month.toLowerCase() !== 'octubre' &&
    month.toLowerCase() !== 'noviembre' &&
    month.toLowerCase() !== 'diciembre')
  ) {
    return 'Introduce un mes válido.';
  } else if (
    typeof day !== 'number' || isNaN(day) ||
    (month.toLowerCase() === 'enero' && day > 31) ||
    (month.toLowerCase() === 'febrero' && day > 28) ||
    (month.toLowerCase() === 'marzo' && day > 31) ||
    (month.toLowerCase() === 'abril' && day > 30) ||
    (month.toLowerCase() === 'mayo' && day > 31) ||
    (month.toLowerCase() === 'junio' && day > 30) ||
    (month.toLowerCase() === 'julio' && day > 31) ||
    (month.toLowerCase() === 'agosto' && day > 31) ||
    (month.toLowerCase() === 'septiembre' && day > 30) ||
    (month.toLowerCase() === 'octubre' && day > 31) ||
    (month.toLowerCase() === 'noviembre' && day > 30) ||
    (month.toLowerCase() === 'diciembre' && day > 31)
  ) {
    return `No has introducido un día válido para ${month.toLowerCase()}.`;
  } else if (
    (month.toLowerCase() === 'marzo' && day >= 20.375) ||
    month.toLowerCase() === 'abril' ||
    month.toLowerCase() === 'mayo' ||
    (month.toLowerCase() === 'junio' && day < 21.113)
  ) {
    return `El ${Math.floor(
      day
    )} de ${month.toLowerCase()} estaremos en primavera.`;
  } else if (
    month.toLowerCase() === 'junio' ||
    month.toLowerCase() === 'julio' ||
    month.toLowerCase() === 'agosto' ||
    (month.toLowerCase() === 'septiembre' && day < 22.763)
  ) {
    return `El ${Math.floor(
      day
    )} de ${month.toLowerCase()} estaremos en verano.`;
  } else if (
    month.toLowerCase() === 'septiembre' ||
    month.toLowerCase() === 'octubre' ||
    month.toLowerCase() === 'noviembre' ||
    (month.toLowerCase() === 'diciembre' && day < 21.626)
  ) {
    return `El ${Math.floor(
      day
    )} de ${month.toLowerCase()} estaremos en otoño.`;
  }
  return `El ${Math.floor(day)} de ${month.toLowerCase()} estaremos en invierno.`;
}

console.log(whatSeasonNorthHem2025Es('aBRil', 25));
console.log(whatSeasonNorthHem2025Es('AGOSTO', 25));
console.log(whatSeasonNorthHem2025Es('Octubre', 25.5));
console.log(whatSeasonNorthHem2025Es('enEro', 25));
console.log(whatSeasonNorthHem2025Es('ñoñiembre', 25));
console.log(whatSeasonNorthHem2025Es('febrero', 30));
console.log(whatSeasonNorthHem2025Es(true, 30));
console.log(whatSeasonNorthHem2025Es('febrero', NaN));
console.log(whatSeasonNorthHem2025Es('febrero', '9'));

//No se me va a olvidar, pero los decimales representan la hora exacta a la que comienza ese día la estación.
//Hemos cambiado que antes ponia 'marzo' && day >= 20.375' porque si en el anterior if ya comprueba que el día sea menor a 20.375 entonces no hace falta comprobar que sea mayor en el siguiente tramo. Será mayor por cojones porque si no habria entrado en el anterior.Además podemos eliminar el tramo del invierno que ya esta definido por exclusion coño.

/*
  Crea una función que categorice vehículos en función de sus características. Tendrá tres parámetros: 
    - El número de ruedas
    - El tipo de motor, debe ser gasolina, electrico o manual
    - Si tiene pedales o no

  Esta función debe devolver 'coche', 'moto', 'patinete', 'bicicleta' o 'desconocido':
  - Los coches tienen 4 ruedas, no tienen pedales y pueden ser eléctricos o de gasolina.
  - Las motos solo tienen 2 ruedas, pueden ser de gasolina y no tienen pedales
  - Las bicicletas solo tienen 2 ruedas y pueden ser eléctricas o manuales y tienen pedales.
  - Los patinetes solo tienen 2 ruedas, pueden ser eléctricos o manuales y no tienen pedales.
  - En cualquier otro caso devuelve desconocido.
*/

function isWhatVehicle(numWheels, motorType, pedals) {
  if (typeof numWheels !== 'number' || isNaN(numWheels)) {
    return 'Has introducido un valor erróneo en el parámetro referente al número de ruedas.';
  } else if (typeof motorType !== 'string') {
    return 'Has introducido un valor erróneo en el parámetro referente al motor.';
  } else if (typeof pedals !== 'boolean') {
    return 'Has introducido un valor erróneo en el parámetro referente a los pedales.';
  } else if (
    numWheels === 4 &&
    !pedals &&
    (motorType.toLowerCase() === 'gasolina' || motorType.toLowerCase() === 'eléctrico')
  ) {
    return 'coche';
  } else if (
    numWheels === 2 &&
    !pedals &&
    motorType.toLowerCase() === 'gasolina'
  ) {
    return 'moto';
  } else if (
    numWheels === 2 &&
    pedals &&
    (motorType.toLowerCase() === 'eléctrico' || motorType.toLowerCase() === 'manual')
  ) {
    return 'bicicleta';
  } else if (
    numWheels === 2 &&
    !pedals &&
    (motorType.toLowerCase() === 'eléctrico' || motorType.toLowerCase() === 'manual')
  ) {
    return 'patinete';
  }
  return 'desconocido';
}

console.log(isWhatVehicle('4', 'eléctrico', false));
console.log(isWhatVehicle(4, true, false));
console.log(isWhatVehicle(4, 'eléctrico', 5));
console.log(isWhatVehicle(4, 'eléctrico', false));
console.log(isWhatVehicle(4, 'gasolina', false));
console.log(isWhatVehicle(2, 'gasolina', false));
console.log(isWhatVehicle(2, 'manual', true));
console.log(isWhatVehicle(2, 'eléctrico', true));
console.log(isWhatVehicle(2, 'manual', false));
console.log(isWhatVehicle(2, 'eléctrico', false));

console.log('robertomihaiflorea'.length);

const fruits = ['melón']
fruits.splice(2, 1)
//Recuerda .length no necesita paréntesis.
