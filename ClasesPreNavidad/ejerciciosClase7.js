//Otra manera de hacer este KATA, mejor en realidad. Las variables definidas dentro de un forEach se reinician en cada iteración, por eso este método funciona. Si estuviera fuera esa variable sí cambiaría y no funcionaría. (No incluye el pequeño arreglo para saltar los espacios en blanco, el mío sí.)

function wave(str) {
  const result = [];
  const characters = str.split('');

  characters.forEach(function (char, index) {
    const charactersCopy = [...characters];
    charactersCopy[index] = char.toUpperCase();
    result.push(charactersCopy.join(''));
  });
  return result;
}

console.log(wave('hello'));

//Mi versión pero mejorada. Al devolver a minúsculas el carácter no hace falta utilizar toLowerCase(), porque el valor base de ese char era ya una minúscula.

function wave2(str) {
  const solutionArray = [];
  const strToCharArray = str.split('');

  strToCharArray.forEach(function (char, index) {
    if (char === ' ') {
      return;
    }
    strToCharArray[index] = char.toUpperCase();
    solutionArray.push(strToCharArray.join(''));
    strToCharArray[index] = char;
  });
  return solutionArray;
}

console.log(wave2('hello'));
