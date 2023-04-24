import React, { useEffect, useState } from "react";
import NavButton from "../components/NavButton";
import MyMap from "../components/MyMap";

function ChooseRules() {
  const [randomCountries, setRandomCountries] = useState(null);
  const [rightAnswer, setRightAnswer] = useState(null);
  const [wrongAnswers, setWrongAnswers] = useState(null);

  //  ---------------------------------- QUESTION CAPITALS ----------------------------------

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        const FilteredCountry = data.filter(
          (country) =>
            country.population > 400000 && country.capitalInfo !== null
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
        const randomAnswerIndex = () => Math.floor(Math.random() * 4) - 1;
        const rightAnswerArray = [countryArray.splice(randomAnswerIndex, 1)];
        const wrongAnswersArray = [...countryArray];
        setRightAnswer(rightAnswerArray[0]);
        setWrongAnswers(wrongAnswersArray);
      })

      .catch((err) => console.error("err -->", err));
  }, []);

  if (randomCountries) {
    console.info(rightAnswer[0].capital);
    console.info(wrongAnswers[0].capital);
    console.info(wrongAnswers[1].capital);
    console.info(wrongAnswers[2].capital);
  }

  //  ---------------------------------- RETURN ----------------------------------
  return (
    <div className="pageStyle">
      <div>ChooseRules</div>
      <NavButton pageName="/ChooseThemes" />
      {randomCountries ? (
        <MyMap
          longitude={rightAnswer[0]?.capitalInfo.latlng[1]}
          latitude={rightAnswer[0]?.capitalInfo.latlng[0]}
          countryCode={rightAnswer[0]?.cca3}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default ChooseRules;
