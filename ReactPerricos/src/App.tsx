import { ChangeEvent, useEffect, useState } from 'react';
import { getRandomDogImage } from './services/dogs.service';
import { getDogBreedList } from './services/dogs.service';
import { Mierdon } from './Mierdon';
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
  const [allBreeds, setAllBreeds] = useState<string[]>([]);
  const [selectedBreed, setSelectedBreed] = useState('affenpinscher');
  const [showMierdon, setShowMierdon] = useState(false);
  const [name, setName] = useState('');

  const addDog = async () => {
    const dog = await getRandomDogImage(selectedBreed);

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

  const handleBreedChange = (event: ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    // Este console log te sirve para ver si tu tipado es correcto. Si no se queja, lo es.
    setSelectedBreed(event.target.value);
  };

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
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

  const fetchDogList = async () => {
    const theList = await getDogBreedList();
    if (theList) {
      setAllBreeds(theList);
    }
  };

  useEffect(() => {
    fetchDogList();
  }, []);

  // Lo que hay dentro del array si lo tienes vacio, el codigo solo se ejecuta al montarse, si pones cosas, se ejecutara el codigo si una de ellas cambia.

  // Cuidado, llamar a un set hace que se vuelva a renderizar el componente.

  return (
    <>
      <input type="text" placeholder="Ponle nombre al perrito" value={name} onChange={handleNameChange} />
      <select onChange={handleBreedChange} value={selectedBreed}>
        {/* Tiene que tener un value, si no se dice que no conecta. */}
        {allBreeds.map((breed) => {
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
      <button onClick={() => setShowMierdon(!showMierdon)} className="add-mierdon">
        {showMierdon ? 'Ocultar a Mierdon' : 'Mostrar a Mierdon'}
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
        {showMierdon && <Mierdon name={name} />}
      </div>
    </>
  );
}

//necesitamos input. input vinculado a usestate con su contenido.

export default App;
