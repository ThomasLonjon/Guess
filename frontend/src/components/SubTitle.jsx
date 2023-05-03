import React from "react";
import PropTypes from "prop-types";

function SubTitle(props) {
  const { content } = props;

  return <div className="subtitle">{content}</div>;
}

SubTitle.propTypes = {
  content: PropTypes.string.isRequired,
};

export default SubTitle;
