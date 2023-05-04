import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "../components/Slider";

function ChooseRules() {
  // -------------------------------- QUESTION CAPITALS ----------------------------------
  const navigate = useNavigate();

  const [rangeValueNumber, setRangeValueNumber] = useState(8);
  const [rangeValueTime, setRangeValueTime] = useState(30);

  const handleClick = () => {
    const rules = {
      numberOfQuestions: rangeValueNumber,
      timePerQuestion: rangeValueTime,
    };
    localStorage.setItem("rules", JSON.stringify(rules));
    navigate("/ChooseThemes");
  };

  //  ---------------------------------------- RETURN ----------------------------------------
  return (
    <div>
      <div className="title">Choose Rules</div>
      <Slider
        maxRange={30}
        defaultRange={8}
        unit=""
        rangeValue={rangeValueNumber}
        setRangeValue={setRangeValueNumber}
      />
      <Slider
        maxRange={30}
        defaultRange={30}
        unit="s"
        rangeValue={rangeValueTime}
        setRangeValue={setRangeValueTime}
      />
      <button
        className="grandB"
        type="button"
        style={{ width: "50%" }}
        onClick={() => handleClick()}
      >
        Start !
      </button>
    </div>
  );
}

export default ChooseRules;
