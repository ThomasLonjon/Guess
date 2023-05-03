import React, { useEffect, useState } from "react";
// import NavButton from "../components/NavButton";

export default function Results() {
  const [results, setresults] = useState([]);
  const [resultsObj, setResultsObj] = useState({});
  useEffect(() => {
    const data = localStorage.getItem("Result");
    console.info("RESULTS ----->", JSON.parse(data));
    const resultData = JSON.parse(data);
    let counterSeconde = 0;
    let countReponseTrue = 0;
    for (let i = 0; i < resultData.length; i += 1) {
      console.info("resultData", resultData[i]);
      counterSeconde += resultData[i].time;
      if (resultData[i].answer) {
        countReponseTrue += 1;
      }
    }
    const obj = {
      answer: countReponseTrue,
      totalTime: `${((30 * resultData.length) / 60).toFixed(0)} minutes ${(
        (30 * resultData.length) %
        60
      ).toFixed(0)}s`,
      totalTimeRemaining: `${Math.floor(counterSeconde / 60).toFixed(
        0
      )} minutes ${(counterSeconde % 60).toFixed(0)}s`,
    };
    setResultsObj(obj);
    setresults(resultData);
  }, []);

  // --------------------------------------- RETURN -------------------------------------------------

  return (
    <div>
      <div className="title" style={{ fontSize: 90 }}>
        Results
      </div>
      <div className="grandB">
        <p>
          You have scored : <br />
        </p>
      </div>

      <div className="grandB">
        {resultsObj.answer}/{results.length}
      </div>

      <p>Temps Total : {resultsObj.totalTime}</p>
      <p>Temps restant : {resultsObj.totalTimeRemaining}</p>
      {console.info(resultsObj)}
      {results.map((result) => {
        return (
          <p>
            {" "}
            -- {result.quest} - Reponse : {result.answer ? "yes" : "no"} - Time
            question {result.time}s
          </p>
        );
      })}
    </div>
  );
}
