const AVAILABLE_NETWORKS = ['twitter', 'facebook', 'instagram', 'tiktok', 'youtube'];

const CONNECTED_NETWORKS = {
  twitter: true,
  facebook: false,
  instagram: true,
  tiktokBusiness: false,
  tiktokPersonal: true,
  youtube: false,
};

const CONNECTED_NETWORKS_ACCOUNTS = {
  twitter: '232424124314',
  facebook: undefined,
  instagram: 'gutufacio',
  tiktokBusiness: undefined,
  tiktokPersonal: 'johny',
  youtube: 'robustio',
};

function isConnected(network) {
  if (network.toLowerCase() === 'tiktok') {
    return CONNECTED_NETWORKS.tiktokBusiness || CONNECTED_NETWORKS.tiktokPersonal;
  }
  //Es así de sencillo lo de que compruebe si una u otra es true. Devolverá la primera de ellas. Si son falsas no devolverá nada.
  //
  return CONNECTED_NETWORKS[network.toLowerCase()];
}

console.log(isConnected('TwiTTer'));
console.log(isConnected('tIKtok'));

/**
 * 1. Intenta deducir qué hace el código de arriba y escríbelo aquí.
 */

//La función comprueba si el parámetro es una propiedad del objeto a la que puede acceder y devuelve su valor.

/**
 * 2. Crea una función que, dado el nombre de una red social, te diga cual es la cuenta del usuario
 */

const getUserAccount = (socialMedia) => {
  const socialMediaNormalize = socialMedia.toLowerCase();

  if (socialMedia.toLowerCase() === 'tiktok') {
    return CONNECTED_NETWORKS_ACCOUNTS.tiktokBusiness || CONNECTED_NETWORKS_ACCOUNTS.tiktokPersonal;
  }

  if (CONNECTED_NETWORKS[socialMediaNormalize]) {
    return !isNaN(CONNECTED_NETWORKS_ACCOUNTS[socialMediaNormalize])
      ? 'Usuario desconocido'
      : CONNECTED_NETWORKS_ACCOUNTS[socialMediaNormalize];
    //isNaN intenta convertir a número, si lo logra dará false, si no, dará true, por eso aquí lo invertimos.
  }
  return `No hay una cuenta de usuario conectada para '${socialMedia}'`;
};

console.log(getUserAccount('twITTer'));
console.log(getUserAccount('tikTok'));
console.log(getUserAccount('epic games'));

/**
 * 3. Crea una función que, dado un array de redes sociales, te devuelva otro array indicando la red,
 * si está conectada y con el nombre de usuario si la red está conectada.
 *
 * Por ejemplo, con el array ['twitter', 'youtube'], debería devolverte un array
 * [{ network: 'twitter', isConnected: true, username: 'josmidgg' }, { network: 'youtube', isConnected: false }]
 */

const networkInformation = (networkList) => {
  return networkList.map((socialMedia) => {
    const networkInfo = {
      network: socialMedia,
      isConnected: isConnected(socialMedia),
    };

    if (networkInfo.isConnected) {
      networkInfo.username = getUserAccount(socialMedia);
    }
    return networkInfo;
  });
};

console.log(networkInformation(AVAILABLE_NETWORKS));

/**
 * 4. modifica la función isConnected y la función del ejercicio 2 para que ignore mayúsculas y salga el
 * mismo resultado si el usuario pone 'twitter' o 'tWiTter'
 */

//Aplicado sobre los ejercicios anteriores.

/**
 * 5. Crea un objeto cuyas propiedades sean la red social con un nombre correcto para javascript y cuyo valor sea el nombre de la
 * red social. Por ejemplo el valor de la propiedad tikTok sería Tik Tok
 */

const networkNames = {
  twitter: 'X',
  facebook: 'Facebook',
  instagram: 'Instagram',
  tiktok: 'Tik Tok',
  youtube: 'YouTube',
};

/**
 * 6. Crea una función que dado un array de redes sociales, te devuelva la misma información del ejercicio 3
 * incluyendo el nombre de la red social.
 */

const networkInformation2 = (networkList) => {
  return networkInformation(networkList).map((socialMedia) => {
    return {
      ...socialMedia,
      network: networkNames[socialMedia.network],
    };
  });
};

console.log(networkInformation2(AVAILABLE_NETWORKS));

/**
 * 7. Crea una función que dado un array de redes sociales, devuelva lo mismo que la función 6 pero solo
 * de las redes que están conectadas sin modificar la función 6.
 */

const networkInformation3 = (networkList) => {
  return networkInformation2(networkList).filter((socialMedia) => {
    return socialMedia.isConnected;
  });
};

console.log(networkInformation3(AVAILABLE_NETWORKS));

/**
 * 8. Algunas redes sociales no te dan el nombre correcto del usuario y te dan un número muy largo como cadena
 * de texto. Dado el siguiente objeto, modifica las funciones necesarias anteriores para que en ese caso,
 * el nombre del usuario que devuelva sea "Usuario anónimo" en todos los casos.
 */

const CONNECTED_NETWORKS_ACCOUNTS_2 = {
  twitter: '232424124314',
  facebook: undefined,
  instagram: 'gutufacio',
  tikTok: undefined,
  youtube: 'robustio',
};
//He metido el nuevo valor de twitter en el array original para poder probarlo con todas las demas funciones.

/**
 * 9. Crea una función a la que le vamos a pasar un único parámetro, la red social. Usando alguna de las
 * funciones que has creado anteriormente y una de las variables definidas (deduce cual), debe devolver
 * el nombre del usuario en esa red social si tenemos su información, o 'Nunca has conectado tu cuenta'
 * si no la tenemos.
 */

const getUserInfo = (socialMedia) => {
  return getUserAccount(socialMedia);
};

console.log(getUserInfo('twItter'));
console.log(getUserInfo('facebOOK'));

/**
 * 10. Modifica todas las funciones anteriores para que sean Arrow functions
 */

//Hecho.

/**
 * 11. Algunas redes sociales se pueden conectar de distintas formas en función de ciertas características.
 * Por ejemplo, Tik Tok se puede conectar con cuentas business y cuentas personales. Sin embargo, si tienes
 * una cuenta de tipo business no puedes conectar una de tipo personal y viceversa.
 *
 * Modifica todos los ejercicios anteriores para que tikTok no exista y se convierta en tikTokBusiness
 * y tikTokPersonal, pero que el usuario solo tenga que introducir tikTok.
 *
 * Por ejemplo, si tikTokPersonal o tikTokBusiness están conectado, al introducir isConnected('tikTok') debería
 * decir true.
 */

//Solo puede haber uno de los tiktok conectados cada vez. excluyente.
//El usuario solo tiene que introducir tiktok.

//el programa tiene que encontrar cual de los dos tiktok está conectados para devolver específicamente eso.
//si no hay ninguno conectado pues nada.
//Tiene que cambiar en el uno y el dos.
