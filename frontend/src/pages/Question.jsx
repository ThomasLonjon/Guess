import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Timer from "../components/Timer";
import QuestionCapital from "../components/QuestionCapital";
import Title from "../components/Title";
import Text from "../components/Text";
import ButtonQuestion from "../components/ButtonQuestion";
import apiList from "../data/api";
import Drinks from "../components/Drinks";
import GameAPI from "../components/GameAPI";
import Music from "../components/Music";
import Pokemon from "../components/Pokemon";
import Exercise from "../components/Exercise";
import Planet from "../components/Planet";

function Question() {
  //  ---------------------------------- Generate a random set of countries  ----------------------------------
  const [questionList, setQuestionList] = useState([]);
  const [counter, setCounter] = useState(30);
  const [currentPage, setCurrentPage] = useState(1);
  const [guessed, setGuessed] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(false);
  const [tabResult, setTabResult] = useState([]);

  // UseNavigate pour switch de page
  const navigate = useNavigate();

  // Système Pagination (Affichage de 1 question par 1)
  const getCurrentQuestion = () => {
    const questionsPerPage = 1;
    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    return questionList.slice(indexOfFirstQuestion, indexOfLastQuestion);
  };

  const colorBottom = (position) => {
    if (guessed) return;
    setGuessed(true);
    setSelectedIndex(position);
  };

  const nextQuestion = () => {
    setTimeout(() => {
      setGuessed(false);
      setCurrentPage(currentPage + 1);
      setCounter(30);
    }, "2000");
  };

  const handleClickResponse = async (position) => {
    const newResult = {
      id: currentPage - 1,
      quest: getCurrentQuestion()[0]?.quest,
      answer: getCurrentQuestion()[0]?.rightAnswer === position,
      time: counter,
    };
    await setTabResult(tabResult.concat(newResult));
    await colorBottom(position);
    await nextQuestion();
  };

  useEffect(() => {
    if (questionList.length === currentPage) {
      console.info("tabResult", tabResult);
      localStorage.setItem("Result", JSON.stringify(tabResult));
      setTimeout(() => {
        navigate("/Results");
      }, "3000");
    }
  }, [tabResult]);

  // Function mélange tableau
  const shuffleArray = (array) => {
    const shuffledArray = [];
    while (array.length) {
      const randomIndex = Math.floor(Math.random() * array.length);
      shuffledArray.push(array.splice(randomIndex, 1)[0]);
    }
    return shuffledArray;
  };

  useEffect(() => {
    const data = localStorage.getItem("questionList");
    console.warn("Local storage ------------>data", JSON.parse(data));
    const selectedThemes = JSON.parse(data);
    console.info("selectedThemes", selectedThemes);

    // eslint-disable-next-line array-callback-return, consistent-return
    const questionArray = selectedThemes.map((element) => {
      if (element.apiName === "capital") {
        return apiList.searchDataCapital(element.numberQuest);
      }
      if (element.apiName === "cocktail") {
        return apiList.searchDataCocktail(element.numberQuest);
      }
      if (element.apiName === "game") {
        return apiList.searchDataGame(element.numberQuest);
      }
      if (element.apiName === "music") {
        return apiList.searchDataMusic(element.numberQuest);
      }
      if (element.apiName === "pokemon") {
        return apiList.searchDataPokemon(element.numberQuest);
      }
      if (element.apiName === "exercise") {
        return apiList.searchDataExercice(element.numberQuest);
      }
      if (element.apiName === "planet") {
        return apiList.searchDataNasa(element.numberQuest);
      }
    });

    Promise.all(questionArray).then((dataListQuest) => {
      console.info("dataListQuest", dataListQuest);
      const listDataAPI = [];
      for (let i = 0; i < dataListQuest.length; i += 1) {
        for (let j = 0; j < dataListQuest[i].length; j += 1) {
          listDataAPI.push(dataListQuest[i][j]);
        }
      }
      setQuestionList(shuffleArray(listDataAPI));
    });
  }, []);

  useEffect(() => {
    console.info("Switch Page");
  }, [currentPage]);

  useEffect(() => {
    if (counter === 0) {
      handleClickResponse(selectedIndex);
    }
  }, [counter]);

  // ------------------------------------------- RETURN ---------------------------------------------------

  return (
    <div>
      <Title
        content="Question"
        questionCurent={
          currentPage >= questionList.length ? questionList.length : currentPage
        }
        questionMax={questionList.length}
      />
      <div className="questionText">
        <Text content={getCurrentQuestion()[0]?.quest} />
      </div>

      <Timer time={counter} setCounter={setCounter} />
      <div>
        {
          // eslint-disable-next-line array-callback-return, consistent-return, no-unused-vars
          getCurrentQuestion().map((question, index) => {
            const position = index;
            if (question.apiName === "capital") {
              return (
                <div>
                  <QuestionCapital key={position} question={question} />
                </div>
              );
            }
            if (question.apiName === "cocktail") {
              return (
                <div>
                  <Drinks question={question} />
                </div>
              );
            }
            if (question.apiName === "game") {
              return (
                <div>
                  <GameAPI question={getCurrentQuestion()[0].rightImage} />
                </div>
              );
            }
            if (question.apiName === "music") {
              return (
                <div>
                  <Music question={getCurrentQuestion()[0]} />
                </div>
              );
            }
            if (question.apiName === "pokemon") {
              return (
                <div>
                  <Pokemon question={getCurrentQuestion()[0]} />
                </div>
              );
            }
            if (question.apiName === "exercise") {
              return (
                <div>
                  <Exercise question={getCurrentQuestion()[0]} />
                </div>
              );
            }
            if (question.apiName === "planet") {
              return (
                <div>
                  <Planet question={getCurrentQuestion()[0]} />
                </div>
              );
            }
          })
        }
        {
          // eslint-disable-next-line array-callback-return, consistent-return, no-unused-vars
          getCurrentQuestion()[0]?.answers.map((question, index) => {
            let key;
            let buttonTitle;
            const position = index;
            if (getCurrentQuestion()[0].apiName === "capital") {
              key = question?.cca3;
              buttonTitle = question?.capital[0];
            }
            if (getCurrentQuestion()[0].apiName === "cocktail") {
              key = question?.idDrink;
              buttonTitle = question?.strDrink;
            }
            if (getCurrentQuestion()[0].apiName === "game") {
              key = question;
              buttonTitle = question;
            }
            if (getCurrentQuestion()[0].apiName === "music") {
              key = question?.title;
              buttonTitle = question?.title;
            }
            if (getCurrentQuestion()[0].apiName === "pokemon") {
              key = question?.name;
              buttonTitle = question?.name;
            }
            if (getCurrentQuestion()[0].apiName === "exercise") {
              key = question?.name;
              buttonTitle = question?.name;
            }
            if (getCurrentQuestion()[0].apiName === "planet") {
              key = question?.name;
              buttonTitle = question?.name;
            }
            if (guessed && position === getCurrentQuestion()[0].rightAnswer) {
              return (
                <ButtonQuestion
                  key={key}
                  buttonTitle={buttonTitle}
                  buttonColor="green"
                  onClick={() => handleClickResponse(position)}
                />
              );
            }
            if (guessed) {
              if (selectedIndex === index) {
                return (
                  <ButtonQuestion
                    key={key}
                    buttonTitle={buttonTitle}
                    buttonColor="var(--colorButtonsDark)"
                    onClick={() => handleClickResponse(position)}
                  />
                );
              }
            }
            return (
              <ButtonQuestion
                key={key}
                buttonTitle={buttonTitle}
                buttonColor="var(--colorButtons)"
                onClick={() => handleClickResponse(position)}
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default Question;
