import React, { useState, useEffect } from "react";

function DogAPI() {
  const [dogData, setDogData] = useState({});

  useEffect(() => {
    fetch("https://api.thedogapi.com/v1/images/search?include_breed=1")
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomDogData = data[randomIndex];
        setDogData(randomDogData);
      });
  }, []);

  const { url, breeds } = dogData;

  return (
    <div>
      {url && <img src={url} alt="Random Dog" />}
      {breeds && (
        <div>
          <h4>Which breed corresponds to the displayed image?</h4>
          {breeds.map((breed) => (
            <div key={breed.id}>{breed.name}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DogAPI;
