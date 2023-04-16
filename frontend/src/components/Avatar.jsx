import React from 'react'
import PropTypes from "prop-types";
import '../App.css'

const Avatar = (props) => {

    return (props.AvatarType==="small" ?
        <div>
            <img className="petitAvatar" src="../assets/img/avatar/avatar1.png" alt="avatar 1" />
        </div>
            : <div> <img className="grandAvatar" src="../assets/img/avatar/avatar1.png" alt="avatar 1" />
        </div>
    )

}
Avatar.propTypes = {
    props: PropTypes.string.isRequired,
  };
  

export default Avatar;