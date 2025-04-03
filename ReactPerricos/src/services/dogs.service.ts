function getRandomInt(min: number, max: number): number {
  // La ultima declaracion de tipo number sirve para que si yo me equivoco y no hago que devuelva un number me lo diga.
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

import { DogResponse } from "./model/Dogs";
import { AllBreedsResponse } from "./model/Dogs";

export async function getRandomDogImage(breed: string): Promise<DogResponse | undefined> {
  const url =
    breed === "" ? "https://dog.ceo/api/breeds/image/random" : `https://dog.ceo/api/breed/${breed}/images/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json: { message: string; status: string } = await response.json();
    // Es buena práctica tipar las respuesta, pare recordar que devuelven.

    return {
      id: Date.now() + Math.random(),
      breed,
      imgUrl: json.message,
      dislikeCount: getRandomInt(0, 2),
      likeCount: getRandomInt(0, 1),
    };
  } catch (error: any) {
    // Hemos cambiado eslint.config.js del proyecto añadiendo una regla para que haga "warn" en vez de "error" cuando vea un any
    console.error(error.message);
  }

  return undefined;
}

export async function getDogBreedList(): Promise<string[] | undefined> {
  const url = "https://dog.ceo/api/breeds/list/all";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json: { message: AllBreedsResponse } = await response.json();

    return Object.keys(json.message);
  } catch (error: any) {
    console.error(error.message);
  }
}
