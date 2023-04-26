import React, { useEffect, useState } from "react";
import axios from "axios";

function ArtAPI() {
  const [artwork, setArtwork] = useState(null);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchArtwork = async () => {
      const { data } = await axios.get(
        "https://collectionapi.metmuseum.org/public/collection/v1/search?q=painting&hasImages=true"
      );
      const objectId =
        data.objectIDs[Math.floor(Math.random() * data.objectIDs.length)];
      const { data: artworkData } = await axios.get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`
      );
      setArtwork(artworkData);
      setOptions([
        artworkData.title,
        ...(
          await Promise.all(
            Array.from({ length: 3 }, async () => {
              const { data: optionData } = await axios.get(
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${
                  data.objectIDs[
                    Math.floor(Math.random() * data.objectIDs.length)
                  ]
                }`
              );
              return optionData.title;
            })
          )
        ).filter((option) => option !== artworkData.title),
      ]);
    };
    fetchArtwork();
  }, []);

  if (!artwork) return <p>Loading...</p>;

  const { primaryImage } = artwork;

  return (
    <div>
      <img src={primaryImage} alt="" />
      <h2>
        Which of the following artworks has the title corresponding to the image
        above?
      </h2>
      <ul>
        {options.map((option) => (
          <li key={option.title}>{option}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArtAPI;
