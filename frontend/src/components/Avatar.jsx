import React from "react";
import PropTypes from "prop-types";

function Avatar({ setAvatarIndex, avatarArray, index, className }) {
  const handleOnClick = () => setAvatarIndex(index);

  return (
    <div className={className} onClick={handleOnClick}>
      <img className="avatar" src={avatarArray[index]} alt="avatar" />
    </div>
  );
}

Avatar.propTypes = {
  index: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  avatarArray: PropTypes.arrayOf().isRequired,
  setAvatarIndex: PropTypes.func.isRequired,
};

export default Avatar;
