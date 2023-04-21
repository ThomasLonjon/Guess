import React, { useEffect, useState } from "react";
import NavButton from "../components/NavButton";
import MyMap from "../components/MyMap";

function ChooseRules() {
  const [randomCountry, setRandomCountry] = useState(false);

  //  ---------------------------------- QUESTION CAPITALS ----------------------------------

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const randomFilteredCountry = data.filter(
          (country) =>
            country.population > 400000 && country.capitalInfo !== null
        );
        const randomIndex = Math.floor(Math.random() * data.length);
        setRandomCountry(randomFilteredCountry[randomIndex]);
      })
      .catch((err) => console.error("err -->", err));
  }, []);

  //  ---------------------------------- QUESTION CITIES ----------------------------------
  if (randomCountry.capital) {
    console.info(
      randomCountry.capital,
      randomCountry.name.common,
      randomCountry.population
    );
  }

  //  ---------------------------------- RETURN ----------------------------------
  return (
    <div className="pageStyle">
      <div>ChooseRules</div>
      <NavButton pageName="/ChooseThemes" />
      {randomCountry ? (
        <MyMap
          longitude={randomCountry?.capitalInfo.latlng[1]}
          latitude={randomCountry?.capitalInfo.latlng[0]}
          countryCode={randomCountry?.cca3}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default ChooseRules;
