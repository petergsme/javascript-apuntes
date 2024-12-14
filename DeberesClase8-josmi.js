const shoppingList = [
  { name: 'botella de agua', quantity: 7, priceBeforeTaxes: 700 },
  { name: 'bolsa de palomitas', quantity: 2, priceBeforeTaxes: 255.5 },
  { name: 'kg de azucar', quantity: 1, priceBeforeTaxes: 1000 },
  { name: 'pan de hamburguesa', quantity: 728, priceBeforeTaxes: 928 },
  { name: 'kg de tofu ahumado', quantity: 28, priceBeforeTaxes: 2223 },
];

//
//
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

  if (country.toLowerCase() !== 'spain' && country.toLowerCase() !== 'españa') {
    return `Esta herramienta únicamente calcula los impuestos de un carrito de la compra español.`;
  }

  if (!validStates.includes(state.toLowerCase())) {
    return `Introduce una comunidad correcta.`;
  }

  return shoppingCart.map(function (product) {
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

//
//
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

//
//
const shippingCosts = (country, region) => {
  isValidCountry = !country || typeof country !== 'string';

  if (isValidCountry || typeof region !== 'string' || !region) {
    return isValidCountry
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

//
//
const updatedShippingCost = (country, region, shoppingCart) => {
  isValidCountry = !country || typeof country !== 'string';

  if (isValidCountry || typeof region !== 'string' || !region) {
    return isValidCountry
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
