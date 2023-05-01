import React, { useEffect, useState } from "react";
import NavButton from "../components/NavButton";
import MyMap from "../components/MyMap";
import ButtonQuestion from "../components/ButtonQuestion";

function ChooseRules() {
  const [randomCountries, setRandomCountries] = useState(null);
  const [rightAnswerIndex, setRightAnswerIndex] = useState(null);
  const [guessed, setGuessed] = useState(false);
  const [rightGuess, setRightGuess] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(false);

  //  ---------------------------------- QUESTION CAPITALS ----------------------------------

  const handleClick = () => {
    // eslint-disable-next-line spaced-comment
    //En cours ...
  };

  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=capital,population,cca3,capitalInfo"
    )
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
        const rightIndex = Math.floor(Math.random() * 3);
        setRightAnswerIndex(rightIndex);
      })

      .catch((err) => console.error("err -->", err));
  }, []);

  useEffect(() => {
    console.info("right guess >", rightGuess);
  }, [rightGuess]);

  useEffect(() => {
    console.info("guessed >", guessed);
  }, [guessed]);

  //  ---------------------------------------- RETURN ----------------------------------------
  return (
    <div className="pageStyle">
      <div>ChooseRules</div>

      <NavButton pageName="/ChooseThemes" onClick={() => handleClick()} />
    </div>
  );
}

export default ChooseRules;
