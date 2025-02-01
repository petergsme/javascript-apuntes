const perricosArray = [
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg',
  'https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg',
];
//'perricosArray' es el contenedor de las imágenes de los dos primeros perricos que se pintan en pantalla por defecto al cargar la página.

/*

SECCIÓN INICIAL DE TIMEOUT

*/

const timeOutId = setTimeout(() => {
  document.querySelector('#alert').style.display = 'inline-block';
}, 3000); // A los 10 segundos muestra un texto que te dije que clickes un fucking boton.

// De dejar en mi caso display vacío para que intentara mostrarse no iría. Esto solo funciona cuando ese display none lo has metido en su etiqueta de html como propiedad. Si lo metiste con CSS tienes que darle un bloque real.

function clearWarningText() {
  clearTimeout(timeOutId);
  document.querySelector('#alert').style.display = 'none';
} //Cuando clicas un boton llamas a esta funcion, sirve para que no se muestre el texto que dice que clickes y se carga el timeout formalmente.

/*

FUNCIONES BÁSICAS PARA AÑADIR PERRICOS Y DAR LISTENERS A LOS BOTONES DE SUS TARJETAS QUE AÑADAN VOTOS.

*/

const giveDogVotesListeners = () => {
  document.querySelectorAll('.like').forEach((button) => {
    button.addEventListener('click', () => {
      const parrafo = button.previousElementSibling; //Desde el botón seleccionamos su hermano anterior, el párrafo con contadores.
      const likeCountNode = parrafo.querySelector('.like-count'); //Guardamos la posición del contador positivo en una variable.
      likeCountNode.innerText = Number(likeCountNode.innerText) + 1; //Convertimos a número su interior y sumamos 1.
    });
  });

  document.querySelectorAll('.dislike').forEach((button) => {
    button.addEventListener('click', () => {
      const dislikeCountNode = button.closest('.card').querySelector('.dislike-count'); // Ojito a como usamos aquí closest, que solo busca hacia arriba, llegamos arriba y bajamos.
      dislikeCountNode.innerText = Number(dislikeCountNode.innerText) + 1;
    });
  });
};

function renderPerricoArray() {
  const dogList = document.querySelector('#dog-list');
  dogList.innerHTML = '';

  perricosArray.forEach((dogImage, index) => {
    const htmlAdd = `<div class="card">
  <img src="${dogImage}" alt="Perro" />
  <br />
  <p><span class="like-count"></span>❤️ <span class="dislike-count"></span>🤮</p>
  <button class="like">Preciosísimo</button> <button class="dislike">Feísisimo</button>
</div>`;

    dogList.innerHTML += htmlAdd;
  });
  giveDogVotesListeners();
}

const addPerrico = async (addToStart) => {
  const perricoImg = await getRandomDogImage();

  const dogList = document.querySelector('#dog-list');

  const isAnyFilterSelected = document.querySelector('.filter-selected');
  // Si hay algún filtro seleccionado los perritos se añaden con display none.

  const htmlAdd = `<div class="card" ${isAnyFilterSelected ? 'style="display:none"' : ''}>
  <img src="${perricoImg}" alt="Perro" />
  <br />
  <p><span class="like-count"></span>❤️ <span class="dislike-count"></span>🤮</p>
  <button class="like">Preciosísimo</button> <button class="dislike">Feísisimo</button>
</div>`;

  if (addToStart) {
    dogList.innerHTML = htmlAdd + dogList.innerHTML;
    //Como el HTML es en esencia un string multilínea, para añadir más sin borrar el que ya hay operamos con +=, que CONCATENA los strings, o lo que es lo mismo pone el codigo del html al lado del anterior.
  } else {
    dogList.innerHTML = dogList.innerHTML + htmlAdd;
  }
  giveDogVotesListeners();
};

//Mucho cuidado, aquí arriba accedes al INNERHTML de dogList, no puedes hacer que dogList = document.querySelector('#dog-list').innerHTML; y luego poner dogList = newDog + dogList, es una variable const. Estamos trabajando con innerHTML.

/*

LISTENERS DE LOS BOTONES QUE AÑADEN PERRICOS.

*/

document.querySelector('#add-1-perrico').addEventListener('click', () => {
  addPerrico();
  clearWarningText();
});

document.querySelector('#add-perrico-start').addEventListener('click', function () {
  addPerrico(true);
  clearWarningText();
});

document.querySelector('#add-5-perrico').addEventListener('click', function () {
  clearWarningText();

  addPerrico();
  addPerrico();
  addPerrico();
  addPerrico();
  addPerrico();
});

/*

LISTENERS DE LOS BOTONES QUE FILTRAN Y FUNCIÓN DE FILTRADO.

*/

const likeFilterButton = document.querySelector('#like-filter');

likeFilterButton.addEventListener('click', function () {
  likeFilterButton.classList.toggle('filter-selected');
  filterPerricos();
  //Mucho cuidado aquí con el orden de las cosas, de ir el toggle antes que el condicional, la primera ejecución se rompe siempre, ya que los oculta, adquiere la clase que permite mostrarlos y los vuelve a mostrar.
});

const dislikeFilter = document.querySelector('#dislike-filter');

dislikeFilter.addEventListener('click', function () {
  dislikeFilter.classList.toggle('filter-selected');
  filterPerricos();
});

function filterPerricos() {
  const isLikeFilterSelected = likeFilterButton.classList.contains('filter-selected');
  const isDislikeSelected = dislikeFilter.classList.contains('filter-selected');

  document.querySelectorAll('.card').forEach((dogCard) => {
    // si no hay ningún filtro aplicado, lo muestra
    if (!isLikeFilterSelected && !isDislikeSelected) {
      dogCard.style.display = '';
      return;
    }

    // si preciosismo aplicado y hay preciosisimo lo muestra
    const likeCount = dogCard.querySelector('.like-count').innerText;
    if (likeCount !== '' && isLikeFilterSelected) {
      dogCard.style.display = '';
      return;
    }

    // si feísimo aplicado y hay feísimo lo muestra
    const dislikeCount = dogCard.querySelector('.dislike-count').innerText;
    if (dislikeCount !== '' && isDislikeSelected) {
      dogCard.style.display = '';
      return;
    }

    dogCard.style.display = 'none';
  });
}

/*

SECCIÓN FINAL DE INTERVALO PARA AÑADIR UN PAR DE PERRITOS.

*/

let automaticPerrosCount = 0;

const intervalId = setInterval(() => {
  addPerrico();
  automaticPerrosCount++;

  if (automaticPerrosCount === 2) {
    clearInterval(intervalId);
  }
}, 5000); //Añade un perrico cada 10 segundos, tras añadir dos para.

renderPerricoArray(); //Renderiza los dos perricos iniciales.

//La función/método .addEventListener incluye un primer parámetro en referencia a lo que está escuchando. Se trata de un string específico. Hay animation, clipboard, composition, focus, fullscreen, keyboard, mouse, pointer, scroll, touch y transition events. Cada uno presenta diferentes strings de evento que podrían ser escuchados con un addEventListener para actuar al ocurrir su ejecución. (hay mas events que he dejado fuera, se encuentran en esta web --> https://developer.mozilla.org/en-US/docs/Web/Events).

//Su segundo parámetro hace referencia a lo que debe cambiar con ese evento, en este caso es la función que ejecuta addPerrico(); Hay un tercer parámetro que, de momento, no usaremos.

// Para arreglar el tema de el reseteo del HTML. Tendríamos que crear funciones adicionales y reestructurar.

// 1. Tomaríamos la parte de renderPerricoArray() que sirve para acceder a la ubicacion, el html que debemos añadir y la instrucción para añadirlo. No necesitamos llamarlo ahí.

// 2. A partir de esos pedazos de código, crearíamos una nueva función (renderPerrico(image)) que utilizase las imágenes de los siguientes perritos a añadir empleando los botones como parámetro. Sin necesidad de limpiar el HTML.

// 3. Tras eso deberíamos sustituir esa nueva función en las que ya usábamos para añadir perricos (addPerricos y addFivePerricos).

// 4. Como en la concepción original los listeners eran dados en renderPerricoArray(), ahora que ya no utilizamos esa función más que para pintar por pantalla el array inicial, necesitamos añadir los listeners en otro lugar. Los añadiremos al final de addPerricos y addFivePerricos, ya que para ese punto, renderPerrico(image) ya se habrá ejecutado y los objetos sobre los que se han de añadir los listeners existirán.

// 5. Finalmente optimizaríamos la función original para que hiciera uso de las otras funciones creadas y evitase repetir código.
