import React, { useEffect, useState } from "react";
import NavButton from "../components/NavButton";
import ButtonQuestion from "../components/ButtonQuestion";
import questList from "../assets/data/questList";

export default function ChooseThemes() {
  const [randomCountries, setRandomCountries] = useState(null);
  const [rightAnswerIndex, setRightAnswerIndex] = useState(null);
  const [guessed, setGuessed] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(false);
  const [selectedThemes, setSelectedThemes] = useState([]);

  //  ---------------------------------- Generate a random set of countries ----------------------------------

  const searchDataCapital = async (numberQuest) => {
    const tabDataCapital = [];
    await fetch(
      "https://restcountries.com/v3.1/all?fields=capital,population,cca3,capitalInfo"
    )
      .then((res) => res.json())
      .then((data) => {
        let i = 0;
        while (i < numberQuest) {
          // tabDataCapital.push("toto");
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
          const rightIndex = Math.floor(Math.random() * 3);

          const duplicate = tabDataCapital.some(
            (element) => element.cca3 === countryArray[rightIndex]?.cca3
          );

          if (!duplicate) {
            tabDataCapital.push({
              question: questList.capital,
              answers: countryArray,
              righAnswer: rightIndex,
            });
            i += 1;
          }
        }
      })
      .catch((err) => console.error("err -->", err));
    console.warn("tabDataCapital", tabDataCapital);
    console.warn("tabDataCapital.length", tabDataCapital.length);
    return tabDataCapital;
  };

  //  ---------------------------------- Click on Themes ----------------------------------

  const handleClickTheme = (name) => {
    const searchSelectThemes = selectedThemes.find((e) => e.apiName === name);
    if (searchSelectThemes !== undefined) {
      setSelectedThemes((prevState) => [
        ...prevState.filter((element) => element.apiName !== name),
      ]);
      return;
    }
    setSelectedThemes((prevState) => [
      ...prevState,
      { apiName: name, numberQuest: null },
    ]);
  };

  useEffect(() => {
    localStorage.removeItem("questionList");
  }, []);

  //  -------------------- On click Start, Generate an array of questions depending on clicked themes ---------------------------

  const handleClickStart = async () => {
    const nbrQuestion = 10;

    const countTheme = Math.floor(nbrQuestion / selectedThemes.length);
    let count = 0;

    for (let i = 0; i < selectedThemes.length; i += 1) {
      if (selectedThemes.length - 1 === i) {
        selectedThemes[i].numberQuest = nbrQuestion - count;
      } else {
        count += countTheme;
        selectedThemes[i].numberQuest = countTheme;
      }
    }

    //  ---------------------------------- Generate Array of questions ----------------------------------

    const questionArray = selectedThemes.map((element) => {
      if (element.apiName === "capital") {
        return searchDataCapital(element.numberQuest);
      }
    });

    console.info(Promise.all(questionArray).then(console.log));
  };

  //  ----------------------------------------------- RETURN -----------------------------------------------

  return (
    <div className="pageStyle">
      <div>ChooseThemes</div>
      <NavButton
        // pageName="/Question"
        onClick={handleClickStart}
        data={selectedThemes}
      />
      <Button
        text="Capital"
        buttonType="small"
        onClick={() => handleClickTheme("capital")}
        buttonState={
          selectedThemes.find((name) => name.apiName === "capital") !==
          undefined
        }
      />
      <Button
        text="Movies"
        buttonType="small"
        onClick={() => handleClickTheme("movies")}
        buttonState={
          selectedThemes.find((name) => name.apiName === "movies") !== undefined
        }
      />
      <Button
        text="Games"
        buttonType="small"
        onClick={() => handleClickTheme("games")}
        buttonState={
          selectedThemes.find((name) => name.apiName === "games") !== undefined
        }
      />
      {/* <NavButton oneClick={handleClick} pageName="/Question" /> */}

      {randomCountries ? (
        <>
          {randomCountries.map((country, index) => {
            if (guessed && index === rightAnswerIndex) {
              // l'allumer en vert;
              return (
                <ButtonQuestion
                  key={country.cca3}
                  buttonTitle={randomCountries[index]?.capital[0]}
                  rightAnswer={randomCountries[rightAnswerIndex]?.capital[0]}
                  setRightGuess={setRightGuess}
                  setGuessed={setGuessed}
                  setSelectedIndex={setSelectedIndex}
                  index={index}
                  buttonState="rightButton"
                  guessed={guessed}
                />
              );
            }
            if (guessed) {
              if (selectedIndex === index) {
                // l'allumer en violet foncé;
                return (
                  <ButtonQuestion
                    key={country.cca3}
                    buttonTitle={randomCountries[index]?.capital[0]}
                    rightAnswer={randomCountries[rightAnswerIndex]?.capital[0]}
                    setRightGuess={setRightGuess}
                    setGuessed={setGuessed}
                    setSelectedIndex={setSelectedIndex}
                    index={index}
                    buttonState="wrongButton"
                    guessed={guessed}
                  />
                );
              }
            }
            return (
              <ButtonQuestion
                key={country.cca3}
                buttonTitle={randomCountries[index]?.capital[0]}
                rightAnswer={randomCountries[rightAnswerIndex]?.capital[0]}
                // handleGuessValidation={handleGuessValidation}
                setRightGuess={setRightGuess}
                setGuessed={setGuessed}
                setSelectedIndex={setSelectedIndex}
                index={index}
                buttonState="normalButton"
                guessed={guessed}
              />
            );
          })}

          <MyMap
            longitude={
              randomCountries[rightAnswerIndex]?.capitalInfo?.latlng[1]
            }
            latitude={randomCountries[rightAnswerIndex]?.capitalInfo?.latlng[0]}
            countryCode={randomCountries[rightAnswerIndex]?.cca3}
          />
        </>
      ) : (
        ""
      )}
    </div>
  );
}
