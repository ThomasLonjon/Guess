import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavButton({ pageName, onClick, content }) {
  return (
    <Link to={pageName}>
      <button
        className="grandB"
        type="button"
        onClick={onClick}
        style={{ width: "50%" }}
      >
        {content}
      </button>
    </Link>
  );
}

NavButton.propTypes = {
  pageName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired,
};

export default NavButton;
