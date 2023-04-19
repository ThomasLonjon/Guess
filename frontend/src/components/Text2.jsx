import React from "react";
import PropTypes from "prop-types";

export default function Text2(props) {
  const { content } = props;
  return <div>{content}</div>;
}
Text2.propTypes = {
  content: PropTypes.string.isRequired,
};
