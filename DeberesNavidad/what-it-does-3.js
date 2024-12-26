/**
 * 1. Averigüa qué debería hacer esta función
 */
const MINUTE_IN_SECONDS = 60;
const HOUR_IN_SECONDS = MINUTE_IN_SECONDS * 60;
const DAY_IN_SECONDS = HOUR_IN_SECONDS * 24;

const getCountdownShapeFromSeconds = (seconds) => {
  if (!seconds) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(seconds / DAY_IN_SECONDS);
  const hours = Math.floor((seconds % DAY_IN_SECONDS) / HOUR_IN_SECONDS);

  return {
    days: days,
    hours: hours,
    minutes: Math.floor(seconds / HOUR_IN_SECONDS / MINUTE_IN_SECONDS),
    seconds: Math.floor(seconds % 60),
  };
};

console.log(getCountdownShapeFromSeconds(127400));

//La función debería devolver los segundos totales en días, horas, minutos y segundos. Pero falla al calcular los minutos porque la operación no es correcta.

/**
 * 2. La función no está funcionando bien, averigua qué está fallando y arréglalo.
 */

const getCountdownShapeFromSeconds2 = (seconds) => {
  if (!seconds) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  const days = Math.floor(seconds / DAY_IN_SECONDS);
  const hours = Math.floor((seconds % DAY_IN_SECONDS) / HOUR_IN_SECONDS);

  return {
    days: days,
    hours: hours,
    minutes: Math.floor((seconds % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS),
    seconds: Math.floor(seconds % 60),
  };
};

console.log(getCountdownShapeFromSeconds2(127400));

//La propiedad minutes del return final no estaba siendo calculada correctamente. '(seconds / HOUR_IN_SECONDS / MINUTE_IN_SECONDS)' divide los segundos totales entre las horas en segundos y luego entre los minutos en segundos, no tiene sentido. En nuestra solución: ((seconds % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS), el resto de 'seconds' entre 'HOUR_IN_SECONDS' son los segundos correspondientes a los minutos restantes tras saber el total de horas que representan los segundos totales. Al dividir ese valor entre minutes in seconds tenemos los minutos correctos.

/**
 * 3. Añade un parámetro a la función para que el usuario pueda elegir si quiere que salgan los días como horas.
 */

//Hagamos con ternarios en el ultimo return y un parametro predeclarado como en what it does 2.

const getCountdownShapeFromSeconds3 = (seconds, daysAsHours = false) => {
  if (typeof seconds !== 'number' || isNaN(seconds) || seconds < 0) {
    console.error(`Valor inválido: 'seconds' deben ser un número no negativo.`);
    return;
  }

  const result = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  if (seconds === 0) {
    return result;
  }

  result.days = daysAsHours ? Math.floor(seconds / DAY_IN_SECONDS) * 24 : Math.floor(seconds / DAY_IN_SECONDS);
  result.hours = Math.floor((seconds % DAY_IN_SECONDS) / HOUR_IN_SECONDS);
  result.minutes = Math.floor((seconds % HOUR_IN_SECONDS) / MINUTE_IN_SECONDS);
  result.seconds = Math.floor(seconds % 60);

  return result;
};

console.log(getCountdownShapeFromSeconds3(127400));
console.log(getCountdownShapeFromSeconds3(127400, true));
