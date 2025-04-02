import { useState } from 'react';
import { getRandomDogImage } from './services/add-dog.service';
import { getDogBreedList } from './services/add-dog.service';
import './App.css';

interface Dog {
  url: string;
  breed: string;
  likeCount: number;
  dislikeCount: number;
  isHidden: boolean;
  id: number;
}

function App() {
  const dog = [
    {
      url: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_11953.jpg',
      breed: 'hound-afghan',
      likeCount: 0,
      dislikeCount: 0,
      isHidden: false,
      id: Date.now(),
    },
    {
      url: 'https://images.dog.ceo/breeds/hound-afghan/n02088094_11953.jpg',
      breed: 'hound-afghan',
      likeCount: 0,
      dislikeCount: 0,
      isHidden: false,
      id: Date.now() + 1,
    },
  ];

  const [dogArray, setDogArray] = useState<Dog[]>(dog);

  const addDog = async () => {
    const dog = await getRandomDogImage('');

    if (dog) {
      setDogArray([
        ...dogArray,
        {
          url: dog?.imgUrl,
          breed: dog.breed,
          likeCount: dog.likeCount,
          dislikeCount: dog.dislikeCount,
          isHidden: false,
          id: dog.id,
        },
      ]);
    }
  };

  const updateDislike = (doggie: Dog) => {
    setDogArray(
      dogArray.map((perro) => {
        return perro.id === doggie.id ? { ...perro, dislikeCount: perro.dislikeCount + 1 } : perro;
      })
    );
  };

  const updateLike = (doggie: Dog) => {
    setDogArray(
      dogArray.map((perro) => {
        return perro.id === doggie.id ? { ...perro, likeCount: perro.likeCount + 1 } : perro;
      })
    );
  };

  let dogBreedArray: string[];

  const dogList = async () => {
    const dogBreedList = await getDogBreedList();
    dogBreedArray = Object.keys(dogBreedList);
  };

  dogList();

  return (
    <>
      <select name="" id="">
        {dogBreedArray.map((breed) => {
          return (
            <option key={breed} value={breed}>
              {breed}
            </option>
          );
        })}
      </select>
      <button onClick={() => addDog()} className="add-button">
        Añadir Perrico al final
      </button>
      <div className="dog-list">
        {dogArray.map((dog) => {
          return (
            <div key={dog.id} className="dog">
              <img src={dog.url} alt="" />
              <div className="dog__votes">
                <span>{dog.likeCount}❤️</span>
                <span>{dog.dislikeCount}🤮</span>
              </div>
              <div className="dog__actions">
                <button onClick={() => updateLike(dog)} className="like">
                  Like
                </button>
                <button onClick={() => updateDislike(dog)} className="dislike">
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

//Necesitaremos otro usestate para guardar la raza seleccionada cada vez en el select, y pasar su valor por el addDog, también necesitaremos, darle una asignacion en el parametro, breed | "". para que si breed no existe pase el string vacio y añada perro random.

export default App;
