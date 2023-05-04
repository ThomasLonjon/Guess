import React from "react";
import PropTypes from "prop-types";
import "../App.css";

function Button(props) {
  const { buttonType, text, onClick, buttonState } = props;
  console.warn(props);

  return buttonType === "small" ? (
    <div>
      <button
        type="button"
        className={buttonState ? "middleButton clickedButton" : "middleButton"}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  ) : (
    <div>
      {" "}
      <button
        type="button"
        className={buttonState ? "grandB clickedButton" : "grandB"}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
Button.propTypes = {
  buttonType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  buttonState: PropTypes.bool.isRequired,
};

export default Button;
