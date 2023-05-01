import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import NavButton from "./NavButton";
import MyMap from "./MyMap";
import ButtonQuestion from "./ButtonQuestion";
// import Button from "./Button";

function QuestionCapital({ question }) {
  const [randomCountries, setRandomCountries] = useState(null);
  const [rightAnswerIndex, setRightAnswerIndex] = useState(null);
  const [guessed, setGuessed] = useState(false);
  // const [rightGuess, setRightGuess] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(false);

  // eslint-disable-next-line react/prop-types
  // const { dataQuest } = props;

  useEffect(() => {
    console.info("dataQuest", question);
    setRandomCountries(question.answers);
    setRightAnswerIndex(question.righAnswer);
  }, []);

  return (
    <div>
      {randomCountries ? (
        <>
          <MyMap
            longitude={
              randomCountries[rightAnswerIndex]?.capitalInfo?.latlng[1]
            }
            latitude={randomCountries[rightAnswerIndex]?.capitalInfo?.latlng[0]}
            countryCode={randomCountries[rightAnswerIndex]?.cca3}
          />
          <div className="answerButtonsContainer">
            {randomCountries.map((country, index) => {
              if (guessed && index === rightAnswerIndex) {
                // l'allumer en vert;
                return (
                  <ButtonQuestion
                    key={country.cca3}
                    buttonTitle={randomCountries[index]?.capital[0]}
                    rightAnswer={randomCountries[rightAnswerIndex]?.capital[0]}
                    // setRightGuess={setRightGuess}
                    setGuessed={setGuessed}
                    setSelectedIndex={setSelectedIndex}
                    index={index}
                    buttonColor="green"
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
                      rightAnswer={
                        randomCountries[rightAnswerIndex]?.capital[0]
                      }
                      // setRightGuess={setRightGuess}
                      setGuessed={setGuessed}
                      setSelectedIndex={setSelectedIndex}
                      index={index}
                      buttonColor="var(--colorButtonsDark)"
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
                  // setRightGuess={setRightGuess}
                  setGuessed={setGuessed}
                  setSelectedIndex={setSelectedIndex}
                  index={index}
                  buttonColor="var(--colorButtons)"
                  guessed={guessed}
                />
              );
            })}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

QuestionCapital.propTypes = {
  question: PropTypes.shape({
    apiName: PropTypes.string.isRequired,
    quest: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        capitalInfo: PropTypes.shape({
          latlng: PropTypes.arrayOf(PropTypes.number.isRequired),
        }),
        cca3: PropTypes.string.isRequired,
        capital: PropTypes.arrayOf(PropTypes.string.isRequired),
        population: PropTypes.number.isRequired,
      })
    ).isRequired,
    righAnswer: PropTypes.number.isRequired,
  }).isRequired,
  // question: PropTypes.object,
};
export default QuestionCapital;
