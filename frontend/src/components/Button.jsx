import React from "react";
import PropTypes from "prop-types";
import "../App.css";

function Button(props) {
  const { buttonType, text } = props;
  const onClickHandler = () => {};

  return buttonType === "small" ? (
    <div>
      <button type="button" className="petitB" onClick={onClickHandler}>
        {text}
      </button>
    </div>
  ) : (
    <div>
      {" "}
      <button type="button" className="grandB" onClick={onClickHandler}>
        {text}
      </button>
    </div>
  );
}
Button.propTypes = {
  buttonType: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Button;
