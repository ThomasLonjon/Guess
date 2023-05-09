import React from "react";
import PropTypes from "prop-types";

function Avatar({
  setAvatarIndex,
  avatarArray,
  index,
  className,
  setAvatarIsClicked,
}) {
  const handleOnClick = () => {
    setAvatarIndex(index);
    setAvatarIsClicked(true);
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div className={className} onClick={handleOnClick}>
      <img className="avatar" src={avatarArray[index]} alt="avatar" />
    </div>
  );
}

Avatar.propTypes = {
  index: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired,
  avatarArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  setAvatarIndex: PropTypes.func.isRequired,
  setAvatarIsClicked: PropTypes.func.isRequired,
};

export default Avatar;
