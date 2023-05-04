import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import NavButton from "../components/NavButton";
import Button from "../components/Button";

function ChooseThemes() {
  const navigate = useNavigate();
  const [selectedThemes, setSelectedThemes] = useState([]);

  //  ---------------------------------- Click on Themes ----------------------------------
  const handleClickTheme = (name) => {
    const searchSelectThemes = selectedThemes.find((e) => e.apiName === name);
    if (searchSelectThemes !== undefined) {
      setSelectedThemes((prevState) => [
        ...prevState.filter((theme) => theme.apiName !== name),
      ]);
      return;
    }
    setSelectedThemes((prevState) => [
      ...prevState,
      { apiName: name, numberQuest: null },
    ]);
  };

  //  ---------------------------------- Generate Array of questions  ----------------------------------
  const handleClickStart = () => {
    if (selectedThemes.length !== 0) {
      const nbrQuestion = 25;
      const countTheme = Math.floor(nbrQuestion / selectedThemes.length);
      let count = 0;

      for (let i = selectedThemes.length - 1; i >= 0; i -= 1) {
        if (i === 0) {
          selectedThemes[i].numberQuest = nbrQuestion - count;
        } else {
          selectedThemes[i].numberQuest = countTheme;
          count += countTheme;
        }
      }

      localStorage.setItem("questionList", JSON.stringify(selectedThemes));
      console.info("avant navigate");
      navigate("/Question");
    }
  };
  //  ----------------------------------------------- Delete local storage  -----------------------------------------------
  useEffect(() => {
    localStorage.removeItem("questionList");
  }, []);

  //  ----------------------------------------------- RETURN -----------------------------------------------
  return (
    <div>
      <div className="title">
        Choose <br /> Your <br /> Themes
      </div>
      <div className="themeButtonsContainer">
        <Button
          text="Capital"
          buttonType="small"
          onClick={() => handleClickTheme("capital")}
          buttonState={
            selectedThemes.find((name) => name.apiName === "capital") !==
            undefined
          }
        />
        <Button
          text="Cocktail"
          buttonType="small"
          onClick={() => handleClickTheme("cocktail")}
          buttonState={
            selectedThemes.find((name) => name.apiName === "cocktail") !==
            undefined
          }
        />
        <Button
          text="Games"
          buttonType="small"
          onClick={() => handleClickTheme("game")}
          buttonState={
            selectedThemes.find((name) => name.apiName === "game") !== undefined
          }
        />
        <Button
          text="Music"
          buttonType="small"
          onClick={() => handleClickTheme("music")}
          buttonState={
            selectedThemes.find((name) => name.apiName === "music") !==
            undefined
          }
        />
      </div>
      <button
        className="grandB"
        type="button"
        style={{ width: "50%" }}
        onClick={() => handleClickStart()}
      >
        Start !
      </button>
    </div>
  );
}

export default ChooseThemes;
