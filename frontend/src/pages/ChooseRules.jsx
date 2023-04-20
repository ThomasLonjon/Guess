import React, { useEffect, useState } from "react";
import NavButton from "../components/NavButton";
import citiesPopulation100k from "../assets/data/citiesPopulation100k.json";
import MyMap from "../components/MyMap";

export default function ChooseRules() {
  const [cityOnMap, setCityOnMap] = useState(false);

  useEffect(() => {
    const cities = Object.values(citiesPopulation100k);
    const frenchCities = cities.filter((city) => city.label_en === "France");
    const randomIndex = Math.floor(Math.random() * frenchCities.length);
    const randomCity = frenchCities[randomIndex];
    console.info(randomCity);
    setCityOnMap(randomCity);
  }, []);

  return (
    <div className="pageStyle">
      <div>ChooseRules</div>
      <NavButton pageName="/ChooseThemes" />
      {cityOnMap ? (
        <MyMap
          longitude={cityOnMap.coordinates.lon}
          latitude={cityOnMap.coordinates.lat}
        />
      ) : (
        ""
      )}
    </div>
  );
}
