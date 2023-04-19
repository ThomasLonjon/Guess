import React from "react";
import PropTypes from "prop-types";

export default function Title(props) {
  const { content } = props

  return <div>{content}</div>;

  Title.PropTypes = {
    content: PropTypes.string.isRequired,
  };
}
