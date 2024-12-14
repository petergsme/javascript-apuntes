//let month = 6;
let monthName;

if (month === 1) {
  monthName = 'Enero';
} else if (month === 2) {
  monthName = 'Febrero';
} else if (month === 3) {
  monthName = 'Marzo';
} else if (month === 4) {
  monthName = 'Abril';
} else if (month === 5) {
  monthName = 'Mayo';
} else if (month === 6) {
  monthName = 'Junio';
} else if (month === 7) {
  monthName = 'Julio';
} else if (month === 8) {
  monthName = 'Agosto';
} else if (month === 9) {
  monthName = 'Septiembre';
} else if (month === 10) {
  monthName = 'Octubre';
} else if (month === 11) {
  monthName = 'Noviembre';
} else if (month === 12) {
  monthName = 'Diciembre';
} else if (month > 12) {
  console.log('Eso no es un mes');
}

console.log(monthName);

//Ahora convertimos lo de arriba en una función.

function whatMonthIs(month1) {
  if (month1 === 1) {
    return 'Enero';
  } else if (month1 === 2) {
    return 'Febrero';
  } else if (month1 === 3) {
    return 'Marzo';
  } else if (month1 === 4) {
    return 'Abril';
  } else if (month1 === 5) {
    return 'Mayo';
  } else if (month1 === 6) {
    return 'Junio';
  } else if (month1 === 7) {
    return 'Julio';
  } else if (month1 === 8) {
    return 'Agosto';
  } else if (month1 === 9) {
    return 'Septiembre';
  } else if (month1 === 10) {
    return 'Octubre';
  } else if (month1 === 11) {
    return 'Noviembre';
  } else if (month1 === 12) {
    return 'Diciembre';
  } else if (month1 > 12) {
    return 'Eso no es un mes';
  }
}

let month;

month = 1;
console.log(whatMonthIs(month));

month = 2;
console.log(whatMonthIs(month));

month = 3;
console.log(whatMonthIs(month));

month = 4;
console.log(whatMonthIs(month));

month = 5;
console.log(whatMonthIs(month));

month = 6;
console.log(whatMonthIs(month));

month = 7;
console.log(whatMonthIs(month));

month = 8;
console.log(whatMonthIs(month));

month = 9;
console.log(whatMonthIs(month));

month = 10;
console.log(whatMonthIs(month));

month = 11;
console.log(whatMonthIs(month));

month = 12;
console.log(whatMonthIs(month));

month = 13;
console.log(whatMonthIs(month));
