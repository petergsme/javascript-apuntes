async function getRandomDogImage() {
  const url = 'https://dog.ceo/api/breeds/image/random';
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

//Función que llama a la API con el objetivo de obtener una imagen aleatoria de un perro de ella. Desconocemos async, response, await, fetch y los json.
