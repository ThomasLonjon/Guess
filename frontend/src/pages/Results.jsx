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

function Results() {
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
      completionTime: `${Math.floor(
        (30 * resultData.length - counterSeconde) / 60
      ).toFixed(0)} minutes ${(
        (30 * resultData.length - counterSeconde) %
        60
      ).toFixed(0)}s`,
    };
    setResultsObj(obj);
    setresults(resultData);
  }, []);

  const [profile, setProfile] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("profile");
    const profileImport = JSON.parse(data);
    setProfile(profileImport);
  }, []);

  // --------------------------------------- RETURN -------------------------------------------------

  return (
    <div>
      <div className="title" style={{ fontSize: 90, marginBottom: "1%" }}>
        Results
      </div>
      <div className="questionButton">
        <p className="questionText">
          You scored {resultsObj.answer}/{results.length} !!
        </p>
      </div>

      <div className="questionButtonSmall">
        <p>Your time : {resultsObj.completionTime}</p>
      </div>
      <div className="avatarContainerBig">
        <Avatar
          className="avatarBackgroundBig"
          avatarArray={avatarArray}
          index={profile.index}
        />
      </div>
      <NavButton
        className="newQuizz"
        pageName="/"
        content="Start New Quizz ! "
      />
      <br />
      <NavButton
        className="smallResultButton"
        pageName="/AboutUs"
        content="Get to know us ! "
      />
      <br />
      <NavButton
        className="smallResultButton"
        pageName="/ChooseThemesSecret"
        content="Start Secret Quizz"
      />

      {/* <p> Times remaining : {resultsObj.totalTimeRemaining} </p> */}
      {/* {results.map((result) => {
        return (
          <p>
            {" "}
            -- {result.quest} - Reponse : {result.answer ? "yes" : "no"} - Time
            question {result.time}s
          </p>
        );
      })} */}
    </div>
  );
}

export default Results;
