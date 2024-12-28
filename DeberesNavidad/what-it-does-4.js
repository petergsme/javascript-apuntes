/*
 * 1. Averigua qué debería hacer esta función. Tip: tiene cosas que pueden o no pasarse
 */
const getCountdownFormatted = (params) => {
  const { days, hours, minutes, seconds } = params;

  const zeroPad = (value) => {
    if (value > 10) {
      return `0${value}`;
    }
    return value;
  };

  const getFormattedPadOrEmpty = (value) => {
    return value === 'undefined' ? '' : `${zeroPad(value)}:`;
  };

  const formattedDays = getFormattedPadOrEmpty(days);
  const formattedHours = getFormattedPadOrEmpty(hours);
  const formattedMinutes = getFormattedPadOrEmpty(minutes);

  return `${formattedDays}${formattedHours}${formattedMinutes}${zeroPad(seconds)}`;
};

console.log(getCountdownFormatted({ days: 5, hours: 22, minutes: 35, seconds: 18 }));

/*El propósito de la función es, partiendo de un objeto como parámetro que haga referencia a una fecha e incluya parte o todos los elementos que la componen devolver la fecha formateada correctamente. Debería poder pasarse sin parametros y devolver un resultado igualmente correcto. En su interior hay varios puntos importantes, algunos erróneos.

1.'const { days, hours, minutes, seconds } = params;' - Se trata de una cosa llamada desestructuración de objetos. Sirve para extraer las propiedades de un objeto y asignarlas a variables con sus mismos nombres. La ventaja es que, como puedes ver arriba, no necesitas llamar a las propiedades con params.propiedad, puedes escribir el nombre de la propiedad directamente. Es como si hubieras escrito:
const days = params.days;
const hours = params.hours;
...
Podrías asignar valores por defecto durante la desestructuración, así si params no tuviera alguna de las propiedades, las variables tendrían un valor predeterminado.

2.zeroPad intenta añadir un 0 al formateo de la fecha cuando el valor que comprueba es mayor que 10. Debería ser menor que 10, los números de dos dígitos no necesitan un 0 delante, los de un único digito sí.

3.getFormattedPadOrEmpty se intenta asegurar de que el valor es correcto y no es undefined, pero no funciona porque si comparas directamente una variable a undefined no puedes poner el undefined entre comillas. Si quieres realizar esa comparación deberas escribir typeof delante de tu variable.

4.En el return del final no se ha comprobado que los segundos no sean undefined, si lo son devolverá undefined en vez del espacio que devolverían los demás.
*/

/**
 * 2. Arregla los bugs de la función.
 */

const getCountdownFormatted2 = (params) => {
  const { days, hours, minutes, seconds } = params;

  const zeroPad = (value) => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };

  const getFormattedPadOrEmpty = (value) => {
    return !value ? '00' : zeroPad(value);
  };

  const formattedDays = getFormattedPadOrEmpty(days);
  const formattedHours = getFormattedPadOrEmpty(hours);
  const formattedMinutes = getFormattedPadOrEmpty(minutes);
  const formattedSeconds = getFormattedPadOrEmpty(seconds);

  return `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

console.log(getCountdownFormatted2({ days: 5, hours: 22, minutes: 35, seconds: 18 }));
console.log(getCountdownFormatted2({ days: 5, hours: 22 }));
console.log(getCountdownFormatted2({ days: 5, seconds: 22 }));
console.log(getCountdownFormatted2({ hours: 5, seconds: 22 }));

/*Arreglados los errores descritos arriba.

Ahora zeroPad se ejecuta cuando el valor es menor a 10, correcto.

getFormattedPadOrEmpty no necesitaba comparar value con undefined. Como undefined ya es un valor FALSY puedes poner value directamente para comprobar que es un valor truthy lo que excluiría los undefined, null, 0, strings vacios... (le metemos la exclamación porque así comprobamos si es falsy, en caso de serlo mete dos 00 y en caso opuesto mete el valor que tenga tras ejecutar zeroPad).

Hemos quitado los dos puntos del ternario porque los seconds, que antes no se comprobaba si tenían un valor válido, reciben ahora el mismo tratamiento que sus compañeros y si los dos puntos siguieran ahi, aparecerían al final del formateo.
*/

//Manera adicional de hacerlo, modificación de la de arriba:

const getCountdownFormatted3 = (params) => {
  const { days = 0, hours = 0, minutes = 0, seconds = 0 } = params;

  const zeroPad = (value) => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };

  const formattedDays = zeroPad(days);
  const formattedHours = zeroPad(hours);
  const formattedMinutes = zeroPad(minutes);
  const formattedSeconds = zeroPad(seconds);

  return `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

console.log(getCountdownFormatted3({ days: 5, hours: 22, minutes: 35, seconds: 18 }));
console.log(getCountdownFormatted3({ days: 5, hours: 22, minutes: undefined }));
console.log(getCountdownFormatted3({ days: 5, seconds: 22 }));
console.log(getCountdownFormatted3({ hours: 5, seconds: 22 }));

//El objeto desestructurado tiene valores por defecto en caso de que el valor que pasemos al parámetro no lo tenga. Esto hace innecesario necesitar los dos 0 en el ternario, ya que al ser 0 el valor por defecto < 10 zeroPad siempre le añadirá el otro cero. Sin embargo esto obliga a volver al boolean original de la condición del ternario porque si usamos el propio valor como condición el 0 por defecto será tomado como falsy y no se ejecutaría zeroPad.

//Eliminamos getformattedPadOrEmpty porque si predeclaramos los valores a 0 en caso de no tener valor, nunca serán undefined.

/**
 * 3. Añádele un parámetro para que los días vayan en horas.
 */

const getCountdownFormatted4 = (params, daysAsHours = false) => {
  const { days = 0, hours = 0, minutes = 0, seconds = 0 } = params;

  const zeroPad = (value) => {
    if (value < 10) {
      return `0${value}`;
    }
    return value;
  };

  const totalhours = daysAsHours ? hours + days * 24 : zeroPad(hours);

  const formattedDays = daysAsHours ? '00' : zeroPad(days);
  const formattedHours = totalhours;
  const formattedMinutes = zeroPad(minutes);
  const formattedSeconds = zeroPad(seconds);

  return `${formattedDays}:${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
};

console.log(getCountdownFormatted4({ days: 5, hours: 22, minutes: 35, seconds: 18 }, true));
console.log(getCountdownFormatted4({ days: 5, hours: 22 }));
console.log(getCountdownFormatted4({ days: 5, seconds: 22 }, true));
console.log(getCountdownFormatted4({ hours: 5, seconds: 22 }));
