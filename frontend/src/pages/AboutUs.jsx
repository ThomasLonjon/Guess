import React from "react";
import NavButton from "../components/NavButton";
import Logo from "../components/Logo";

export default function AboutUs() {
  return (
    <div className="pageStyle">
      <div className="about">About us</div>
      <Logo name="logo" />
      <NavButton pageName="/" />
    </div>
  );
}
