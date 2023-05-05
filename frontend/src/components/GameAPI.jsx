import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

function GameAPI({ question }) {
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(question);
  }, [question]);

  return (
    <div>
      <img className="game" src={image} alt="Random game" />
    </div>
  );
}

GameAPI.propTypes = {
  question: PropTypes.string.isRequired,
};
export default GameAPI;
