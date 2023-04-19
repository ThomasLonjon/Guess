import React from "react";
import PropTypes from "prop-types";
import "../App.css";

function Avatar(props) {
  const { avatarType } = props;
  const { imageSrc } = props;
  return avatarType === "small" ? (
    <div>
      <img className="petitAvatar" src={imageSrc} alt="avatar 1" />
    </div>
  ) : (
    <div>
      <img className="grandAvatar" src={imageSrc} alt="avatar 1" />
    </div>
  );
}
Avatar.propTypes = {
  avatarType: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
};

export default Avatar;
