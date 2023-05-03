import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MyMap from "./MyMap";

function QuestionCapital({ question }) {
  const [randomCountries, setRandomCountries] = useState(null);
  const [rightAnswerIndex, setRightAnswerIndex] = useState(null);

  useEffect(() => {
    if (question) {
      setRandomCountries(question.answers);
      setRightAnswerIndex(question.righAnswer);
    }
  }, [question]);

  return (
    <div>
      {randomCountries ? (
        <div>
          <MyMap
            longitude={
              randomCountries[rightAnswerIndex]?.capitalInfo?.latlng[1]
            }
            latitude={randomCountries[rightAnswerIndex]?.capitalInfo?.latlng[0]}
            countryCode={randomCountries[rightAnswerIndex]?.cca3}
          />
        </div>
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
};
export default QuestionCapital;
