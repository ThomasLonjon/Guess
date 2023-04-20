import React from "react";
import NavButton from "../components/NavButton";
import Timer from "../components/Timer";

export default function Question() {
  return (
    <div className="pageStyle">
      <div>Question</div>
      <NavButton pageName="/Results" />
      <Timer time="30" />
    </div>
  );
}
