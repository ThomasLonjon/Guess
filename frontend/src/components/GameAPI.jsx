import React, { useState, useEffect } from "react";
import axios from "axios";

function GameAPI() {
  const [image, setImage] = useState("");
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => {
        const games = response.data.results;
        const randomGameIndex = Math.floor(Math.random() * games.length);
        const randomGame = games[randomGameIndex];
        const gameTitles = [randomGame.name];
        while (gameTitles.length < 4) {
          const randomIndex = Math.floor(Math.random() * games.length);
          const randomTitle = games[randomIndex].name;
          if (gameTitles.indexOf(randomTitle) === -1) {
            gameTitles.push(randomTitle);
          }
        }
        setImage(randomGame.background_image);
        setTitles(gameTitles);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, []);

  return (
    <div>
      <img src={image} alt="Random game" />
      <ul>
        {titles.map((title) => (
          <li key={title}>{title}</li>
        ))}
      </ul>
    </div>
  );
}

export default GameAPI;
