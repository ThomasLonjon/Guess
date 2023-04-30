import React from "react";
import PropTypes from "prop-types";

function Title(props) {
  const { content } = props;

  return <div className="title">{content}</div>;
}

Title.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Title;
