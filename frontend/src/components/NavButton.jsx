import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function NavButton({ pageName, onClick }) {
  return (
    <>
      <div className="navButton1">
        <Link to={pageName}>
          <button type="button" onClick={onClick}>
            We are group of students from the Wild Code School
          </button>
          {/* <div>Navbutton </div> */}
        </Link>
      </div>

      <div className="navButton">
        <Link to={pageName}>
          <button type="button" onClick={onClick}>
            Adèle
          </button>
          {/* <div>Navbutton </div> */}
        </Link>
      </div>

      <div className="navButton">
        <Link to={pageName}>
          <button type="button" onClick={onClick}>
            Jean-Maxime
          </button>
          {/* <div>Navbutton </div> */}
        </Link>
      </div>

      <div className="navButton">
        <Link to={pageName}>
          <button type="button" onClick={onClick}>
            Thomas
          </button>
          {/* <div>Navbutton </div> */}
        </Link>
      </div>

      <div className="navButton">
        <Link to={pageName}>
          <button type="button" onClick={onClick}>
            Alexendre
          </button>
          {/* <div>Navbutton </div> */}
        </Link>
      </div>
    </>
  );
}

NavButton.propTypes = {
  pageName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default NavButton;
