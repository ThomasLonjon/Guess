import React, { useEffect, useState } from "react";
import axios from "axios";

function ArtAPI() {
  const [artwork, setArtwork] = useState(null);
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const fetchArtwork = async () => {
      const { data } = await axios.get(
        "https://collectionapi.metmuseum.org/public/collection/v1/search?q=painting&hasImages=true"
      );
      const objectId =
        data.objectIDs[Math.floor(Math.random() * data.objectIDs.length)];
      console.info(objectId);
      const { data: artworkData } = await axios.get(
        `https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`
      );
      if (!artworkData || !artworkData.primaryImageSmall) {
        fetchArtwork();
        return;
      }
      setArtwork(artworkData);
      setTitles([
        artworkData.title,
        ...(
          await Promise.all(
            Array.from({ length: 3 }, async () => {
              const { data: titlesData } = await axios.get(
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${
                  data.objectIDs[
                    Math.floor(Math.random() * data.objectIDs.length)
                  ]
                }`
              );
              return titlesData.title;
            })
          )
        ).filter((option) => option !== artworkData.title),
      ]);
    };
    fetchArtwork();
    console.info(titles);
  }, []);

  if (!artwork) return <p>Loading...</p>;

  const { primaryImageSmall } = artwork;
  console.info(artwork);

  return (
    <div>
      <img src={primaryImageSmall} alt="" />
      <ul>
        {titles.map((option) => (
          <li key={option.title}>{option}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArtAPI;
