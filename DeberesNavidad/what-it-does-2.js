/**
 * 1. Averigua qué hace la siguiente función
 */
const getFileNameFromUrl = (url, includeExtension = false) => {
  try {
    const urlObject = new URL(url);
    if (urlObject) {
      const fileName = urlObject.pathname.split('/').pop();
      if (fileName) {
        if (includeExtension) return fileName;
        return getFileNameWithoutExtension(fileName);
      }
    }
  } catch (error) {
    console.error('Cannot get filename from url: ' + url);
  }
};

/*Aquí están sucediendo muchas cosas a la vez, Vamos por partes:

1.'includeExtension = false' - El segundo parámetro está siendo predeclarado. De invocar la función sin un valor para el mismo, el valor predeclarado le será asignado durante la ejecución. En este caso, esto implica que el nombre de la extensión del archivo no será incluido, salvo de especificar explicitamente que sí se desea invocando la función con un segundo parámetro que sea TRUE.

2. 'try {} catch (error) {}' - try se utiliza para ejecutar código que puede generar errores. Si algo falla en el código de try, la ejecución se transfiere automáticamente al bloque catch donde el error que provocó el fallo se vuelve automáticamente su parámetro. catch permite ejecutar otra serie de instrucciones en caso de que el programa falle en lugar de que explote javascript con un error chungo.

3. 'const urlObject = new URL(url);' - Declara una variable que almacena el valor de la URL introducida. Las URLs se declaran utilizando el constructor new URL(url, [base]), que es un objeto especializado para trabajar con direcciones web. El primer parámetro, url, hace referencia a un fragmento o a una URL completa que se desea procesar. El segundo parámetro, base, es opcional y sirve como una URL base que se combina con el primer parámetro. Si el primer parámetro ya es una URL completa, no es necesario proporcionar el segundo.

La declaración de este objeto dentro de try tiene un propósito, sirve para comprobar la validez del valor introducido para el parametro 'url'. Si dicho valor no corresponde realmente a una URL la declaración fallará y se producirá un error que ejecutará el catch.

En teoría 'if (urlObject)'es redundante. Si new URL(url) genera un objeto válido, la existencia del objeto ya está garantizada y no es necesario comprobar si urlObject es true/truthy.

4. 'const fileName = urlObject.pathname.split('/').pop();' - Sabiendo que en una URL que lleva a un archivo el último elemento del enlace es el nombre del archivo, esta variable almacena ese valor. Accede a la URL a traves de su propiedad 'pathname' (devuelve la URL contenida en urlObject), utiliza split('/') para dividir ese enlace en un array en los puntos donde hay '/' y finalmente pop() corta y devuelve el último elemento del array creado que debería ser el nombre del archivo.

5. 'console.error' - Viene siendo como console.log pero para mensajes de error.

En resumen la funcion hace lo siguiente:
1. Recibe una URL y un parámetro opcional includeExtension.
2. Intenta crear un objeto URL a partir de la URL proporcionada.
3. Si se puede crear el objeto URL, obtiene el nombre del archivo de la ruta (última parte del path).
4. Si includeExtension es true, devuelve el nombre del archivo con su extensión.
5. Si includeExtension es false, devuelve el nombre del archivo sin la extensión (usando otra función).
6. Si ocurre un error, lo captura y muestra un mensaje de error en la consola.

*/

const getFileNameWithoutExtension = (fileName) => {
  if (!fileName) return;
  const lastDotIndex = fileName.lastIndexOf('.');
  return lastDotIndex > 0 ? fileName.substring(0, lastDotIndex) : fileName;
};

//Esta función requiere de un parámetro que asumimos será un string con un nombre de archivo que puede incluir o no la extensión del mismo (fotodegato.jpg o fotodegato).

//El condicional comprueba que el valor introducido para el parámetro sea válido, comparándolo a false. Asumiendo que el usuario nunca usará valores que no sean strings, esto ayudaría a descartar los strings vacíos.

// En caso de ser determinado el parámetro como un valor adecuado, se declara una variable que busca el índice del punto que se encuentra antes de la extension del archivo.

// Finalmente, se utiliza un return con ternarios que comprueba si el string incluye la extension o no y devuelve el nombre sin la misma en caso de contenerla. La condición del return: 'lastDotIndex > 0' se basa en que el método lastIndexOf devuelve -1 en caso de no encontrar el carácter buscado en ninguna posición del string.
