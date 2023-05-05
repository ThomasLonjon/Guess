import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavButton({ className, pageName, onClick, content }) {
  return (
    <Link to={pageName}>
      <button className={className} type="button" onClick={onClick}>
        {content}
      </button>
    </Link>
  );
}

NavButton.propTypes = {
  pageName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default NavButton;
