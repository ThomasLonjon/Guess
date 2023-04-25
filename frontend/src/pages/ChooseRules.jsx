import React, { useEffect, useState } from "react";
import NavButton from "../components/NavButton";
import MyMap from "../components/MyMap";
import ButtonQuestion from "../components/ButtonQuestion";

function ChooseRules() {
  const [randomCountries, setRandomCountries] = useState(null);
  const [randomAnswerIndex, SetRandomAnswerIndex] = useState(null);

  //  ---------------------------------- QUESTION CAPITALS ----------------------------------

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const FilteredCountry = data.filter(
          (country) =>
            country.population > 400000 &&
            country.capitalInfo !== null &&
            country.capital !== null
        );

        // generate an array of random country out of FilteredCountry
        const randomCountryIndex = () =>
          Math.floor(Math.random() * FilteredCountry.length);

        const countrySet = new Set();
        while (countrySet.size < 4) {
          countrySet.add(FilteredCountry[randomCountryIndex()]);
        }
        const countryArray = Array.from(countrySet);
        setRandomCountries(countryArray);

        // generate a random index to determinate right and wrong answers
        const randomIndex = Math.floor(Math.random() * 3);
        SetRandomAnswerIndex(randomIndex);
      })

      .catch((err) => console.error("err -->", err));
  }, []);

  //  ---------------------------------- RETURN ----------------------------------
  return (
    <div className="pageStyle">
      <div>ChooseRules</div>
      <NavButton pageName="/ChooseThemes" />
      {randomCountries ? (
        <>
          <ButtonQuestion cityName={randomCountries[0]?.capital[0]} />
          <ButtonQuestion cityName={randomCountries[1]?.capital[0]} />
          <ButtonQuestion cityName={randomCountries[2]?.capital[0]} />
          <ButtonQuestion cityName={randomCountries[3]?.capital[0]} />
          <MyMap
            longitude={
              randomCountries[randomAnswerIndex]?.capitalInfo?.latlng[1]
            }
            latitude={
              randomCountries[randomAnswerIndex]?.capitalInfo?.latlng[0]
            }
            countryCode={randomCountries[randomAnswerIndex]?.cca3}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default ChooseRules;
