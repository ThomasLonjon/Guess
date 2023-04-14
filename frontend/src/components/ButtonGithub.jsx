import React from "react";
import PropTypes from "prop-types";
import pictoGitHub from "../assets/img/Picto_Github.png";

function ButtonGithub({ devName, devLink }) {
  return (
    <div className="buttonGithub">
      <a href={devLink}>
        <img className="pictoGithub " src={pictoGitHub} alt="pictoGitub" />
      </a>

      <div className="devName">{devName}</div>
    </div>
  );
}

ButtonGithub.propTypes = {
  devName: PropTypes.string.isRequired,
  devLink: PropTypes.string.isRequired,
};

export default ButtonGithub;
