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

----------------------------------------------

LAS PROMESAS

Las promesas permiten crear/gestionar/utilizar código asíncrono. Se trata de código que no se ejecuta a la vez, código que depende una respuesta externa, como hacer una llamada a servidor. Al hacer una llamada a un servidor mi código normalmente seguiría ejecutandose en orden, pero en algún otro lugar el código del servidor estaría también ejecutandose para enviar una respuesta a mi petición. Si mi código utiliza una variable cuyo valor depende de la respuesta que ese servidor externo debe enviarme, ese pedazo de mi código no debe seguir su ejecucion hasta obtener esa respuesta.

Esto permite que se ejecuten varias operaciones a la vez sin parar mi código. En caso contrario hasta que una operación no hubiera terminado no podríamos hacer otra cosa, porque en javascript el código es secuencial.

fetch();    hace llamada a servidor, una promesa.

async       Anuncia que una función contiene código asíncrono.
await       Pausa la ejecución de una función en una promesa. Hasta no obtener una respuesta, el código que sigue no se ejecuta,
            ya que depende de la promesa. Todo ese código es lo que llamamos código asíncrono.

*Alguna función suelta no permite utilizar código asíncrono.
*Ten cuidado con todo lo que se ejecuta trás una función con código asíncrono pero fuera de ella y que depende de su compleción. Podrías estar intentando acceder a código que aún no ha terminado su ejecución asíncrona. La manera de solucionarlo sería utilizar await y async dentro de esa ejecución para no ejecutar el código tras tu función con código asíncrono hasta que la misma no haya terminado su ejecución.


¿QUÉ PASA SI EL SERVIDOR FALLA?

try {} catch(error) {}    Mecanismos para que si algo falla tu puedas hacer algo con ese código. Van de la mano con awaits.

El código dentro de TRY se ejecuta línea a línea. En caso de ocurrir un error que pare su ejecución, salta al error y se ejecuta SU código. La clave está en que gracias a try & catch, el resto de tu código sí que intentará ejecutarse. Normalmente un error detiene el código y todo lo que sigue no se ejecuta. Es una manera de aislar funciones susceptibles de fallar del resto del código.

Planteemos otro supuesto. En caso de que el servidor sí devuelva una respuesta el código se ejecutaría de manera normal. Pero, ¿Y si la respuesta es que no ha podido enviar respuesta? En ese caso habría que comprobar qué ha respondido el servidor y en caso de ser una negativa, lanzar un erro manual utilizando "throw new Error();":
*/

async function getDogBreedList() {
  const url = "https://dog.ceo/api/breeds/list/all";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json.message;
  } catch (error) {
    console.error(error.message);
  }
}

/* 
.json()                   Convierte la respuesta del servidor en un objeto con el que podemos trabajar.
.ok                       Es una propiedad de las respuestas de servidor, sirve para comprobar si todo ha ido bien.

Se puede propagar un error hacia fuera si quieres que se pare la ejecución, la manera es metiendo otro throw Error dentro del catch. También podrías controlar de otras maneras el fallo del servidor utilizando try/catch en alguna otra función o algún otro metodo mas sencillo.

Promise.all(iterable);    Una Promise que se cumplirá cuando todas las promesas del argumento iterable hayan sido cumplidas, o bien 
                          se rechazará cuando alguna de ellas se rechace.

Los ENDPOINTS de una API son sus URLs. Cada endpoint devuelve algo distinto.
Los apis tienen diferentes grupos de objetos que llamaremos ENTIDADES.

Las funciones con async y await solo puede llamarse dentro de otras funcionas igualmente asíncronas. Necesitas operar con tus datos desde esos confines. Una función normal puede incorporarse dentro de una asíncrona pero no al revés.

----------------------------------------------

EJERCICIO DE LOS PERRICOS, SELECT, Y LOS FILTRADOS.

Para filtros, en vez de ocultar es mejor borrar y luego añadir. Redefine tu contenido en lugar de meter parches y más parches.

Lo de tomar la respuesta de un API, para construir ya un objeto de una manera desde la propia respuesta es interesante para nuestro proyecto, aunque aun no estoy seguro.

----------------------------------------------

EL "THIS".

this      

Se trata de una palabra reservada que representa cosas diferentes en función de donde la estemos utilizando. Dentro de un eventListener se refiere al elemento que lleva el listener, pero hay una excepción: con funciones flecha el "THIS" pilla el elemento del contexto superior (window, la ventana del navegador) desde donde está declarada esa función flehca (Esto no sucede con la función clásica).

"THIS" permite acceder a los datos del elemento que lo contiene, por ejemplo un objeto. Si almacenas el valor de ese "THIS" interno en una variable sería como guardar la referencia a ese objeto, podrías usarla dinamicamente para ir cambiando una variable y accediendo a los valores de un objeto.

OTRA MANERAS DE CREAR OBJETOS (CON THIS)
*/

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;
  this.greetings = () => {
    console.log(`Hola, soy un ${this.breed} llamado ${this.name}`);
  };
}

/*
Si usas una función con "NEW", si la llamas con ese "NEW", su "THIS" interno ya no tomará el "WINDOW", se tomará a sí mismo.

----------------------------------------------

CREAR OBJETOS CON CLASS

class
constructor(){}

"CLASS" funciona igualmente de constructor pero es más sencillo a la vista:
*/

class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  greetings() {
    console.log(`Hola, soy un ${this.breed} llamado ${this.name}`);
  }
}

/*

----------------------------------------------

EMPEZAMOS CON REACT (TYPESCRIPT EN EL FUTURO)

*Los strings con comillas invertidas en los que metamos variables, se llaman template literals.

&& y || EN ASIGNACIONES

&&      si el valor del primer argumento es verdadero, devuelve el segundo argumento. Si es falso, devuelve el primero. 
||      si el valor del primer argumento es verdadero, devuelve el primer argumento. Si es falso, devuelve el segundo.

*Cuando decimos equivalente, queremos decir que ese valor utilizado como boolean se evalua como true o false. Por ejemplo, una cadena de texto no vacía es true.
*En asignaciones ya no compruebas si los valores son true, para hacerlo usarias boolean(varA && varB).

*Recuerda, puedes asignar valores por defecto a parámetros en funciones.

Una expresión JavaScript && devuelve el valor de su lado derecho (en nuestro caso, la marca de verificación) si el lado izquierdo (nuestra condición) es true. Pero si la condición es false, toda la expresión se convierte en false. React considera false como un “agujero” en el árbol JSX, al igual que null o undefined, y no renderiza nada en su lugar.

----------------------------------------------

PROPERTY SHORTHAND

const name = "pepe";

const loquito = {
  name
};

No hace falta poner name: name;

----------------------------------------------

DESESTRUCTURACIÓN DE OBJETOS.

'const { nombre, apellido, edad, sexo } = persona;'

La desestructuración de objetos sirve para extraer las propiedades de un objeto y asignarlas a variables con sus mismos nombres. La ventaja es que no necesitas llamar a las propiedades con objeto.propiedad, puedes escribir el nombre de la propiedad directamente. Es como si hubieras escrito:

const apellido = persona.apellido;  --> en su lugar usarías "apellido"
const sexo = persona.sexo;          --> en su lugar usarías "sexo"

*Podrías asignar valores por defecto durante la desestructuración, así si persona no tuviera alguna de las propiedades, las variables tendrían un valor predeterminado.
*Cuidado, si quieres desestructurar dos objetos que tienen una propiedad que se llama igual tendras que cambiar el nombre de una de ellas así:

const {job: job2} = objeto      De este modo, job: job2, dices que tome valor de job de objeto pero lo ponga en job2 en vez de job.

const {person: {name}} = persona    Con esto desestructuras un nivel mas abajo, la propiedad name de person, a su vez de persona.

*Todo esto puede usarse con arrays.

----------------------------------------------

SPREAD OPERATOR

El spread operator tiene un problema cuando trabajamos con objetos. Por lo general al usarlo y modificar el objeto clonado, las propiedades del original no cambian. Pero si una de las propiedades del original que cambiamos tiene dentro un objeto, se cambiara para ambos. Esto sucede porque en estos casos el valor de esa propiedad no se clona, se lleva la referencia en memoria que apunta a ese objeto que contiene. Se soluciona así:

const segundoObjeto = {...primerObjeto, skills{...primerObjeto.skills}}

----------------------------------------------

REST PROP

Sirve para guardar el resto de propiedades en otro objeto que nombramos como queramos, en este caso rest.

const { nombre, ...rest } = persona;

rest = {
  apellido
  edad
  sexo
}

----------------------------------------------

??

Solo se usa con null y undefined.

const result = object1 ?? object2     Si el primero argumento no es null o unedefined, devuelve el primero, si no el segundo.

----------------------------------------------

OPTIONAL CHAINING - ?.

Se utiliza siempre con propiedades de objetos.
Cuando intento acceder a las propiedades de un objeto que resulta ser undefined o null, JS peta. Para evitar que pete, si le pones el interrogante, ya no peta, devuelve undefined.

const isJosemi = (persona) => {
  return persona.name === "Josemi";  
}
Aquí explota.

const isJosemi = (persona) => {
  return persona?.name === "Josemi";  
}
Aquí no explota.

----------------------------------------------

REACT

Para empezar con react hay que montar un proyecto en react. Estaremos ejecutando un servidor de node en nuestro ordenador, para facilitar el desarrollo con React. Nos permitirá ver los cambios que hagamos en tiempo real. Vamos a escribir un código diferente al que el navegador tendrá que ejecutar(ese html raro se llama jsx). Vite se encargará de hacer esa traducción. 

Empezamos creando una nueva carpeta en un sitio que no sea el escritorio, y abrimos el terminal en visual studio.

Instalamos Vite en la carpeta en la que estamos o queremos instalarlo.

npm create vite@latest .               instala en la carpeta actual
npm create vite@latest ReactProject    instala en la carpeta ReactProject, subcarpeta de la carpeta actual.

Escribiendo cd en el terminal seguido del nombre de una subcarpeta, mueves las operaciones siguientes del terminal a ese lugar.
No te preocupes, tras esa primera instalación te dirá qué comandos debes escribir para seleccionar la carpeta de instalación e instalar los paquetes restantes (npm install y npm run dev). 

Aparecerá un enlace local.

*Recuerda que cada vez que quieras trabajar en tu proyecto, si no estas abriendo su carpeta, deberas escribir cd nombrecarpeta y npm run dev. Es recomendable que abras directamente la carpeta del proyecto para evitar líos.

*Al traerlo de git con un pull, lo que tienes que escribir, dentro de la carpeta correcta, en el terminal, es:
npm install y npm run dev.

----------------------------------------------

ESTRUCTURA DE UN PROYECTO DE REACT

node_modules   cositas para funcionar.
index.css      estilos generales de mi proyecto.
main.jsx       documento principal.
app.jsx        punto de entrada de nuestro proyecto, el codigo se ejecuta desde aquí.

----------------------------------------------

REACT DÍA 2

REACT es una libreria, y de las más difíciles. Así que si sabes REACT podrás adaptarte a otras librerías, con sus respectivas curvas de aprendizaje.Git toma el código que escribamos con REACT, que no es javascript puro, y lo traduce.

npm run build     Toma el código en react y crea el js resultante que utilizarás.


Los componentes de REACT son funciones, siempre devuelven algo: null, codigo, valor primitivo.

*LA CONSISTENCIA EN EL CÓDIGO ES LO MÁS IMPORTANTE. Usa siempre las mismas comillas, siempre el mismo tipo de función(flecha/normal).

Tras crear un componente y almacenarlo en una variable, para usarlo deberas meterlo dentro del return de una función.
El return si devuelve mas de una linea de codigo debe ir entre parentesis. Y si devuelve mas de un elemento jsx tienes que agruparlo en un fragment (<> etiquetas vacias.)

*Los nombres de componentes se escriben en mayúscula. SIEMPRE.
*Si escribes "on" como propiedad de un elemento jsx te sugerirá todos los on que hay, son eventos.
*HandleAlgo es la convencion de nombrado de funciones para elementos jsx.

Puedes meter las funciones en línea o como funcion aparte en funcion de si la vas a reutilizar o no.

----------------------------------------------

COMO PASAR INFORMACIÓN DE UN COMPONENTE A OTRO.

atributos en html --> propiedades en jsx
Los componentes tienen un ÚNICO parámetro (como parametro de funcion), que llamaremos props, y contendrá todo lo que yo le pase.

Las llaves le dicen a jsx que estoy pintando js. Entre llaves puedo poner lo que quiera de js, si no las lleva no funcionará.
Puedo meter funciones, variables...

Si trabajas con propiedades es común trabajar con su destructuración. Incluso puedes ver las props desestructurada en el inicio de la funcion en lugar de su cuerpo.

Cada componente va a ir en un único fichero como regla general. E intentaremos nombrar los archivos como "MiPrimerComponente.jsx"
Si yo quiero usar en mi componente una funcion de otro fichero. Lo que harás sera sacar ese componente de ahi para usarlo donde este la funcion. Para ello, pon export delante de tu componente. export trata ese fichero como un objeto con la propiedad tucomponente.

En el fichero donde quiera utilizarlo tiene que haber un import:

import {MiPrimerComponente} from './MiPrimerComponente.jsx';

*Si en lugar de escribir export pones, export default no hace falta poner llaves en el import. Lo primero se llama NAMED EXPORT. Lo otro EXPORT DEFAULT, siempre va fuera de llaves. Se puede exportar lo que quieras, todo lo que tengas que utilizar en otro sitio.

import ComponenteExportDeafult, {MiPrimerComponente, loquesea, pepito} from './MiPrimerComponente.jsx';

Puedes importar algo con otro nombre.
import {MiPrimerComponente as Pepito} from './MiPrimerComponente.jsx';

*Usaremos siempre named export.
*Pueden exportarse varias.

Cuando hagas componentes, harás una carpeta para cada uno. Y tendras una hoja de estilos especificas que impotaras en cada componente con import ./button.css

Podrías meter en app solo un uikit, y dentro del uikit.jsx todos los componentes.

App es toda tu web. React es una unión eficiente de js, html y css. creas componentes en ficheros especificos, les otorgar estilos de hojas especificas y usas una hoja general de estilos también.

----------------------------------------------

Del tutorial de REACT son importantes:

En DESCRIBIR LA UI:
-Pasar props a un componente
-Renderizado condicional
-renderizado de listas.
-mantener tus componentes puros.

Estoy super confundido con el modo de funcionar del puto React, hasta los cojones.

------------------------------------------------

Los booleanos no se pintan en HTML con React, para pintarlos hay que usar String(false), convertir el boolean en un string.

La propiedad children sirve para ponerle un hijo a tu componente. Se la tienes que indicar en las propiedades si las desestructuras, o
ponerla dentro del elemento en el return. Luego simplemente se lo pones cuando metas el componente en otro lado.

CICLO DE VIDA DEL COMPONENTE

Aunque un oomponente se rerenderize el html asociado a ese componente no tiene por que cambiar necesariamente. La operacion mas costosa en una web es actualizar el HTML.

-------------------------------------------------

HOOKS

Es una función de REACT. 

USESTATE

Variable de componente que sirve para:
-no reiniciarse cuando el componente se rerenderice.
-rerenderizar el componente al cambiar su valor.

Debe ser importado, y se usa siempre d ela misma forma.

const [nombrevariable, setNombrevariable] = useState(valorpordefecto);

1er elem. --> valor variable
2o elem. --> función para actualizar el valor, no se puede usar otra. ("setter" "modificador de la variable de estado").

*Los hooks se tienen que declarar siempre en el primer nivel del componente.
*useState(valorpordefecto) solo se ejecuta la primera vez que el componente se monta, no en el de actualización.
*Puede haber varios en una misma función.
*Su valor puede ser cualquier cosa, también un objeto.

Lo utilizaremos cuando necesitemos almacenar informacion local, mostrar u ocultar informacion y gestionar estados asincronos.

Intenta evitar los duplicados. Si tienes mas de una variable de estado piensalo un poquito mas.

LEETE LOS APUNTES DEL NOTION, ESTÁS JODIDO.

-------------------------------------------------------------------

TYPESCRIPT

Añadido a javascript para forzar el tipado. (muy resumido)

Al declarar una variable ts infiere del valor que le has dado que ese es su tipado y si intentas asignart un valor de otro tipo sera rechazado. Para asignar de verdad el tipo:

let name: string | number = "pepito".
let johny: String[] = ["a", "b"];     con los arrays siempre pon el tipo,salvo que ya tenga valores dentro.

Intenta no hacer trabajo redundante, en el de arriba no haria falta poner varias opciones, solo string y para eso solo dale string de valor.

Para objetos debes declarar un tipo nuevo con type o interface.

type User = {
  name: "joan" | "rob" | "carlos";
  age: number;
  isMurciano: boolean;
}

Se le puede dar un valor por defcto a alguna de las propiedades, en la desestructuración.

Puedes poner propiedades opcionales con isMurciano?: boolean; Es lo que ya vimos del operador de interrogante que permite que las cosas sean undefined o null sin que js explote.

-----------------------------------------

TYPESCRIPT DE NUEVO

Hemos empezado a trabajar con perricos.

Sus procesos en excalidraw son buenos.
Es importante pensar antes de escribir código.

1. Desglosa las tareas, y busca la tarea central del proyecto.
2. Utiliza datos de prueba y sin trabajar aun sobre funcionalidades, crea el código necesario.
3. Ve añadiendo las funcionalidades reales poco a poco e incrementando la complejidad del asunto.


Para los await guardarlos en variables, asi seras capaz de saber facilmente donde se rompe tu codigo si sucede.

----------------------------------------------------------------------

useEffect sirve para ejecutar algo solo cuando el componente se monta.
No puede ser asíncrono en sí mismo, pero puede contener codigo asincrono que se ejecute en su interior.
si introduces un return en su cuerpo con una funcion flecha el codigo que devuelve se ejecutara en la destruccion del componente.

CON LOS useEffect SIEMPRE PON CONSOLE.LOG PARA VER CUANDO ENTRA EL CODIGO Y CUANDO SE VA.

.then es una alternativa a async y await.

onClick={() => toggleCompletedTask(task)}
onClick={toggleCompletedTask(task)}

La diferencia entre estos dos, es que el segundo se ejecuta al renderizarse el componente y asigna el return de esa funcion al onclick, que no tiene mucho sentido.

La primera asigna al onclick la EJECUCION de la funcion.

Cuando usarás una funcion dentro de un set de usestate?
Pues cuando el nuevo valor dependa del viejo, cualquier otro caso no hace falta funcion.

CUIDADO, si una variable de estado esta en un padre actualizará todos los hijos al cambiar. Hay veces que conviene crear un componente diferente con una variable de estado e incluirlo en el primero, para evitar actualizar todos cada vez que cambia.

-------------------------------------------

Empieza por un único componente.
Luego ya lo puedes desglosar con sus useStates si quieres. es complejo y dependerá de simplifcar codigo o hacerlo mas eficiente.

Cuanto mas independientes sean los componentes entre sí cuando los desgloses, mucho mejor.
Esto tiene que ver con el componente addTask, que ahora mismo depende de saber que debe recibir un metodo que esta en otro sitio.
es mejor tener ese otro metodo en otro sitio de manera independiente y simplificar el componente para que no dependa de ello.

-------------------------------------------

¿POR QUÉ CREAR COMPONENTES?

-para mover usestates a otro sitio para no renderizar inutilmente o de mas un componente.
-si yo puedo mover un monton de logica a otro componente, mi codigo va a ser mas facil de entender. Tendré codigo mas sencillo.

-------------------------------------------

Para estudiar REACT tienes de:

-ReactProject>app.jsx - arrays.

-ReactPerricos:
  -app.tsx - general.
  -dogs.ts y dogs.service.ts - apis y tipos.
  -mierdon.tsx - componente con mas cosas.

-ReactToDO:
  -app.tsx
  -addtask.tsx - componentizando algo complejo
  -task-models.ts - tipado

--------------------------------------------

MEMOIZACION Y USEMEMO.

Se trata de un hook de REACT. Solo tienes que saber cuando toca usar un hook de react y por qué.
Sirve para optimizar cálculos y operaciones complejas. (como con arrays de longitudes variables.)

Almacena en caché(memoria interna) el resultado de una función, para que si se vuelve a llamar con los mismos parametros de entrada, no la vuelva a ejecutar y solo devuelva el resultado calculado previamente.

Lo usaremos cuando trabajemos con arrays y cuando esa operacion sea menos pesada que la MEMORIZACION.

const valor = useMemo(calcularvalor, [dependencias])
-su primer parametro es una funcion QUE DEBE DEVOLVER UN VALOR, esta función depende de las dependencias que le pasas.
-un array de dependencias, que funciona como el del useEffect, se recalcula cuando sus dependencias cambian.

function TodoList({ todos, tab, theme }) {
  const visibleTodos = useMemo(() => filterTodos(todos, tab), [todos, tab]);
  ...

*Debes guardar el valor de useMemo en una variable para poder utilizarlo. Si no vas a usar ese valor en otro lado, no debes usar un useMemo si no un useEffect. Y si tienes un useffect pero necesitas usar el valor en algun lado entonces buscas un useMemo.

*Si tu codigo no devuelve nada, useEffect. Si devuelve algo y depende de valores calculados entonces useMemo.
*useCallback es como useMemo pero ÚNICAMENTE para funciones. (Crea una función memoizada).
-----------------------------------------------

DEBER ACTUALIZA LOS FILTROS DE LOS PERROS CON EL useMemo.

-----------------------------------------------

Sobre usar componentes open source, ¿cómo saber si es buena idea hacerlo?

-Son personalizables
-Han sido actualizados recientemente en gitHub (<1 año)
-Tiene mas de 1k estrellas en gitHub.
-Hay pocos issues abiertos (peticiones de personalidad y bugs) o se actualizan con relativa frecuencia.
-Tiene muchos contributors.
-Descargas semanales en NPM.

*Swiper js recomendada.

----------------------------------------------

React router.

Es una librería para crear varias páginas en mi proyecto de React.
Para navegar entre páginas tienes que usar un componente específico de router, Navlink o Link.

Para el menú principal tienes que usar index routes.

----------------------------------------------

APUNTES CLASE 30/04

Git Graph te informa de las ramas del repositorio, el momento en que se crearon, los commits realizados.
La idea es sacar ramas, añadir cosas y luego realizar una petición de push a la rama principal.

La otra extensión recomendada es GitLens (antes tenía una mejor experienia de usuario). Tiene una ventana de ramas, otra de commits y otra que permite borrar ramas de la nube tras hacer merge.

*Borra las ramas despues de hacer los merge.
*Añade colaboradores a tu repositorio para montar tu proyecto.
*En vez de hacer muchos commits pequeños para una unica funcion, es recomendable que todos esos commits sean unidos en uno antes de pushear a la rama principal.

La manera de trabajar es tener dos ramas. 
DEVELOP
MAIN

Vas trabajando en develop hasta que quieras hacer una release y entonces brancheas mergeas y borras branch.
Puedes hacer click abajo a la izquierda para crear nuevos branches.

usa el comando git flow init y repsonde debidamente sus preguntas.
cuando quieras trabajar en algo: git flow feature start my-feature. Crea una rama a partir de develop.

No es mala idea pasarte a hacer commits y tal con VSCode.

Si has hecho un commit pero quieres tirar para atras te tienes que ir al anterior commit de esa rama y reset current branch to this commit y tienes un par de opciones sobre si perder el codigo que has escrito o solo cambiar el nombre del commit o hacer mas adelante el commit.

Tras eso en github en web puedes hacer una pull request. La pull request es una peticion de mergear tu linea con la principal o la de develop.

Puedes hacer reviews de una pull para que la gente cambie cosas.
En las reviews intenta hacer de manera suave las criticas.

Tras mergear tu branch haz delete local & remote de la feature que creaste.

Si quieres ir atras, en VSCODE, click derecho revert en la que has mergeado. Y luego ya commitear y pushear ese revert.


Vale, tu idea es que tus ramas de develop de funciones vayan por delante de tu version principal, si se quedan por detras tienes que hacer click derecho y pedirle hacer un rebase, si hay conflictos tienes que ir a apañarlos.

RECUERDA REVISAR
USEMEMO
USESTATE
USEFFECT
USECONTEXT

existen tambien customhooks.

Puedes usar git push force with lease para algo de resolver conflictos y poner al dia la ramas.

El asunto es que cuando te pongas a trabajar en el dia mires si tu rama develop esta por delante y si lo esta mergea con tu rama de features para evitar errores.

Para clonar de git puedes poner git clone + la url del proyecto a clonar en tu terminal. (si pones un punto en algun lado se instala en la carpeta actual).

TIPS DE ORGANIZACION PARA EL GRUPO DE LAS CARTAS.

Siempre hay carpeta de components.
Siempre hay carpeta de páginas.
(Cada pagina tiene una carpeta y cada componente tambien.)

nombres carpetas con guion y en minusculas.

Si un componente solo se usa en una página se pone en la carpeta de la página y no en components.

Las imagenes igual que los componentes pueden llegar a tener su carpeta assets.esta carpeta deberá estar donde se usen esas imagenes.

Usa rename symbol para cambiar nombres, luego nombres de ficheros y actualiza imports.

*/

/*

USECONTEXT

Para comunicar dos componentes, como por ejemplo hacer un usestate que afecte a ambos. si esos dos componentes estan paralelos en el arbol, es decir son hermanos tienes que meter la información en el padre.

La idea despues es ir pasando las propiedades, creandolas y pasandolas. de arriba a abajo y utilizando un usestate donde si tenga que modificarse.

usecontext. contexto como componente especial. donde ponga ese usecontext, todos los descendientes van a poder acceder a esa informacion y modificarla.

La unica condicion que hay con los contextos:
-
-
-

creas un componente de contexto MiComponenteContext.

Copiaos un contexto y empezad a cambiar cosas.

Primero se define el objeto con la información del contexto.
interface MyTypeContextState {...}

creamos un componente que se llame igual que el fichero y lo exportamos. Le damos un createcontext con unos valores por defecto.
export const TasksContext = createcontext<MyTypeContext>({})


Hasta ahora hemos creado el contexto ahora lo definimos:
interface TaskContextProviderProps {
    children: React.ReactNode.
}
Esta interfaz tiene minimo una propiedad, children para poderle pasar como hijo segun dice josmi los componentes del arbol que necesiten hacer uso de el.

Finalmente hay una cosa mas.
export const TaskContextProvider ... (miralo)

Ahora me voy a componente quiero convertir en contexto. Y me llevo de allí lo que necesite usar a traves de varios componentes.

Cuando quieras que un componente acceda a algo de eso, tienes que darle el contexto a su padre.
Puedes ponerlo como un elemento mas que envuelva el return de un componente.O hacerlocon su padre.
Y en todos los hijos usar un hook de react que permite usar todo lo que hay y pasas como parametro

Muchas veces para hacer codigo mas simple es mejor combinar css y react (ejemplo de flex de iconos de formulario.)

Entendiendo React Context

Definición del contexto: Primero se define una interfaz con los tipos de datos que contendrá el contexto y luego se crea el contexto con un valor inicial.
tsxinterface TasksContextState {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

export const TasksContext = createContext<TasksContextState>({
  tasks: [],
  setTasks: () => {}
});

Creación del Provider: Se crea un componente que proporcionará el contexto a sus hijos, generalmente usando useState para manejar los datos.
tsxexport const TasksContextProvider = ({ children }: TasksContextProviderProps) => {
  const [tasks, setTasks] = useState<Task[]>([
    { text: 'Tarea 1', isCompleted: false, id: Math.random() },
    { text: 'Tarea 2', isCompleted: true, id: Math.random() }
  ]);
  
  return <TasksContext.Provider value={{ tasks, setTasks }}>{children}</TasksContext.Provider>;
};

Envolver la aplicación: En el componente principal (App.tsx o similar), se envuelve la aplicación con el Provider.
tsxfunction App() {
  return (
    <TasksContextProvider>
      <MainComponent />
    </TasksContextProvider>
  );
}

Consumir el contexto en componentes: Los componentes hijos pueden acceder a los datos usando useContext.

Uso en un componente
Para usar el contexto en cualquier componente hijo, se hace lo siguiente:
tsximport React, { useContext } from 'react';
import { TasksContext } from './path/to/context';

const TaskList = () => {
  // Acceder al contexto
  const { tasks, setTasks } = useContext(TasksContext);
  
  // Función para marcar una tarea como completada
  const toggleTaskCompletion = (id: number) => {
    setTasks(
      tasks.map(task => 
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };
  
  // Función para añadir una nueva tarea
  const addTask = (text: string) => {
    setTasks([...tasks, { text, isCompleted: false, id: Math.random() }]);
  };
  
  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.map(task => (
          <li 
            key={task.id}
            style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
            onClick={() => toggleTaskCompletion(task.id)}
          >
            {task.text}
          </li>
        ))}
      </ul>
      <button onClick={() => addTask('Nueva tarea')}>Añadir tarea</button>
    </div>
  );
};

export default TaskList;
Ventajas del Context API

Evitar prop drilling: No necesitas pasar props a través de múltiples niveles de componentes
Estado compartido: Múltiples componentes pueden acceder y modificar el mismo estado
Separación de responsabilidades: Mantienes la lógica de estado separada de los componentes de presentación

El Context API es ideal para datos que necesitan ser accesibles por muchos componentes en diferentes niveles de tu árbol de componentes, como temas, autenticación de usuario o, como en este caso, una lista de tareas.

*/

/*
ICONOS EN REACT.

Hay un paquete "React icons" que incluye las librerias mas relevantes.

Si quieres meter tus propios iconos tendrás que crear un componente para cada uno. Copias el SVG directamente y lo metes en el return del componente. Pero hay una manera mejor de hacerlo.

*Recuerda height y width deberas quitarselos y pasar un parametro de tamaño si quieres. También deberías tener el fill en currentcolor.
*Otra opcion es crear una tipografía con un sprite de iconos y elegir el que vas a usar.
*Una opción más es utilizando el plugin de Vite "svgr" que permite importar svgs como componentes de React.
(npm install...)
(hay muchos pasos josmi pasara el articulo)

*/
