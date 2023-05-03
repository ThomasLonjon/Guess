import React from "react";
import PropTypes from "prop-types";

function Title({ content, questionCurent, questionMax }) {
  if (questionCurent && questionMax)
    return (
      <p className="title">
        {content} - {questionCurent}/{questionMax}
      </p>
    );

  return <div className="title1">{content}</div>;
}

Title.propTypes = {
  content: PropTypes.string.isRequired,
  questionCurent: PropTypes.number.isRequired,
  questionMax: PropTypes.number.isRequired,
};

export default Title;
