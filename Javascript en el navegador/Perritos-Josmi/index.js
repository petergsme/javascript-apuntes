const perricosArray = [
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg",
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg",
];
//'perricosArray' es el contenedor de las imágenes de los dos primeros perricos que se pintan en pantalla por defecto al cargar la página.

/*

SECCIÓN INICIAL DE TIMEOUT

*/

const timeOutId = setTimeout(() => {
  document.querySelector("#alert").style.display = "inline-block";
}, 3000); // A los 10 segundos muestra un texto que te dije que clickes un fucking boton.

// De dejar en mi caso display vacío para que intentara mostrarse no iría. Esto solo funciona cuando ese display none lo has metido en su etiqueta de html como propiedad. Si lo metiste con CSS tienes que darle un bloque real.

function clearWarningText() {
  clearTimeout(timeOutId);
  document.querySelector("#alert").style.display = "none";
} //Cuando clicas un boton llamas a esta funcion, sirve para que no se muestre el texto que dice que clickes y se carga el timeout formalmente.

/*

FUNCIONES PARA EL DESPLEGABLE CON OPCIONES DE RAZAS

*/

async function populateSelect() {
  const dogBreedList = await getDogBreedList();
  const dogBreedArray = Object.keys(dogBreedList);

  const selectNode = document.querySelector('[name = "select"]');

  dogBreedArray.forEach((breed) => {
    const breedNode = document.createElement("option");
    breedNode.value = `${breed}`;
    breedNode.innerText = `${breed}`;

    selectNode.appendChild(breedNode);
  });
}

populateSelect();

let breedToAdd = "briard";

const selectNode = document.querySelector('[name = "select"]');
selectNode.addEventListener("change", (event) => {
  breedToAdd = event.target.value;
});

/*

FUNCIONES BÁSICAS PARA AÑADIR PERRICOS Y DAR LISTENERS A LOS BOTONES DE SUS TARJETAS QUE AÑADAN VOTOS.

*/

const giveDogNodeListeners = (dogNode) => {
  const likeButton = dogNode.querySelector(".like");
  const dislikeButton = dogNode.querySelector(".dislike");

  likeButton.addEventListener("click", () => {
    const likeCountNode = dogNode.querySelector(".like-count"); //Guardamos la posición del contador positivo en una variable.
    likeCountNode.innerText = Number(likeCountNode.innerText) + 1; //Convertimos a número su interior y sumamos 1.
  });

  dislikeButton.addEventListener("click", () => {
    const dislikeCountNode = dogNode.querySelector(".dislike-count");
    dislikeCountNode.innerText = Number(dislikeCountNode.innerText) + 1;
  });
};

function renderPerricoArray() {
  document.querySelector("#dog-list").innerHTML = "";

  perricosArray.forEach((dogImage) => {
    addPerrico(dogImage, false);
  });
}

function disableAllAddPerricoButtons() {
  document.querySelectorAll("button").forEach((buttonNode) => {
    buttonNode.disabled = true;
  });
}

function enableAllAddPerricoButtons() {
  document.querySelectorAll("button").forEach((buttonNode) => {
    buttonNode.disabled = false;
  });
}

const addPerrico = async (image, addToStart) => {
  const perricoImg = await getRandomDogImage(breedToAdd);

  const dogList = document.querySelector("#dog-list");

  const isAnyFilterSelected = document.querySelector(".filter-selected");
  // Si hay algún filtro seleccionado los perritos se añaden con display none.

  const dogNode = document.createElement("div");
  dogNode.className = "card";
  dogNode.style.display = isAnyFilterSelected ? "none" : "";

  dogNode.innerHTML = `
  <img src="${image || perricoImg}" alt="Perro" />
  <br />
  <p><span class="like-count"></span>❤️ <span class="dislike-count"></span>🤮</p>
  <button class="like">Preciosísimo</button> <button class="dislike">Feísisimo</button>`;

  if (addToStart) {
    dogList.prepend(dogNode);
  } else {
    dogList.append(dogNode); // También existe appendChild();
  }
  giveDogNodeListeners(dogNode);
};

//Mucho cuidado, no puedes hacer que dogList = document.querySelector('#dog-list').innerHTML; y luego poner dogList = newDog + dogList, es una variable const, no cambias la variable si no innerHTML de la direccion que almacena:
// dogList.innerHTML = newDog + dogList.innerHTML.

/*

LISTENERS DE LOS BOTONES QUE AÑADEN PERRICOS.

*/

document.querySelector("#add-1-perrico").addEventListener("click", async () => {
  clearWarningText();

  disableAllAddPerricoButtons();
  await addPerrico();
  enableAllAddPerricoButtons();
});

document.querySelector("#add-perrico-start").addEventListener("click", async function () {
  clearWarningText();

  disableAllAddPerricoButtons();
  await addPerrico(false, true);
  enableAllAddPerricoButtons();
});

document.querySelector("#add-5-perrico").addEventListener("click", async function () {
  clearWarningText();

  disableAllAddPerricoButtons();
  addPerrico();
  addPerrico();
  addPerrico();
  addPerrico();
  await addPerrico(); // Esto no funciona, habría que usar promiseAll. Aquí se llaman en orden, pero la quinta podría terminar su ejecución antes de la segunda y este enfoque no funcionaría.
  enableAllAddPerricoButtons();
});

/*

LISTENERS DE LOS BOTONES QUE FILTRAN Y FUNCIÓN DE FILTRADO.

*/

const likeFilterButton = document.querySelector("#like-filter");

likeFilterButton.addEventListener("click", function () {
  likeFilterButton.classList.toggle("filter-selected");
  filterPerricos();
  //Mucho cuidado aquí con el orden de las cosas, de ir el toggle antes que el condicional, la primera ejecución se rompe siempre, ya que los oculta, adquiere la clase que permite mostrarlos y los vuelve a mostrar.
});

const dislikeFilter = document.querySelector("#dislike-filter");

dislikeFilter.addEventListener("click", function () {
  dislikeFilter.classList.toggle("filter-selected");
  filterPerricos();
});

function filterPerricos() {
  const isLikeFilterSelected = likeFilterButton.classList.contains("filter-selected");
  const isDislikeSelected = dislikeFilter.classList.contains("filter-selected");

  document.querySelectorAll(".card").forEach((dogCard) => {
    // si no hay ningún filtro aplicado, lo muestra
    if (!isLikeFilterSelected && !isDislikeSelected) {
      dogCard.style.display = "";
      return;
    }

    // si preciosismo aplicado y hay preciosisimo lo muestra
    const likeCount = dogCard.querySelector(".like-count").innerText;
    if (likeCount !== "" && isLikeFilterSelected) {
      dogCard.style.display = "";
      return;
    }

    // si feísimo aplicado y hay feísimo lo muestra
    const dislikeCount = dogCard.querySelector(".dislike-count").innerText;
    if (dislikeCount !== "" && isDislikeSelected) {
      dogCard.style.display = "";
      return;
    }

    dogCard.style.display = "none";
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
