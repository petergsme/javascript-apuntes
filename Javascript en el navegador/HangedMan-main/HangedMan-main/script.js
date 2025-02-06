//Hanged Man: queremos crear el juego hanged man
//guardar la palabra en una variable de tipo let, será el resultado o la palabra correcta
//comprobar que la letra que el jugador pone está en un lugar espoecífico

let wordIn = '';
let wordArray = [];
let slotArray = [];
let slotString = '';

//estas variables(variable html) son literalmente el form y el div que contiene los slots de las letras en html (document es el documento html. de este documento html que es lo que quieres sacar)
const form = document.getElementById('form'); ////document es el elemento html y getElement.... sirve para sacar un elemento html del documento,puedee ser por ID, por class etc.
const slots = document.getElementById('slots'); //esto se supone que es el div donde van los slots, representan elmentos del html
const imgHangedMan = document.getElementById('hanged'); //esto es la imágen del colgado
const resetButton = document.getElementById('restart'); //boton de volver a empezar, la palabra en verde es el id en html
const buttonLetters = document.getElementById('buttonLetters');
const buttonRandomWord = document.getElementById('randomWord');
const option = document.getElementById('option');

const randomWord = () => {
  const words = [
    'gorra',
    'viento',
    'nieve',
    'fresa',
    'camisa',
    'dinero',
    'tomates',
    'colegio',
    'barriga',
    'zumo',
    'reloj',
    'camiseta',
    'cuadrado',
    'abrigo',
    'libro',
    'verde',
    'rojo',
    'amarillo',
    'azul',
    'perro',
    'gato',
    'animal',
    'moco',
    'manzana',
    'arbol',
    'lechuga',
    'zapato',
    'tabaco',
    'armario',
    'anime',
    'mesa',
    'comida',
    'ballena',
    'rodilla',
    'mano',
    'pie',
    'cabza',
    'calabaza',
    'zapatilla',
  ];
  const input = document.getElementById('word');
  input.value = words[Math.floor(Math.random() * words.length)];
  wordInput(); //es lo mismo que pulsar el botón submit (enviar)
  //la función randomWord llama a la función
};
//función que hace que empiece la partida, una vez metamos una palabra el form desaparecerá
const wordInput = (e) => {
  // representa el evento que en este caso es submit, el botón de enviar
  e && e.preventDefault(); //todos los formularios recargan la página, con esto lo evitamos
  //si existe el evento se aplica prevent Default, que hace que no se refreque la página si se ha enviado un formulario
  const word = document.getElementById('word').value.toUpperCase(); //value es el valor en html
  wordIn = word;
  wordArray = word.split('');
  form.classList.add('inv'); //le definimos al form la class invisible para que dseaparezca una vez escribamos y enviemos las palabras
  wordArray.forEach((lett) => {
    slotArray.push('_');
  });
  slotString = slotArray.join(' ');
  slots.innerHTML = `<h2>${slotString}</h2>`; //metodo que se usa para añadir cosas de javascript a html. reprsenta el interior del div con el id.slots
  //innerHTML es el interior de un contenedor o etiqueta

  //en esta parte hacemos que los elementos ocultos se muestren como la imagen del colgado, los botones de las letras etc
  imgHangedMan.classList.remove('inv');
  buttonLetters.classList.remove('inv');
  buttonRandomWord.classList.add('inv'); //le decimos que al pulsar el botón palabra random este botón desaparezca
  option.classList.add('inv'); //hace que la frase h3 "o prueba con:" desaparezca una vez se ejecute wordInput
};
//si no se pulsa en el botón "enviar" no se llama al addEventLisener y el evento no pasa por la función WordInput
//cuando aguien envia la palabra, llama a la función wordImput que es la encargada de separar la palabra en una array entre otras cosas
form.addEventListener('submit', wordInput); //(cuando lo hace, a qué llama cuando lo hace,) las funciones no tienen que llevar paréntesis en formularios?

let attempts = 0;
let counterLetters = 0;

const hangedMan = (letter, button) => {
  //le estoy pasando la letara de cada botón y el botón en sí,

  //esta parte del código es la que hace que al apretar un botón con letra, se ponga o no en el array
  if (wordArray.includes(letter)) {
    //si el array definido en la función wordInput contiene la letra que hemos pulsado
    wordArray.forEach((char, index) => {
      //iniciamos un forEach para recorrer el array
      if (char === letter) {
        //en el caso de que una de las letras del array coincida con la letra pulsada
        slotArray[index] = letter; //se añadirá la letra en la misma posición del array pero esta vez en el array vacío slotArray, que tendrá el mismo largo que el array de letras
        counterLetters += 1; //añadimos 1 al contador de letras, esto servira posteriormente para saber si se han acertado todas las letras
      }
    });
    //tenemos que decirle aquí que si ha acertado todas entonces se deshabiliten los botones y aparezca una imágen de ganar
    if (counterLetters == wordArray.length) {
      //si el contador de letras es igual al largo de wordArray significará que han acertado la palabra entera y habrán ganado
      setTimeout(() => {
        //esta función hace lo mismo que la de más abajo, la de fail, pero con la imágen win porque la condición es que ha ganado
        imgHangedMan.src = `images/8.png`;
        resetButton.classList.remove('inv');
        //quiero ahora deshabilitar los botones con letras mayúsculas
        const buttons = document.querySelectorAll('button'); //todos los botones con la propiedad button
        buttons.forEach((btn) => {
          //ppara cada botón se obtiene su texto y se eliminan los espacios ectra con trim
          const textButton = btn.textContent.trim(); // Usamos textContent para obtener el texto del botón
          if (textButton.length === 1 && ((textButton >= 'A' && textButton <= 'Z') || textButton === 'Ñ')) {
            // Comprueba si es una sola letra mayúscula
            btn.disabled = true;
          }
        });
      }, 500);
    }
    slotString = slotArray.join(' ');
    button.disabled = true; //this en este caso es literalmente el botón que hemos clickado y lo deshabilitamos cuando ya hemos porbado con esa letra
    slots.innerHTML = `<h2>${slotString}</h2>`; //innerHTML es una propiedad que permite leer o escribir el contenido HTML de un elemento.
    //asignamos un valor a slots.innerHTML reemplazando todo el contenido de elemento slots con el nuevo valor especificado
  } else {
    attempts++;
    imgHangedMan.src = `images/${attempts}.png`;
    button.disabled = true;
    if (attempts === 6) {
      setTimeout(() => {
        imgHangedMan.src = `images/7.png`;
        resetButton.classList.remove('inv'); //le decimos que se muestre el botón de resetear
        //en esta parte del código quiero que las letras que no se hayan puesto aparezcan en rojo

        /* slotArray.forEach((slot, index)=>{ //hacemos que para cada indice del slotArray
                    if(slot == '_'){ //si en el slot hay _ entonces lo sustituimos por la letra que se encuentra en el wordArray en su misma posición (mismo indice)
                        slotArray[index] = `<span class="red">${wordArray[index]}<span>`; //creamos un span para que no modifique la palabra y le añadimos la clase red
                    }
                    return slot; 
                }) */

        //alternativa al bloque de comentario de arriba, usamos un map para crear un nuevo array con las condiciones,
        //El método map crea un nuevo array basado en la transformación que definimos, asegurando que:
        //Solo se modifica el contenido de los elementos que no han sido acertados (_).
        //Los elementos que ya contienen letras acertadas permanecen intactos.
        //por qué no usar forEach: forEach recorre un array y ejecuta una función sobre cada elemento. No devuelve nada. Por tanto, cualquier modificación en el array debe hacerse directamente modificando sus elementos
        //al modificar el array directamente es más facil cometer errores, sobreescribir valores o procesar índices incorrectos
        slotArray = slotArray.map((slot, index) => {
          //modificamos el valor de slotArray asignando un nuevo valor, en este caso el resultado de map del mismo slotArray
          // Si el slot no ha sido acertado ('_'), mostrar la letra en rojo
          if (slot === '_') {
            return `<span class="red">${wordArray[index]}</span>`;
          }
          // Si ya está acertado, dejarlo tal cual
          return slot;
        });

        slots.innerHTML = `<h2>${slotArray.join(' ')}</h2>`; //aquí le decimos que reemplazamos el valor que tenía antes slots por el nuevo slotArrayJoin

        //quiero ahora deshabilitar los botones con letras mayúsculas
        const buttons = document.querySelectorAll('button'); //todos los botones con la propiedad button

        //aquí vamos a hacer que los botones de letras se deshabiliten si has perdido para que no puedas volver a pulsar
        buttons.forEach((btn) => {
          //para cada botón se obtiene su texto y se eliminan los espacios extra con trim
          const textButton = btn.textContent.trim(); // Usamos textContent para obtener el texto del botón
          if (textButton.length === 1 && ((textButton >= 'A' && textButton <= 'Z') || textButton === 'Ñ')) {
            // Comprueba si es una sola letra mayúscula
            btn.disabled = true;
          } //deshabilita todos los botenes que cumplan con la condición de que tengan 1 caracter y estén en el rango de la A a la Z en su contenido
        });
      }, 500);
    }
  }
};

const reset = () => {
  location.reload();
};
