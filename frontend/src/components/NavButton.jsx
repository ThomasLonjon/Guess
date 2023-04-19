import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import React from "react";

function NavButton({ pageName }) {
  return (
    <div className="navButton">
      <Link to={pageName}>
        <div>Navbutton </div>
      </Link>
    </div>
  );
}

NavButton.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default NavButton;
