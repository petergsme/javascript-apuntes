export interface DogResponse {
  id: number;
  breed: string;
  imgUrl: string;
  dislikeCount: number;
  likeCount: number;
}

export type AllBreedsResponse = Record<string, string[]>;
// Este es el tipado para esas extrañas respuestas "message" de los apis, su primer valor puede ser solo un numero o string siempre. Su segundo valor es lo que tienen dentro, en el caso de los perros arrays vacíos o con strings.
