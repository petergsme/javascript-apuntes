const perricosArray = [
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg",
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_10439.jpg",
];
//'perricosArray' es el contenedor de las imágenes de los dos primeros perricos que se pintan en pantalla por defecto al cargar la página.

const giveListen = () => {
  document.querySelectorAll("#dog-list .card").forEach((card) => {
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
  });
};

function renderPerricoArray() {
  const dogList = document.querySelector("#dog-list"); //Guardamos el div específico al que queremos acceder en una variable.
  dogList.innerHTML = ""; //Limpia el html. De no hacerlo, en cada ejecución de 'addPerrico' se volverían a añadir los anteriores perricos. Al limpiar el interior del div, tecnicamente borra los anteriores, pero la ejecución de 'addperrico' los vuelve a añadir, como si no hubiera pasado nada.

  perricosArray.forEach((dogImage) => {
    const htmltoAdd = `<div class="card">
  <img src="${dogImage}" alt="Perro" />
  <br />
  <p>❤️ 🤮</p>
  <button class="vote-nice">Preciosísimo</button> <button class="vote-ugly">Feísisimo</button>
</div>`;

    dogList.innerHTML += htmltoAdd; //Como el HTML es en esencia un string multilínea, para añadir más sin borrar el que ya hay operamos con +=, que CONCATENA los strings, o lo que es lo mismo pone el codigo del html al lado del anterior.
    giveListen();
  });
}

renderPerricoArray(); //Ejecuta la función de arriba para llenar la página con los dos perricos iniciales.

const addPerrico = async () => {
  const perricoImg = await getRandomDogImage();
  perricosArray.push(perricoImg); //Añadimos la imagen del nuevo perrico al array inicial.
  renderPerricoArray(); //Ejecutamos la función anterior con la nueva imagen. Básicamente borra todas y mete todas y la nueva de nuevo dentro de #dog-list.
};

const addFivePerricos = async () => {
  for (let count = 1; count <= 5; count++) {
    const perricoImg = await getRandomDogImage();
    perricosArray.push(perricoImg);
  }
  renderPerricoArray();
};

//El problema es que se usa un push para meterlos en renderperricoArray en lugar de en otro.

document.querySelector("#add-1-perrico").addEventListener("click", () => {
  addPerrico();
});

document.querySelector("#add-5-perrico").addEventListener("click", function () {
  addFivePerricos();
}); //La he hecho así en vez de usar 5 veces la otra, porque así carga los 5 perritos al mismo tiempo, del otro modo los sacaba aparecían de uno en uno. Según Josmi esto tecnicamente es peor, porque en lugares con mala conexión, veran los recuadros pero no verán los perros hast que terminen de cargar.

//La función/método .addEventListener incluye un primer parámetro en referencia a lo que está escuchando. Se trata de un string específico. Hay animation, clipboard, composition, focus, fullscreen, keyboard, mouse, pointer, scroll, touch y transition events. Cada uno presenta diferentes strings de evento que podrían ser escuchados con un addEventListener para actuar al ocurrir su ejecución. (hay mas events que he dejado fuera, se encuentran en esta web --> https://developer.mozilla.org/en-US/docs/Web/Events).

//Su segundo parámetro hace referencia a lo que debe cambiar con ese evento, en este caso es la función que ejecuta addPerrico(); Hay un tercer parámetro que, de momento, no usaremos.

//Para arreglar el tema de el reseteo del HTML. Tendríamos que crear funciones adicionales y reestructurar. Tomaríamos la parte de renderPerricoArray que sirve para acceder a la ubicacion, y el html que debemos añadir y como lo añadimos. Eso no necesitamos llamarlo ahí, podemos crear una nueva variable que añada los perritos nuevos, en base a la foto. Tras eso deberiamos incorporar esa nueva funcion en las que usamos para añadir perricos, en lugar de usar la vieja que resetea. Luego los listeners se quedan viejos asi que crea una funcion que los añada y metela en las que utilizas para añadir perricos. Finalmente arreglas la funcion vieja para que utilice la que añade codigo y no se repita. Y añades los listeners.
