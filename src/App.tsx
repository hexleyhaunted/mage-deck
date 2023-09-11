import React, {useEffect, useState} from 'react';
import './styles/app.scss';
import imageJson from "./imageDeck.json";

function App() {
    const images = Object.entries(imageJson.images);
    const [selectedImages, setSelectedImages] = useState<[string, string][]>([]);

    useEffect(() => {
        shuffle();
        }, []);

    function shuffle() {
        setSelectedImages(get3RandomImages());
    }

    function get3RandomImages() {
        const updatedSelectedImages: [string, string][] = [];
        while(updatedSelectedImages.length < 3) {
            const rIndex = Math.floor(Math.random() * images.length);
            const rImage = images[rIndex];
            if(!updatedSelectedImages.find(([name, url]) => rImage[0] === name)) {
                updatedSelectedImages.push(rImage);
            }
        }
        return updatedSelectedImages;
    }

  return (
      <div>
          <div id={"cards-section"}>
              <div id={"cards-wrapper"}>
                  {selectedImages?.map(([name, url]) => <img src={url} className={"card"} alt={name}/>)}
              </div>
              <button id={"shuffle-button"} onClick={shuffle}>shuffle</button>
          </div>
          <div id={"rules-section"}>
              <h1>The Game</h1>
              <article>
                  Click shuffle and get 3 random cards. You then read them like tarot card to get 3 concepts
                  or ideas that you can combine into something you can make. Once you've got your cards don't try to
                  swap or reshuffle them (unless you keep getting the same card), the idea is to be creative and that means making the best of what you have.
                  You can be fairly loose with what you make, but it must be something that you can show. You can't
                  just come up with a clever idea and not go through with it. Sometimes your solution with be something
                  easy and silly, sometimes it's be a more complex project that takes days. That's okay. The whole point
                  is to expand your comfort zone, so trying new ways and approaches is a good thing.
                  Have fun! - Star ★
              </article>
          </div>
      </div>
  );
}

export default App;
