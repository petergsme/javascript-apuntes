/**
 * Gutufasio está programando un carrito de la compra y está pensando en como modelar los objetos.
 * Imagina que en el carrito de la compra hay los siguientes elementos:
 *  7 botellas de agua - 700€
 *  2 bolsas de palomitas: 255.5€
 *  1 kg de azúcar: 1000€
 *  728 panes de hamburguesa: 928€
 *  28 kg de tofu ahumado: 2223€
 * Escribe un array para representar esa información.
 */

const shoppingList = [
  { name: 'botella de agua', quantity: 7, priceBeforeTaxes: 700 },
  { name: 'bolsa de palomitas', quantity: 2, priceBeforeTaxes: 255.5 },
  { name: 'kg de azucar', quantity: 1, priceBeforeTaxes: 1000 },
  { name: 'pan de hamburguesa', quantity: 728, priceBeforeTaxes: 928 },
  { name: 'kg de tofu ahumado', quantity: 28, priceBeforeTaxes: 2223 },
];

//Atento a como escribimos los objetos de azucar y tofu, que son ligeramente diferentes.
//Al haber un quantity es mejor poner el precio por unidad antes que el precio total.

/**
 * Al carrito vamos a aplicarle los impuestos.
 * Los impuestos dependerán del país. Gutufasio no sabe mucho de esto y lo único que sabe es que en España
 * los impuestos son el 21%, salvo en Ceuta, Melilla y Canarias, que no hay impuestos.
 *
 * Además, Gutufasio es UX, así que ha decidido poner en la interfaz los impuestos de cada elemento del array
 * por lo que necesita que en el array, cada elemento tenga, además de su precio, el impuesto.
 *
 * Crea una función que se llame calculateTaxes, que acepte dos parámetros de entrada:
 * - country
 * - state
 * La función debe devolver un nuevo array incluyendo el precio con impuestos y el precio total para cada elemento.
 */

const calculeTaxes = (country, state, shoppingCart) => {
  const validStates = [
    'andalucía',
    'aragón',
    'asturias',
    'baleares',
    'canarias',
    'cantabria',
    'castilla-la mancha',
    'castilla y león',
    'cataluña',
    'ceuta',
    'comunidad valenciana',
    'extremadura',
    'galicia',
    'la rioja',
    'madrid',
    'melilla',
    'murcia',
    'navarra',
    'país vasco',
  ];

  const specialStates = ['ceuta', 'melilla', 'canarias'];

  if (country.toLowerCase() !== 'spain' || country.toLowerCase() !== 'españa') {
    return `Esta herramienta únicamente calcula los impuestos de un carrito de la compra español.`;
  }

  if (!validStates.includes(state.toLowerCase())) {
    return `Introduce una comunidad correcta.`;
  }

  return shoppingCart.map((product) => {
    return {
      ...product,
      taxesInEuros: specialStates.includes(state.toLowerCase()) ? 0 : product.priceBeforeTaxes * 0.21,
      priceAfterTaxes: specialStates.includes(state.toLowerCase())
        ? product.priceBeforeTaxes
        : product.priceBeforeTaxes * 1.21,
    };
  });
};

console.log(calculeTaxes('españa', 'andalucía', shoppingList));
console.log(calculeTaxes('españa', 'ceuta', shoppingList));

//No es necesario almacenar el resultado del método .map() en una variable si tu intención es simplemente devolverlo. El método .map() genera un nuevo array sin modificar el original, por lo que puedes devolverlo directamente dentro de la función. Esa variable se considera una variable intermedia, y solo vale la pena guardarla si vas a hacer uso de ella de nuevo dentro de la función o por ser considerado una buena práctica.

//Si usas una arrow function y el cuerpo de la función está en una sola línea, puedes omitir la palabra clave return y las llaves {}. Esto se llama RETURN IMPLÍCITO.
/*
const shoppingCartTaxes = shoppingCart.map((product) => ({
  ...product,
  taxesInEuros: specialStates.includes(state.toLowerCase()) ? 'Exento.' : product.totalPriceEuro * 0.21,
}));
*/

/**
 * Gutufasio quiere añadir cupones, porque total, como cobra la botella de agua a 100€, pues se lo puede permitir.
 *
 * Los cupones tienen 3 propiedades:
 * - El código del cupón
 * - El porcentage de descuento que tiene
 * - El mínimo de dinero que tiene que costar el carrito de la compra sin impuestos, para que el cupón aplique
 *
 * Los cupones válidos serán:
 *  GUTUFACIO10, ROBUSTIO20, LOSORNITORRINCOSMOLANUNHUEVO50
 *  Los porcentajes de descuento son 10, 20 y 50 respectivamente, y las cantidades mínimas para que funcionen son
 *  1000€, 20€ y 5000€
 *
 * Como ya hemos dicho, Gutufacio le gusta poner toda la información en la interfaz, y quiere poner el precio original de cada
 * elemento y el precio después de aplicar el cupón.
 *
 * La función para comprobar y aplicar un cupón de descuento se llamará applyCoupon y tendrá dos parámetros:
 *  - El cupón de descuento
 *  - El array con el carrito de la compra
 * La función debe devolver el nuevo carrito con el cupón aplicado si es válido
 *
 * Nota, el descuento se aplica sobre el precio sin impuestos. Los impuestos se calculan sobre el precio base.
 */

const discount = [
  { code: 'GUTUFACIO10', discount: 0.1, appliesAboveEur: 1000 },
  { code: 'ROBUSTIO20', discount: 0.2, appliesAboveEur: 20 },
  { code: 'LOSORNITORRINCOSMOLANUNHUEVO50', discount: 0.5, appliesAboveEur: 5000 },
];

const applyCoupon = (coupon, shoppingCart) => {
  const isWhichCoupon = discount.find((element) => {
    return element.code === coupon.toUpperCase();
  });

  if (!isWhichCoupon) {
    return 'Tu cupón no es válido.';
  }

  let totalPriceBeforeTaxes = 0;

  shoppingCart.forEach((product) => {
    totalPriceBeforeTaxes += product.priceBeforeTaxes;
  });

  return shoppingCart.map(function (product) {
    const discountedPrice =
      totalPriceBeforeTaxes >= isWhichCoupon.appliesAboveEur
        ? product.priceBeforeTaxes - product.priceBeforeTaxes * isWhichCoupon.discount
        : 'No hay descuento';

    return {
      ...product,
      discountedPrice,
      taxesInEuros: discountedPrice * 0.21,
      priceAfterTaxes: discountedPrice * 1.21,
    };
  });
};

const arrayToTest1 = calculeTaxes('españa', 'andalucía', shoppingList);

console.log(applyCoupon('robusTIO20', arrayToTest1));

/**
 * Al carrito de la compra de Gutufasio le vamos a aplicar ahora los gastos de envío.
 * Los gastos de envío dependerán del país y de la región.
 *  Si el país es españa:
 *      Si la región es Ceuta, Melilla o Canarias, los gastos de envío serán 2€
 *      Si la región es otra serán de 1.5€
 *  Si el país es Francia los gastos de envío serán 500€, porque Gutufasio odia a los franceses y no quiere enviarles nada
 *  salvo a la región de Alsacia, que está muy bonita en navidad, así que los gastos de envío serán 5€ en ese caso.
 *  Si el país es Andorra, los gastos de envío serán 100€, ya que no pagan impuestos pues que paguen por el envío.
 *  En cualquier otro caso los gastos de envío serán 30€
 */

//el proof de que no está vacio.

const shippingCosts = (country, region) => {
  invalidCountry = !country || typeof country !== 'string';

  if (invalidCountry || typeof region !== 'string' || !region) {
    return invalidCountry
      ? `El valor introducido para country no es válido.`
      : `El valor introducido para region no es válido.`;
  }

  let shippingPrice = 30;

  const isSpain = country.toLowerCase() === 'españa';
  const isFrance = country.toLowerCase() === 'francia';

  const isSpainRegion = (checkArray, checkElement) => {
    return checkArray.includes(checkElement.toLowerCase());
  };

  const validRegionSpain = [
    'andalucía',
    'aragón',
    'asturias',
    'baleares',
    'canarias',
    'cantabria',
    'castilla-la mancha',
    'castilla y león',
    'cataluña',
    'ceuta',
    'comunidad valenciana',
    'extremadura',
    'galicia',
    'la rioja',
    'madrid',
    'melilla',
    'murcia',
    'navarra',
    'país vasco',
  ];

  const specialRegionSpain = ['ceuta', 'melilla', 'canarias'];

  if (isSpain && isSpainRegion(specialRegionSpain, region)) {
    shippingPrice = 2;
  } else if (isSpain && isSpainRegion(validRegionSpain, region)) {
    shippingPrice = 1.5;
  }

  if (isFrance && region.toLowerCase() === 'alsacia') {
    shippingPrice = 5;
  } else if (isFrance) {
    shippingPrice = 500;
  }

  if (country.toLowerCase() === 'andorra') {
    shippingPrice = 100;
  }

  return `Los gastos de envío para tu region tienen un coste de ${shippingPrice}€`;
};

console.log(shippingCosts('andorra', 'corea del norte'));
console.log(shippingCosts('', 'corea del norte'));
console.log(shippingCosts('francia', 5));

/**
 * Bueno, Gutufasio se lo ha pensado mejor y si el carrito de la compra supera los 100€, los gastos de envío serán gratis
 * salvo si el país es Francia, a los Franceses sigue cobrándoselos
 */

//variante del ejercicio anterior.

const updatedShippingCost = (country, region, shoppingCart) => {
  invalidCountry = !country || typeof country !== 'string';

  if (invalidCountry || typeof region !== 'string' || !region) {
    return invalidCountry
      ? `El valor introducido para country no es válido.`
      : `El valor introducido para region no es válido.`;
  }

  let totalPriceWithDiscount = 0;

  shoppingCart.forEach((product) => {
    totalPriceWithDiscount += product.discountedPrice;
  });

  let shippingPrice = 30;

  const isSpain = country.toLowerCase() === 'españa';
  const isFrance = country.toLowerCase() === 'francia';

  if (totalPriceWithDiscount > 100 && !isFrance) {
    return `Los gastos de envío para tu región tienen un coste de 0€`;
  }

  const isSpainRegion = (checkArray, checkElement) => {
    return checkArray.includes(checkElement.toLowerCase());
  };

  const validRegionSpain = [
    'andalucía',
    'aragón',
    'asturias',
    'baleares',
    'canarias',
    'cantabria',
    'castilla-la mancha',
    'castilla y león',
    'cataluña',
    'ceuta',
    'comunidad valenciana',
    'extremadura',
    'galicia',
    'la rioja',
    'madrid',
    'melilla',
    'murcia',
    'navarra',
    'país vasco',
  ];

  const specialRegionSpain = ['ceuta', 'melilla', 'canarias'];

  if (isSpain && isSpainRegion(specialRegionSpain, region)) {
    shippingPrice = 2;
  } else if (isSpain && isSpainRegion(validRegionSpain, region)) {
    shippingPrice = 1.5;
  }

  if (isFrance && region.toLowerCase() === 'alsacia') {
    shippingPrice = 5;
  } else if (isFrance) {
    shippingPrice = 500;
  }

  if (country.toLowerCase() === 'andorra') {
    shippingPrice = 100;
  }

  return `Los gastos de envío para tu region tienen un coste de ${shippingPrice}€`;
};

const arrayToTest2 = applyCoupon('robusTIO20', arrayToTest1);

console.log(updatedShippingCost('españa', 'ceuta', arrayToTest2));

//Ahora Josmi se pone a optimizar el codigo sacando fuera de las funciones los tramos que se repiten para crear nuevas funciones externas a las que llamar dentro de las funciones grandes para que hagan lo que ya hacian pero ocupando menos espacio. Es como lo que hemos hecho dentro de las funciones pero de manera mas global, aplicado a todas ellas a la vez.
