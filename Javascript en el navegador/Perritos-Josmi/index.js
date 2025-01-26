const perricosArray = [
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg',
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg',
];
//'perricosArray' es el contenedor de las imágenes de los dos primeros perricos que se pintan en pantalla por defecto al cargar la página.

const giveDogVotesListeners = () => {
  document.querySelectorAll('#dog-list .card').forEach((card) => {
    let positiveButton = card.querySelector('.vote-nice');
    let negativeButton = card.querySelector('.vote-ugly');

    let positiveVote = 0;
    let negativeVote = 0;

    positiveButton.addEventListener('click', () => {
      positiveVote += 1;
      card.querySelector('p').innerHTML = `<p>${positiveVote} ❤️ ${negativeVote}🤮</p>`;

      if (positiveVote >= 5) {
        positiveButton.style.visibility = 'hidden';
      }
    });

    negativeButton.addEventListener('click', () => {
      negativeVote += 1;
      card.querySelector('p').innerHTML = `<p>${positiveVote} ❤️ ${negativeVote}🤮</p>`;

      if (negativeVote >= 5) {
        negativeButton.style.visibility = 'hidden';
      }
    });
  });
};

function renderPerrico(image) {
  const dogList = document.querySelector('#dog-list'); //Guardamos el div específico al que queremos acceder en una variable.
  const htmltoAdd = `<div class="card">
  <img src="${image}" alt="Perro" />
  <br />
  <p>❤️ 🤮</p>
  <button class="vote-nice">Preciosísimo</button> <button class="vote-ugly">Feísisimo</button>
</div>`;
  dogList.innerHTML += htmltoAdd; //Como el HTML es en esencia un string multilínea, para añadir más sin borrar el que ya hay operamos con +=, que CONCATENA los strings, o lo que es lo mismo pone el codigo del html al lado del anterior.
}

function renderPerricoArray() {
  const dogList = document.querySelector('#dog-list');

  //Aquí solía estar "dogList.innerHTML = '';", limpiaba el HTML cuando la manera de renderizar los perricos dependía del array, ahora parece innecesario, así que lo he eliminado.

  perricosArray.forEach((dogImage) => {
    renderPerrico(dogImage);
  });
  giveDogVotesListeners();
}

renderPerricoArray(); //Ejecuta la función de arriba 1 única vez, para renderizar en la página los dos perricos iniciales.

const addPerrico = async () => {
  //Las líneas de debajo ya no tienen mucho sentido en relación al contexto actual del código. Se refieren a cuando los perricos se renderizaban desde el array inicial.

  const perricoImg = await getRandomDogImage();
  perricosArray.push(perricoImg); //Añadimos la imagen del nuevo perrico al array inicial.
  renderPerricoArray(); //Ejecutamos la función anterior con la nueva imagen. Básicamente borra todas y mete todas y la nueva de nuevo dentro de #dog-list.
};

const addPerricoEficiente = async () => {
  const perricoImg = await getRandomDogImage();
  renderPerrico(perricoImg);
  giveDogVotesListeners();
};

const addFivePerricos = async () => {
  for (let count = 1; count <= 5; count++) {
    const perricoImg = await getRandomDogImage();
    perricosArray.push(perricoImg);
  }
  renderPerricoArray();
};

const addFivePerricosEficiente = async () => {
  for (let count = 1; count <= 5; count++) {
    const perricoImg = await getRandomDogImage();
    renderPerrico(perricoImg);
  }
  giveDogVotesListeners();
};

//Según Josmi cargar todos los perritos al mismo tiempo sería peor, porque en lugares con mala conexión, verán los recuadros pero no verán los perros hast que terminen de cargar.

document.querySelector('#add-1-perrico').addEventListener('click', () => {
  addPerricoEficiente();
});

document.querySelector('#add-5-perrico').addEventListener('click', function () {
  addFivePerricosEficiente();
});

//La función/método .addEventListener incluye un primer parámetro en referencia a lo que está escuchando. Se trata de un string específico. Hay animation, clipboard, composition, focus, fullscreen, keyboard, mouse, pointer, scroll, touch y transition events. Cada uno presenta diferentes strings de evento que podrían ser escuchados con un addEventListener para actuar al ocurrir su ejecución. (hay mas events que he dejado fuera, se encuentran en esta web --> https://developer.mozilla.org/en-US/docs/Web/Events).

//Su segundo parámetro hace referencia a lo que debe cambiar con ese evento, en este caso es la función que ejecuta addPerrico(); Hay un tercer parámetro que, de momento, no usaremos.

// Para arreglar el tema de el reseteo del HTML. Tendríamos que crear funciones adicionales y reestructurar.

// 1. Tomaríamos la parte de renderPerricoArray() que sirve para acceder a la ubicacion, el html que debemos añadir y la instrucción para añadirlo. No necesitamos llamarlo ahí.

// 2. A partir de esos pedazos de código, crearíamos una nueva función (renderPerrico(image)) que utilizase las imágenes de los siguientes perritos a añadir empleando los botones como parámetro. Sin necesidad de limpiar el HTML.

// 3. Tras eso deberíamos sustituir esa nueva función en las que ya usábamos para añadir perricos (addPerricos y addFivePerricos).

// 4. Como en la concepción original los listeners eran dados en renderPerricoArray(), ahora que ya no utilizamos esa función más que para pintar por pantalla el array inicial, necesitamos añadir los listeners en otro lugar. Los añadiremos al final de addPerricos y addFivePerricos, ya que para ese punto, renderPerrico(image) ya se habrá ejecutado y los objetos sobre los que se han de añadir los listeners existirán.

// 5. Finalmente optimizaríamos la función original para que hiciera uso de las otras funciones creadas y evitase repetir código.
