import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavButton({ pageName, onClick, content }) {
  return (
<<<<<<< HEAD
    <div className="navButton">
      <Link to={pageName}>
        <button type="button" onClick={onClick}>
          Adèle
        </button>
        <div>Navbutton </div>
      </Link>
    </div>
=======
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
>>>>>>> bafaaf38847351036bd1e6f20c169c876a9b1614
  );
}

NavButton.propTypes = {
  pageName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  content: PropTypes.func.isRequired,
};

export default NavButton;
