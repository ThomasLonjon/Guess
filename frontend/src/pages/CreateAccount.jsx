import React, { useState } from "react";
import NavButton from "../components/NavButton";
import Avatar from "../components/Avatar";

import avatar1 from "../assets/img/Avatars-01.png";
import avatar2 from "../assets/img/Avatars-02.png";
import avatar3 from "../assets/img/Avatars-03.png";
import avatar4 from "../assets/img/Avatars-04.png";
import avatar5 from "../assets/img/Avatars-05.png";
import avatar6 from "../assets/img/Avatars-06.png";
import avatar7 from "../assets/img/Avatars-07.png";
import avatar8 from "../assets/img/Avatars-08.png";
import avatar9 from "../assets/img/Avatars-09.png";

function CreateAccount() {
  const avatarArray = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
    avatar9,
  ];
  const [userName, setUserName] = useState(null);
  const [avatarIndex, setAvatarIndex] = useState(null);
  const handleSubmit = (event) => event.preventDefault();
  const handleChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <div>
      <div className="title" style={{ fontSize: 90, marginBottom: "1%" }}>
        Create Account
      </div>
      <p className="text"> Enter Pseudo</p>
      <form className="QuoteForm" onSubmit={handleSubmit}>
        <label htmlFor="userName"> </label>
        <input
          id="name"
          name="userName"
          type="text"
          value={userName}
          onChange={handleChange}
        />
      </form>

      <p className="text"> Choose Your Avatar</p>
      <div className="avatarContainer">
        {avatarArray.map((avatar, index) => {
          if (index === avatarIndex) {
            return (
              <Avatar
                className="chosenAvatarBackground"
                avatarArray={avatarArray}
                index={index}
                setAvatarIndex={setAvatarIndex}
              />
            );
          }
          return (
            <Avatar
              className="avatarBackground"
              avatarArray={avatarArray}
              index={index}
              setAvatarIndex={setAvatarIndex}
            />
          );
        })}
      </div>
      <NavButton className="signInButton" pageName="/Hey" content="Start ! " />
    </div>
  );
}

export default CreateAccount;
