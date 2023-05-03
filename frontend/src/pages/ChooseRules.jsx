import React from "react";
import NavButton from "../components/NavButton";

function ChooseRules() {
  // -------------------------------- QUESTION CAPITALS ----------------------------------

  const handleClick = () => {
    // eslint-disable-next-line spaced-comment
    //En cours ...
    // force update esLint
  };
  //  ---------------------------------------- RETURN ----------------------------------------
  return (
    <div>
      <div>ChooseRules</div>

      <NavButton pageName="/ChooseThemes" onClick={() => handleClick()} />
    </div>
  );
}

export default ChooseRules;
