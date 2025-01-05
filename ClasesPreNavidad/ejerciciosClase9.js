function order(words) {
  const sortedWords = [];

  words.split(' ').forEach((word) => {
    const number = word.split('').find((char) => {
      return Number(char);
    });
    sortedWords[number - 1] = word;
  });

  //Convertimos la palabra en un array de caracteres para buscar el número que contiene. Number(char) intenta convertir la cadena de texto en un número. Si lo logra será verdadero y devolverá ese elemento (el número que contiene ). También se podría poner [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(char). Estarías buscando el char en ese array que contiene los números posibles que podría incluir.

  //Mi fallo ha sido no entender que necesitaba ese número para luego meter el word esa posicion. Sabía que tenia que meter el word en esa posición pero no había en que PARA CADA UNO tienes que encontrar el número que contiene (da igual cual sea) y luego asignarle esa posición. De otro modo, falla.

  return sortedWords.join(' ');
}
