//Nuevos métodos interesantes

/*

console.error
.pathname
.pop()

Predeclaracion de parametros
Desestructuracion de parametros
Acceso dinamico a propiedades de objetos
*/

/*
METODOS RELEVANTES DE LAS FECHAS:

-new Date();                fecha actual.
-new Date(2025,2,1))        AÑO, ÍNDICE DE MES, DÍA              1 de marzo de 2025 a las 00:00.
-new Date(2025,1,2, 14))    AÑO, ÍNDICE DE MES, DÍA, HORA        2 de febrero de 2025 a las 14:00.
-new Date('2025-02-01'))    AÑO-MES-DÍA                          1 de febrero a las 1 de la mañana.
-new Date('01/02/25'))      MES/DIA/AÑO                          2 de enero a las 00.
...

new Date('2025-02-01T12:00:00.000Z')    Construcción específica con formato ISO.
new Date().toIsoString())               Convierte a formato ISO.

now.toLocaleDateString());         Muestra fecha local          4/1/2025 
now.toLocaleTimeString());         Muestra hora local           3:02:454
now.toLocaleString());             Muestra ambas                4/1/2025, 3:02:454

A estos se les pueden pasar parámetros de este modo que definen la presentación de lo que imprimen.

now.toLocaleDateString(undefined, {
  year: '2-digit',
  month: '2-digit',
  day: '2-digit',
});                  04/01/25

Y forzar formatos:

now.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});                  sábado 4 de enero de 2025


.getTime()      Fecha en milisegundos calculados desde el 1 de enero de 1970 a las 00 UTC.

Esa fecha en milisegundos se llama TIMESTAMP, se pueden crear fechas con ese valor:

new Date(1736003991648);

También ayuda a operar con fechas:
*/

const date1 = new Date("2025-01-04T15:21:38.207Z");
const date2 = new Date("2025-01-04T15:25:38.207Z");

const msBetweenDates = date2.getTime() - date1.getTime();

const differenceInMinutes = msBetweenDates / 1000 / 60;

/*
En javascript, podemos comparar si una fecha es posterior a otra con los operadores >, >=, <, <=, pero no se pueden comparar con el operador `==` ni `===` directamente. Para comparar si las fechas son iguales, tenemos que comparar los milisegundos
*/

/*

.setFullYear()        cambia AÑO, pero puede usar parámetros opcionales para cambiar MONTH Y DATE.
.setDate()            cambia DIA DEL MES en hora local.
.setHours()           cambia HORAS, pero sus parámetros opcionales permiten alcanzar hasta MS.
.setMinutes()         cambia desde MIN hasta MS.
.setSeconds()         cambia S o MS, los MS son un segundo parámetro opcional.
.setMilliseconds()    cambia solo MS.

Todos estos métodos tienen una contraparte igual con "GET" en lugar de "set" que permite sacar el dato específico de esa fecha:
*/

function addDaysToDate(date, days) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
}

// En esta función para sumar días a una fecha dada, se declara un objeto fecha con el constructor clásico y luego se opera sobre el utilizando SETDATE para cambiar el DÍA por su día + cuantos haya que sumarle.

/*
CLAVE-VALOR CON OBJETOS.

Hacer operaciones con esta estructura (objetos en vez de arrays) es mucho más rápido a nivel de rendimiento, y según la operación también es mucho más fácil a nivel de código.

Object.keys()     convierte todas las propiedades de un objeto en un array de strings.
Object.values()   convierte todas los valores de las propiedades de un objeto en un array.
Object.entries()  devuelve un array con subarrays que representan propiedades y valores.
*/

const booksReadByCategory1 = { history: 4, fantasy: 5, horror: 1 };
let totalBooks = 0;

//Con KEYS.
Object.keys(booksReadByCategory).forEach((category) => {
  totalBooks += booksReadByCategory[category];
  console.log(`En la categoría ${category} te has leído ${booksReadByCategory[category]} libros`);
});
console.log(`En total, te has leído ${totalBooks} libros`);

//Con VALUES.
Object.values(booksReadByCategory).forEach((count) => {
  totalBooks += count;
});
console.log(`En total, te has leído ${totalBooks} libros`);

//CREACIÓN DINÁMICA del objeto booksReadByCategory
const books = [
  { title: "El ataque de los ornitorrincos en celo", category: "horror", read: true },
  { title: "La venganza de Xindasvinto", category: "history", read: true },
  { title: "Ruperto y los caballeros radiantes", category: "fantasy", read: true },
  { title: "Arcanum ilimitado", category: "fantasy", read: false },
  { title: "El señor de los anillos", category: "fantasy", read: true },
];

const booksReadByCategory = {};

books.forEach((book) => {
  if (!book.read) {
    return;
  }

  return booksReadByCategory[book.category]
    ? (booksReadByCategory[book.category] += 1)
    : (booksReadByCategory[book.category] = 1);
});
console.log(booksReadByCategory);

//El operador "||" en una asignación significa: "si el primer valor es válido se lo asigno a la variable, si no lo es, le asigno el segundo. Es casi como utilizar un ternario. En este caso de asignación, el segundo valor no llega a evaluarse. De invertir sus posiciones, currentCount siempre sería booksReadByCategory[book.category], porque el 0 siempre será un valor falsy.
const currentCount = booksReadByCategory[book.category] || 0;

/*
JAVASCRIPT EN EL NAVEGADOR.

.querySelector("#pepe")        devuelve el primer elemento del DOM con el id #pepe.
.querySelectorAll("#pepe")     devuelve un pseudo-array con todos los elementos con el id #pepe del DOM.

*El array del segundo método no es compatible con todos los métodos de los array, para utilizar algunos se ha de convertir a array real utilizando Array.from(X).
*Es mejor utilizar los ID para añadir funcionalidad en lugar de clases.
*Cuidado con como se carga el script de JS en el html. El orden importa.

----------------------------------------------

elemento.innerHTML            accede al HTML de un elemento.
elemento.innerText            accede al texto de un elemento (como acceder con innerHTML pero ignorando las partes de código HTML.)
elemento.style.display        accede a propiedades del css de un elemento.

elemento.disabled = true      desactiva la funcionalidad de un elemento.

elemento.parentElement        accede al padre del elemento.
elemento.previousSibling      accede al hermano anterior del elemento.
elemento.closest('.juan')     accede al ancestro mas cercano (x) del elemento.
document.getElementById("p1") accede al elemento con ese id.

----------------------------------------------

.classList                    devuelve la lista de clases de un elemento.
.classList.add('')            permite añadir una clase.
.classList.remove('')         permite eliminar una clase.
.classList.contains('')       permite saber si un elemento contiene una clase.
.classList.toggle('')         permite poner y quitar una clase. Si la tiene la quita, si no, la pone.

.className("pepe juan")       permite añadir todas las clases que necesites a un objeto, con add solo puedes darle una.

----------------------------------------------

.addEventListener('click', () => {});
Permite controlar lo que provocan los eventos del navegador, provocados o no por el usuario.

*Se debe tener mucho cuidado con como son añadidos los event listeners, para evitar situaciones en las que todos se añaden a todos los objetos a la vez, ya que eso genera que tengan que limpiarse y añadirse cada vez para evitar duplicados.

----------------------------------------------

setTimeout(()=>{}, 5000)      se ejecuta una función TRAS X tiempo.
setInterval(()=>{}, 5000)     se ejecuta una función CADA X tiempo.

*Los timeouts e intervals deben guardarse en una variable ya que devuelven un id que sirve para cesarlos. con sus funciones:

clearTimeout(id)    clearInterval(id)

----------------------------------------------

document.createElement('div')     sirve para crear elementos dinámicamente antes de agregarlos al DOM con algún append.
createTextNode('juanperico')      crea un nodo de texto que puede append-arse a otro como child.

.appendChild(john)                añade un hijo a un elemento.
.prepend(pep)                     añade un hijo a un elemento, pero antes de los demas, vamos, al principio.

----------------------------------------------

CONSEJOS

*IDENTIFICA CLARAMENTE EL PROBLEMA. PREGUNTATE ¿QUÉ TENGO QUE METER EN EL DOM? Profundiza en tu problema y llegarás a lo que hay que arreglar:
              "mi código no va porque se borra" -- superficial, sigue.
              "no va porque lo añado de esta manera" -- bien, sigue.
              "no va porque mi función..." -- bien, sigue.                      POR QUÉ (motivos) NO VA (siempre hay manera sencilla)

*Recuerda, PIENSA COMO RESOLVER EL PROBLEMA AL REVÉS O DE MANERA MÁS SENCILLA. ¿No puede ser otro camino/elemento el que lleve al mismo lugar?.

*Cuidado, no tengas código que se repita, optimiza. Ten cuidado también con tener dos pedazos de código que hagan los mismo de maneras diferentes.

*Hay variaciones de funciones que no requieren de crear una función derivada de la principal, si no de llamar a la principal con un PARÁMETRO:
*/
const addPerrico = async (addToStart) => {
  const perricoImg = await getRandomDogImage();

  const dogList = document.querySelector("#dog-list");

  const isAnyFilterSelected = document.querySelector(".filter-selected");
  // Si hay algún filtro seleccionado los perritos se añaden con display none.

  const htmlAdd = `<div class="card" ${isAnyFilterSelected ? 'style="display:none"' : ""}>
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

// También hay funciones que permiten implementar funciones más pequeñas para ahorrárte la creación de 3 pequeñas funciones distintas. La función de abajo pudo haber creado diferentes funciones para cada botón de filtrado. Pero es mejor que cada vez que se toque un boton de filtrado ambos llamen a la MISMA función y sea ella quien determine cuál ha sido accionado y qué debe devolver:

const likeFilterButton = document.querySelector("#like-filter");

likeFilterButton.addEventListener("click", function () {
  likeFilterButton.classList.toggle("filter-selected");
  filterPerricos();
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

Las funciones de los addEventListeners tienen un parámetro que solemos dejar en blanco pero que tiene mucho valor. Ese parámetro es un objeto que contiene la información y propiedades del evento ejecutado, su nombre es EVENT ARGUMENT.

event.preventDefault()      Evita aplicar el comportamiento por defecto del navegador provocado indirectamente por un evento.

*Esto puede ser útil para evitar que una página se recargue al enviar un formulario, comportamiento por defecto del submit.

*Hay algunas propiedades comunes a la mayoría de eventos. Cuando utilices eventos nuevos, pide un console.log del mismo para conocer sus propiedades y saber qué contienen. Solo así sabrás como acceder a ello en tu código.

*Dentro de una etiqueta form en HTML, todos sus botones hacen de submit del formulario.


Los eventos se propagan de abajo hacia arriba. Esto se conoce como EVENT BUBBLING. Si por algún motivo necesitas evitar que un evento se propague hacia su padre puedes usar el parámetro "event" del listener junto con la siguiente función:

event.stopPropagation();


Podemos obtener un objeto basandonos en el valor de uno de sus atributos de la siguiente manera:

document.querySelector('[placeholder="Escribe tu tarea"]')    pseudoselector de atributo.

----------------------------------------------

PÍLDORA SOBRE FORMULARIOS

event.target                      Target es una propiedad del obj. "event" que hace referencia al elemento que disparó el evento.

new FormData(event.target);       Objeto que recopila los valores de un formulario sin necesidad de acceder a cada input.
formData.get('nameDelInput');     Obtiene el valor de un input del formulario a través de su propiedad name.

----------------------------------------------

LOCALSTORAGE

localStorage es una base de datos simple dentro del navegador donde puedes guardar información que persiste incluso si cierras y vuelves a abrir la página. Esta base de datos sigue la estructura de clave - valor.

localStorage.setItem('nombre', 'Juan Pérez')    Guarda el valor 'Juan Pérez' con la clave 'nombre'.
localStorage.getItem('nombre')                  Recupera el valor de 'nombre' -> 'Juan Pérez'.
localStorage.removeItem('nombre')               Elimina 'nombre' del localStorage.
localStorage.clear()                            Borra todo lo guardado en localStorage.

Si llamas al valor de una clave con getItem tras eliminarlo, obtendrás un null.

Para guardar objetos en esta base de datos necesitas hacer una conversión del objeto a un string JSON (JavaScript Object Notation). Cuidado porque un objeto convertido no puede ser utilizado como objeto. Para reconvertirlo en un objeto funcional utilizaremos parse.

const persona = { nombre: 'Ana', edad: 30 }

JSON.stringify(persona)                         Convierte el objeto en un string JSON. (Se ha de almacenar en una variable)
.setItem('persona', JSON.stringify(persona))    Guarda un objeto como string JSON.
JSON.parse(localStorage.getItem('persona')      Recupera el objeto guardado y lo convierte de JSON a objeto usable.


*Es mejor hacer copias de los objetos que modificarlos directamente. No toques el objeto con el que trabajas:
*/

function editTask(taskId, propsToChange) {
  // coger el nuevo objeto tarea
  // buscar la posición que ocupa en el array
  // modificar la tarea en el array
  // meter el array en el local Storage
  const taskIndex = taskList.findIndex((task) => {
    return taskId === task.id;
  });

  taskList[taskIndex] = {
    ...tasks[taskIndex],
    ...propsToChange,
  };

  console.log(tasks);
  saveTasks();
}

/*

LAS PROMESAS

Las promesas sirven para gestionar código asíncrono, código que, en algún momento se va a ejecutar. Su uso más común es hacer una llamada a servidor, mi código hace una llamada pero se espera a que el servidor se la devuelva.


*/
