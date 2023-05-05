import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Planet({ question }) {
  const [rightAnswer, setRightAnwser] = useState({});
  const [index, setIndex] = useState({});
  useEffect(() => {
    setRightAnwser(question.answers);
    setIndex(question.rightAnswer);
  }, [question]);

  return (
    <img
      className="planet"
      src={rightAnswer[index]?.url}
      alt={rightAnswer?.url}
    />
  );
}

Planet.propTypes = {
  question: PropTypes.shape({
    apiName: PropTypes.string.isRequired,
    quest: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
      })
    ).isRequired,
    rightAnswer: PropTypes.number.isRequired,
  }).isRequired,
};

export default Planet;
