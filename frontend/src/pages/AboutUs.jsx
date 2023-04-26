import React from "react";
import NavButton from "../components/NavButton";
import ArtAPI from "../components/ArtAPI";

export default function AboutUs() {
  return (
    <div className="pageStyle">
      <div>About us</div>
      <ArtAPI />
      <NavButton pageName="/" />
    </div>
  );
}
