/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Exercise({ question }) {
  const [video, setVideo] = useState({});
  const [key, setKey] = useState(false);
  useEffect(() => {
    setKey(question.key);
    setVideo(question.answers[question.rightAnswer]?.url);
    console.info("question", question);
  }, [question]);
  return (
    <div className="exercise">
      <video controls autoPlay key={key}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

Exercise.propTypes = {
  question: PropTypes.shape({
    apiName: PropTypes.string.isRequired,
    quest: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
      })
    ).isRequired,
    rightAnswer: PropTypes.number.isRequired,
    key: PropTypes.number.isRequired,
  }).isRequired,
};

export default Exercise;
