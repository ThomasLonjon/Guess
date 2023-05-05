import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    localStorage.removeItem("rules");
  }, []);

  //  ---------------------------------------- RETURN ----------------------------------------
  return (
    <div>
      <div className="title">Choose Your Rules</div>
      <div className="buttonChooseRules">
        <p>Number of questions</p>
      </div>
      <Slider
        maxRange={30}
        defaultRange={8}
        unit=""
        rangeValue={rangeValueNumber}
        setRangeValue={setRangeValueNumber}
      />
      <div className="buttonChooseRules">
        <p>Time per question</p>
      </div>
      <Slider
        maxRange={60}
        defaultRange={30}
        unit="s"
        rangeValue={rangeValueTime}
        setRangeValue={setRangeValueTime}
      />
      <button
        className="chooseRulesStart"
        type="button"
        onClick={() => handleClick()}
      >
        Next !
      </button>
    </div>
  );
}

export default ChooseRules;
