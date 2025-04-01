import { useState } from "react";
import "./App.css";

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
      url: "https://images.dog.ceo/breeds/hound-afghan/n02088094_11953.jpg",
      breed: "hound-afghan",
      likeCount: 0,
      dislikeCount: 0,
      isHidden: false,
      id: Date.now(),
    },
    {
      url: "https://images.dog.ceo/breeds/hound-afghan/n02088094_11953.jpg",
      breed: "hound-afghan",
      likeCount: 0,
      dislikeCount: 0,
      isHidden: false,
      id: Date.now() + 1,
    },
    {
      url: "https://images.dog.ceo/breeds/hound-afghan/n02088094_11953.jpg",
      breed: "hound-afghan",
      likeCount: 0,
      dislikeCount: 0,
      isHidden: false,
      id: Date.now() + 2,
    },
  ];

  const [dogArray, setDogArray] = useState<Dog[]>(dog);

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

  return (
    <>
      <div className="dog-list">
        {dogArray.map((dog) => {
          return (
            <>
              <div key={dog.id} className="dog">
                <img src={dog.url} alt="" />
                <div className="dog__votes">
                  <span>{dog.likeCount}👍</span>
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
            </>
          );
        })}
      </div>
    </>
  );
}

export default App;
