import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Music({ question }) {
  const [preview, setPreview] = useState(0);
  useEffect(() => {
    setPreview(question.answers[question.rightAnswer].preview);
  }, [question]);

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption, react/no-unknown-property
    <audio src={preview} controls autoplay />
    // <iframe
    //   title="Deezer player"
    //   scrolling="no"
    //   frameborder="0"
    //   // allowTransparency="true"
    //   src={preview}
    //   width="700"
    //   height="350"
    // ></iframe>
  );
}

Music.propTypes = {
  question: PropTypes.shape({
    apiName: PropTypes.string.isRequired,
    quest: PropTypes.string.isRequired,
    answers: PropTypes.arrayOf(
      PropTypes.shape({
        preview: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      })
    ).isRequired,
    rightAnswer: PropTypes.number.isRequired,
  }).isRequired,
};

export default Music;
