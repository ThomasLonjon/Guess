import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavButton({ pageName, onClick }) {
  return (
    <div className="navButton">
      <Link to={pageName}>
        <button type="button" onClick={onClick}>
          Adèle
        </button>
        <div>Navbutton </div>
      </Link>
    </div>
  );
}

NavButton.propTypes = {
  pageName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavButton;
