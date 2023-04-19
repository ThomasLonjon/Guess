import React from "react";
import PropTypes from "prop-types";
import "../App.css";
import avatar1 from "../../public/assets/img/avatar/avatar1.png";

const Avatar = (props) => {
  const { avatarType } = props;
  return avatarType === "small" ? (
    <div>
      <img className="petitAvatar" src={avatar1} alt="avatar 1" />
    </div>
  ) : (
    <div>
      <img className="grandAvatar" src={avatar1} alt="avatar 1" />
    </div>
  );
};
Avatar.propTypes = {
  props: PropTypes.string.isRequired,
};

export default Avatar;
