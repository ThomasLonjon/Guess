import React from "react";
import PropTypes from "prop-types";

function Title(props) {
  const { content } = props

  return <div>{content}</div>;
}

Title.PropTypes = {
  content: PropTypes.string.isRequired,
};

export default Title;