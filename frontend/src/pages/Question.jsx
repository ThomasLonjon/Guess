import React, { useEffect, useState } from "react";
// import NavButton from "../components/NavButton";
import Timer from "../components/Timer";
import QuestionCapital from "../components/QuestionCapital";
import Title from "../components/Title";
import Text from "../components/Text";
import ButtonQuestion from "../components/ButtonQuestion";
import apiList from "../data/api";

function Question() {
  //  ---------------------------------- Generate a random set of countries  ----------------------------------
  const [questionList, setQuestionList] = useState([]);
  const [counter, setCounter] = useState(30);
  const [currentPage, setCurrentPage] = useState(1);
  const [guessed, setGuessed] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(false);

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
    }, "1000");
  };

  const handleClickResponse = async (position) => {
    await colorBottom(position);
    await nextQuestion();
  };

  // Function mélange tableau
  function shuffleArray(array) {
    const shuffledArray = [];
    while (array.length) {
      const randomIndex = Math.floor(Math.random() * array.length);
      shuffledArray.push(array.splice(randomIndex, 1)[0]);
    }
    return shuffledArray;
  }

  useEffect(() => {
    const data = localStorage.getItem("questionList");
    console.warn("Local storage ------------>data", JSON.parse(data));
    const selectedThemes = JSON.parse(data);

    // eslint-disable-next-line array-callback-return, consistent-return
    const questionArray = selectedThemes.map((element) => {
      if (element.apiName === "capital") {
        return apiList.searchDataCapital(element.numberQuest);
      }
    });

    console.info("questionArray", questionArray);

    Promise.all(questionArray).then((dataListQuest) =>
      setQuestionList(shuffleArray(dataListQuest[0]))
    );
  }, []);

  useEffect(() => {
    console.info("Switch Page");
  }, [currentPage]);

  useEffect(() => {
    if (counter === 0) {
      handleClickResponse(selectedIndex);
    }
  }, [counter]);

  return (
    <div className="pageStyle">
      <Title
        content="Question"
        questionCurent={currentPage}
        questionMax={questionList.length}
      />
      <Text content={getCurrentQuestion()[0]?.quest} />
      <Timer time={counter} setCounter={setCounter} />
      <div>
        {console.info("Test Mélange questionList", questionList)}
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
            if (guessed && position === getCurrentQuestion()[0].righAnswer) {
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
