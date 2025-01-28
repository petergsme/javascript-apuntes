const perricosArray = [
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg",
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg",
];
//'perricosArray' es el contenedor de las imágenes de los dos primeros perricos que se pintan en pantalla por defecto al cargar la página.

const brokenDogVotesListeners = () => {
  const cardsWithoutListeners = Array.from(document.querySelectorAll(".card")).filter((dogCard) => {
    console.log(dogCard.querySelector("p").innerHTML.length);
    return dogCard.querySelector("p").innerHTML.length === 5;
  });

  cardsWithoutListeners.forEach((card) => {
    let positiveButton = card.querySelector(".vote-nice");
    let negativeButton = card.querySelector(".vote-ugly");

    let positiveVote = 0;
    let negativeVote = 0;

    positiveButton.addEventListener("click", () => {
      positiveVote += 1;
      card.querySelector("p").innerHTML = `<p>${positiveVote} ❤️ ${negativeVote}🤮</p>`;

      if (positiveVote >= 5) {
        positiveButton.style.visibility = "hidden";
      }
    });

    negativeButton.addEventListener("click", () => {
      negativeVote += 1;
      card.querySelector("p").innerHTML = `<p>${positiveVote} ❤️ ${negativeVote}🤮</p>`;

      if (negativeVote >= 5) {
        negativeButton.style.visibility = "hidden";
      }
    });
  }); //Se me fue de las manos. Aun filtrando las tarjetas para seleccionar las que no tienen event listeners, el haber declarado positiveVote y negativeVote de manera local hace que internamente se reinicien para las tarjetas a las que no se añade un nuevo event listener lo que provoca que se rompan.
};

const hideButton = (count, button) => {
  if (count >= 5) {
    button.style.visibility = "hidden";
  }
};

const giveDogVotesListeners = () => {
  document.querySelectorAll(".vote-nice").forEach((button) => {
    button.addEventListener("click", () => {
      const parrafo = button.previousElementSibling; //Desde el botón seleccionamos su hermano anterior, el párrafo con contadores.
      const likeCountNode = parrafo.querySelector(".like-count"); //Guardamos la posición del contador positivo en una variable.
      likeCountNode.innerText = Number(likeCountNode.innerText) + 1; //Convertimos a número su interior y sumamos 1.

      hideButton(likeCountNode.innerText, button);
    });
  });

  document.querySelectorAll(".vote-ugly").forEach((button) => {
    button.addEventListener("click", () => {
      const parrafo = button.previousElementSibling.previousElementSibling;
      const dislikeCountNode = parrafo.querySelector(".dislike-count");
      dislikeCountNode.innerText = Number(dislikeCountNode.innerText) + 1;

      hideButton(dislikeCountNode.innerText, button);
    });
  });
};

function renderPerrico(image) {
  const dogList = document.querySelector("#dog-list"); //Guardamos el div específico al que queremos acceder en una variable.
  const htmltoAdd = `<div class="card">
  <img src="${image}" alt="Perro" />
  <br />
  <p><span class="like-count"></span>❤️ <span class="dislike-count"></span>🤮</p>
  <button class="vote-nice">Preciosísimo</button> <button class="vote-ugly">Feísisimo</button>
</div>`;
  dogList.innerHTML += htmltoAdd; //Como el HTML es en esencia un string multilínea, para añadir más sin borrar el que ya hay operamos con +=, que CONCATENA los strings, o lo que es lo mismo pone el codigo del html al lado del anterior.
}

function renderPerricoArray() {
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

const addPerricoStart = async () => {
  const perricoImg = await getRandomDogImage();

  const dogList = document.querySelector("#dog-list");
  const htmltoAdd = `<div class="card">
  <img src="${perricoImg}" alt="Perro" />
  <br />
  <p><span class="like-count"></span>❤️ <span class="dislike-count"></span>🤮</p>
  <button class="vote-nice">Preciosísimo</button> <button class="vote-ugly">Feísisimo</button>
</div>`;

  dogList.innerHTML = htmltoAdd + dogList.innerHTML;

  giveDogVotesListeners();
};

const hideUglyDoggies = () => {
  document.querySelectorAll(".dislike-count").forEach((count) => {
    if (count.innerHTML > 0) {
      count.parentElement.parentElement.style.display = "none";
    }
  });
};

const showAllDoggies = () => {
  document.querySelectorAll(".card").forEach((dogCard) => {
    dogCard.style.display = ""; //"set display to an empty string - this will allow the row to use its default display value and so works in all browsers"
  });
};

//Según Josmi cargar todos los perritos al mismo tiempo sería peor, porque en lugares con mala conexión, verán los recuadros pero no verán los perros hast que terminen de cargar.

document.querySelector("#add-1-perrico").addEventListener("click", () => {
  addPerricoEficiente();
});

document.querySelector("#add-5-perrico").addEventListener("click", function () {
  addFivePerricosEficiente();
});

document.querySelector("#add-perrico-start").addEventListener("click", function () {
  addPerricoStart();
});

document.querySelector("#hide-uglies").addEventListener("click", function () {
  hideUglyDoggies();
  const selectButton = document.querySelector("#hide-uglies");
  if (selectButton.classList.contains("button-selected")) {
    showAllDoggies();
  }
  selectButton.classList.toggle("button-selected"); //Mucho cuidado aquí con el orden de las cosas, de ir el toggle antes que el condicional, la primera ejecución se rompe siempre, ya que los oculta, adquiere la clase que permite mostrarlos y los vuelve a mostrar.
});

document.querySelector("#show-all").addEventListener("click", function () {
  showAllDoggies();
});

//Para los perritos positivos tendriamos que crear el boton, luego darle aqui un event listener para que ejecutase su funcion y sufuncion seria ocultar los perritos no positivos. para eso necesitariamos acceder a cada uno de los botones de dislike y comprobar que son mayores que 0, si lo son, hide esa tarjeta supongo.

//La función/método .addEventListener incluye un primer parámetro en referencia a lo que está escuchando. Se trata de un string específico. Hay animation, clipboard, composition, focus, fullscreen, keyboard, mouse, pointer, scroll, touch y transition events. Cada uno presenta diferentes strings de evento que podrían ser escuchados con un addEventListener para actuar al ocurrir su ejecución. (hay mas events que he dejado fuera, se encuentran en esta web --> https://developer.mozilla.org/en-US/docs/Web/Events).

//Su segundo parámetro hace referencia a lo que debe cambiar con ese evento, en este caso es la función que ejecuta addPerrico(); Hay un tercer parámetro que, de momento, no usaremos.

// Para arreglar el tema de el reseteo del HTML. Tendríamos que crear funciones adicionales y reestructurar.

// 1. Tomaríamos la parte de renderPerricoArray() que sirve para acceder a la ubicacion, el html que debemos añadir y la instrucción para añadirlo. No necesitamos llamarlo ahí.

// 2. A partir de esos pedazos de código, crearíamos una nueva función (renderPerrico(image)) que utilizase las imágenes de los siguientes perritos a añadir empleando los botones como parámetro. Sin necesidad de limpiar el HTML.

// 3. Tras eso deberíamos sustituir esa nueva función en las que ya usábamos para añadir perricos (addPerricos y addFivePerricos).

// 4. Como en la concepción original los listeners eran dados en renderPerricoArray(), ahora que ya no utilizamos esa función más que para pintar por pantalla el array inicial, necesitamos añadir los listeners en otro lugar. Los añadiremos al final de addPerricos y addFivePerricos, ya que para ese punto, renderPerrico(image) ya se habrá ejecutado y los objetos sobre los que se han de añadir los listeners existirán.

// 5. Finalmente optimizaríamos la función original para que hiciera uso de las otras funciones creadas y evitase repetir código.
