import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const Button = (props) => {
  const onClickHandler = () => {};

  return props.buttonType === "small" ? (
    <div>
      <button className="petitB" onClick={onClickHandler}>
        {props.text}
      </button>
    </div>
  ) : (
    <div>
      {" "}
      <button className="grandB" onClick={onClickHandler}>
        {props.text}
      </button>
    </div>
  );
};
Button.propTypes = {
  props: PropTypes.string.isRequired,
};

export default Button;
