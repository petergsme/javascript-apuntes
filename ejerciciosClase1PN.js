//Repaso previo de los métodos de arrays y como identificar sobre lo que se está operando.
const greetings = (names) => {
  return names.split(' ').forEach((name) => {
    console.log(`¡Hola ${name}!`);
  });
};

greetings('pepe juana banesa');

//Deberes de fechas.
/**
 * 1. Crea una función que sume un número de días a una fecha.
 */

const sumDays = (date, numDays) => {
  const numDaysInMs = numDays * 24 * 60 * 60 * 1000;

  return new Date(date.getTime() + numDaysInMs).toLocaleString();
};

const dateToTry = new Date();

console.log(sumDays(dateToTry, 8));

/**
 * 2. Crea una función que reste un número de días a una fecha.
 */

const minusDays = (date, numDays) => {
  const numDaysInMs = numDays * 24 * 60 * 60 * 1000;

  return new Date(date.getTime() - numDaysInMs).toLocaleString();
};

const dateToTry2 = new Date();

console.log(minusDays(dateToTry2, 8));

/**
 * 3. Modifica la función del ejercicio 1 para que sea más genérica y que permita sumar días, horas, minutos o segundos
 */

const sumTime = (date, time, unitToSum) => {
  const unitNormalize = unitToSum.toLowerCase();
  let timeInMs = time * 24 * 60 * 60 * 1000;

  if (unitNormalize === 'h') {
    timeInMs = time * 60 * 60 * 1000;
  }
  if (unitNormalize === 'min') {
    timeInMs = time * 60 * 1000;
  }
  if (unitNormalize === 's') {
    timeInMs = time * 1000;
  }

  return new Date(date.getTime() + timeInMs).toLocaleString();
};

const dateToTry3 = new Date();

console.log(sumTime(dateToTry3, 8, 'd'));
console.log(sumTime(dateToTry3, 8, 'h'));
console.log(sumTime(dateToTry3, 8, 'min'));
console.log(sumTime(dateToTry3, 8, 's'));

/**
 * 4.  Modifica la función del ejercicio 2 para que sea más genérica y que permita restar días, horas, minutos o segundos
 */

const minusTime = (date, time, unitToSum) => {
  const unitNormalize = unitToSum.toLowerCase();
  let timeInMs = time * 24 * 60 * 60 * 1000;

  if (unitNormalize === 'h') {
    timeInMs = time * 60 * 60 * 1000;
  }
  if (unitNormalize === 'min') {
    timeInMs = time * 60 * 1000;
  }
  if (unitNormalize === 's') {
    timeInMs = time * 1000;
  }

  return new Date(date.getTime() - timeInMs).toLocaleString();
};

const dateToTry4 = new Date();

console.log(minusTime(dateToTry4, 12, 'd'));
console.log(minusTime(dateToTry4, 8, 'h'));
console.log(minusTime(dateToTry4, 45, 'min'));
console.log(minusTime(dateToTry4, 98, 's'));

/**
 * 5. Crea una función que compruebe si una fecha está entre otras dos fechas.
 */

const isBetweenDates = (firstDate, middleDate, lastDate) => {
  return middleDate > firstDate && middleDate < lastDate;
};

const dateToTry5 = new Date('2025-01-11T14:02:00.000Z'); //año 2025, mes 1(enero), día 11, 14:02.
const dateToTry6 = new Date(2025, 0, 11, 16); //año 2025, mes 0 (enero), día 11, 16:00.
const dateToTry7 = new Date('01/12/25'); //enero, día 12, año 2025.

console.log(isBetweenDates(dateToTry5, dateToTry6, dateToTry7));
console.log(isBetweenDates(dateToTry6, dateToTry5, dateToTry7));

/**
 * 6. Crea una función que devuelva cuánto tiempo ha pasado desde una fecha y la fecha actual en días, horas, minutos y segundos.
 * Por ejemplo debe devolver un string que sea, "han pasado 2 días, 4 horas, 2 minutos y 1 segundos desde [FECHA_INTRODUCIDA]}"
 *
 */

const SECONDS_IN_MILLISECONDS = 1000;
const MINUTES_IN_MILLISECONDS = SECONDS_IN_MILLISECONDS * 60;
const HOURS_IN_MILLISECONDS = MINUTES_IN_MILLISECONDS * 60;
const DAYS_IN_MILLISECONDS = HOURS_IN_MILLISECONDS * 24;

const timePassed = (fromDate, disableOutput = {}) => {
  //Es importante predeclarar disableOutput como objeto para que tenga un valor y pueda usarse la desestructuración del objeto. En caso contrario, cuando no pasáramos ningún parametro en su lugar sería undefined y no nos permitiría aplicar sobre él la desestructuración.

  if (fromDate > new Date()) {
    return 'Esa fecha no ha llegado aún.';
  }

  const { days = true, hours = true, minutes = true, seconds = true } = disableOutput;

  const timeBetweenThenAndNow = Date.now() - fromDate.getTime();

  const day = days ? Math.floor(timeBetweenThenAndNow / DAYS_IN_MILLISECONDS) : 0;
  let leftTime = days ? timeBetweenThenAndNow % DAYS_IN_MILLISECONDS : timeBetweenThenAndNow;

  const hour = hours ? Math.floor(leftTime / HOURS_IN_MILLISECONDS) : 0;
  leftTime = hours ? leftTime % HOURS_IN_MILLISECONDS : leftTime;

  const min = minutes ? Math.floor(leftTime / MINUTES_IN_MILLISECONDS) : 0;
  leftTime = minutes ? leftTime % HOURS_IN_MILLISECONDS : leftTime;

  const sec = seconds ? Math.floor(leftTime / SECONDS_IN_MILLISECONDS) : 0;

  const dayText = days && timeBetweenThenAndNow >= DAYS_IN_MILLISECONDS ? ` ${day} días,` : '';
  const hourText = hours && timeBetweenThenAndNow >= HOURS_IN_MILLISECONDS ? ` ${hour} horas,` : '';
  const minText = minutes && timeBetweenThenAndNow >= MINUTES_IN_MILLISECONDS ? ` ${min} minutos` : '';
  const secText = seconds && timeBetweenThenAndNow >= 1000 ? ` ${sec} segundos` : '';

  const connectSentence = minText && secText ? ' y' : '';

  const sameTime = timeBetweenThenAndNow === 0 ? ' nada, estás comparando las mismas horas' : '';

  return `Desde ${fromDate.toLocaleString()} hasta ahora, han pasado:${days ? dayText : ''}${hours ? hourText : ''}${
    minutes ? minText : ''
  }${seconds ? connectSentence : ''}${seconds ? secText : ''}${sameTime}.`;
};

console.log('normal', timePassed(new Date(Date.now() - DAYS_IN_MILLISECONDS)));
console.log('sin dias', timePassed(new Date(Date.now() - DAYS_IN_MILLISECONDS), { days: false }));
console.log(
  'sin dias ni minutos',
  timePassed(new Date(Date.now() - DAYS_IN_MILLISECONDS), { days: false, hours: false })
);
console.log(
  'solo segundos',
  timePassed(new Date(Date.now() - DAYS_IN_MILLISECONDS), { days: false, hours: false, minutes: false })
);
console.log(
  'sin nada',
  timePassed(new Date(Date.now() - DAYS_IN_MILLISECONDS), { days: false, hours: false, minutes: false, seconds: false })
);
console.log(
  'con dias y minutos',
  timePassed(new Date(Date.now() - DAYS_IN_MILLISECONDS - 80000), {
    days: true,
    hours: false,
    minutes: true,
    seconds: false,
  })
);

/**
 * 7. Si no lo has hecho, modifica la función anterior para que no salga la información que no sea relevante. Por ejemplo, si solo han pasado
 * 10 segundos, no debería decir ni los días, las horas ni los minutos.
 */

//Hecho.

/**
 * 8. Modifica la función anterior para que se le pueda pasar un objeto que permita desactivar los días, las horas, los minutos o los segundos
 * Por ejemplo, si le paso { days: false, hours: false } la función debe devolver solo los minutos y los segundos que han pasado.
 */

//Vamos a ello. Hecho.

/**
 * 9. Crea una función como la anterior, pero que indique cuánto tiempo queda para una fecha específica.
 */

//Debería ser como el de arriba, demasiado chungo. Pero ahí está.

const timeUntil = (toDate, disableOutput = {}) => {
  const { days = true, hours = true, minutes = true, seconds = true } = disableOutput;

  const dateNow = new Date();
  const timeBetweenThenAndNow = toDate.getTime() - dateNow.getTime();

  if (toDate < dateNow) {
    return 'Esa fecha ya llegó, y se fue.';
  }

  const day = Math.floor(timeBetweenThenAndNow / DAYS_IN_MILLISECONDS);
  const hour = Math.floor((timeBetweenThenAndNow % DAYS_IN_MILLISECONDS) / HOURS_IN_MILLISECONDS);
  const min = Math.floor((timeBetweenThenAndNow % HOURS_IN_MILLISECONDS) / MINUTES_IN_MILLISECONDS);
  const sec = Math.floor((timeBetweenThenAndNow / SECONDS_IN_MILLISECONDS) % 60);

  const dayText = day !== 0 ? ` ${day} días,` : '';
  const hourText = hour !== 0 ? ` ${hour} horas,` : '';
  const minText = min !== 0 ? ` ${min} minutos` : '';
  const secText = sec !== 0 ? ` ${sec} segundos` : '';

  const connectSentence = minText && secText ? ' y' : '';

  const sameTime = timeBetweenThenAndNow === 0 ? ' nada, estás comparando las mismas horas' : '';

  return `Desde ahora hasta ${toDate.toLocaleString()} pasarán:${days ? dayText : ''}${hours ? hourText : ''}${
    minutes ? minText : ''
  }${seconds ? connectSentence : ''}${seconds ? secText : ''}${sameTime}.`;
};

const dateToTry10 = new Date('2026-05-23T01:02:45.000Z');
const dateToTry11 = new Date('2022-01-11T15:02:45.000Z');

console.log(timeUntil(new Date()));
console.log(timeUntil(dateToTry10));
console.log(timeUntil(dateToTry11));
console.log(timeUntil(dateToTry10, { days: false, hours: false }));

/**
 * 10. Dado el array de ejemplo que pongo, haz una función que filtre las tareas completadas el 9 de enero durante todo el día
 */

const tasks = [
  {
    text: 'Hacer la compra',
    completed: true,
    completedAt: '2025-01-10T15:54:40.088Z',
  },
  {
    text: 'Ir a clase',
    completed: true,
    completedAt: '2025-01-09T15:00:40.088Z',
  },
  {
    text: 'Comer a clase',
    completed: true,
    completedAt: '2025-01-09T14:00:40.088Z',
  },
  {
    text: 'Repasar javascript',
    completed: false,
  },
];

const tasksDoneJanuary9 = (tasks) => {
  const startOfDay = new Date('2025-01-09T00:00:00.000Z');
  const endOfDay = new Date('2025-01-10T00:00:00.000Z');

  return tasks.filter((task) => {
    return isBetweenDates(startOfDay, new Date(task.completedAt), endOfDay);
  });
};

console.log(tasksDoneJanuary9(tasks));
