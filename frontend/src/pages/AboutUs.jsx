import React from "react";
import NavButton from "../components/NavButton";
import GameAPI from "../components/GameAPI";

export default function AboutUs() {
  return (
    <div className="pageStyle">
      <div>About us</div>
      <NavButton pageName="/" />
      <GameAPI />
    </div>
  );
}
