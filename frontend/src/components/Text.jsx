import React from "react";
import PropTypes from "prop-types";

function Text(props) {
  const { content } = props;
  return <div className="text">{content} </div>;
}

Text.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Text;
