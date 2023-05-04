import React, { useEffect, useState } from "react";
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

export default function Hey() {
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

  const [profile, setProfile] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("profile");
    const profileImport = JSON.parse(data);
    setProfile(profileImport);
  }, []);

  return (
    <div>
      <div className="title" style={{ fontSize: 90 }}>
        Hey!
      </div>
      <p className="textBig">
        Welcome <br /> {profile.name}
      </p>
      <div className="avatarContainerBig">
        <Avatar
          className="avatarBackgroundBig"
          avatarArray={avatarArray}
          index={profile.index}
        />
      </div>

      <NavButton
        className="signInButton"
        pageName="/ChooseRules"
        content="Start ! "
      />
    </div>
  );
}
