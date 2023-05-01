import React, { useEffect, useState } from "react";
// import NavButton from "../components/NavButton";
// import Timer from "../components/Timer";
import QuestionCapital from "../components/QuestionCapital";
import QuestList from "../questList";

function Question() {
  //  ---------------------------------- Generate a random set of countries  ----------------------------------
  const [questionList, setQuestionList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // Système Pagination
  const getCurrentQuestion = () => {
    const questionsPerPage = 1;
    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    console.info("questionList dans getCurrentQuestion", questionList);
    console.info(
      "indexOfLastQuestion dans getCurrentQuestion",
      indexOfLastQuestion
    );
    console.info(
      "indexOfFirstQuestion dans getCurrentQuestion",
      indexOfFirstQuestion
    );
    // return questionList.slice(indexOfFirstQuestion, indexOfLastQuestion);
    return questionList.slice(indexOfFirstQuestion, indexOfLastQuestion);
  };

  const nextPage = () => {
    console.info("currentPage", currentPage);
    setCurrentPage(currentPage + 1);
    // const nextIndex =
    //   questionList.findIndex((q) => q.id === currentPage.id) + 1;
    // if (nextIndex < questionList.length) {
    //   setCurrentPage(questionList[nextIndex]);
    // }
  };

  const searchDataCapital = async (numberQuest) => {
    const tabDataCapital = [];
    await fetch(
      "https://restcountries.com/v3.1/all?fields=capital,population,cca3,capitalInfo"
    )
      .then((res) => res.json())
      .then((data) => {
        let i = 0;
        while (i < numberQuest) {
          const FilteredCountry = data.filter(
            (country) =>
              country.population > 400000 &&
              country.capitalInfo !== null &&
              country.capital !== null
          );
          const randomCountryIndex = () =>
            Math.floor(Math.random() * FilteredCountry.length);
          const countrySet = new Set();
          while (countrySet.size < 4) {
            countrySet.add(FilteredCountry[randomCountryIndex()]);
          }
          const countryArray = Array.from(countrySet);

          const rightIndex = Math.floor(Math.random() * 3);

          const duplicate = tabDataCapital.some(
            (element) => element.cca3 === countryArray[rightIndex]?.cca3
          );

          if (!duplicate) {
            tabDataCapital.push({
              apiName: "capital",
              quest: QuestList.capital,
              answers: countryArray,
              righAnswer: rightIndex,
            });
            i += 1;
          }
        }
      })
      .catch((err) => console.error("err -->", err));
    console.warn("tabDataCapital", tabDataCapital);
    console.warn("tabDataCapital.length", tabDataCapital.length);
    return tabDataCapital;
  };
  useEffect(() => {
    const data = localStorage.getItem("questionList");
    console.warn("Local storage ------------>data", JSON.parse(data));
    const selectedThemes = JSON.parse(data);

    // eslint-disable-next-line array-callback-return, consistent-return
    const questionArray = selectedThemes.map((element) => {
      if (element.apiName === "capital") {
        return searchDataCapital(element.numberQuest);
      }
    });

    console.info("questionArray", questionArray);

    Promise.all(questionArray).then((dataListQuest) =>
      setQuestionList(dataListQuest[0])
    );
    // const promiseData = JSON.stringify(Promise.all(questionArray).then());
    // // console.warn("promiseData", promiseData);4
    // console.log("questionArray", promiseData);

    // const data = localStorage.getItem("questionList");
    // const pouet = selectedThemes.map((element) => {
    //   if (element.apiName === "capital") {
    //     return searchDataCapital(element.name);
    //   }
    // });
    // console.info(Promise.all(pouet).then(console.log));
  }, []);

  // const pouet = selectedThemes.map((element) => {
  //   if (element.apiName === "capital") {
  //     return searchDataCapital(element.name);
  //   }
  // });

  // console.info(Promise.all(pouet).then(console.log));
  // const data = localStorage.getItem("questionList");
  // if (data) {
  //   const myData = JSON.parse(data);
  //   console.warn("myData", myData);
  // }

  // useEffect(() => {
  //   let statusData = false;
  //   // console.log("data");
  //   //   // console.log("toto");
  //   const data = async () => {
  //     const result = [];
  //     result.push(localStorage.getItem("questionList"));

  //     // if (result !== null) {
  //     // console.log(result);
  //     return result;
  //   };
  //   const i = 0;
  //   while (i < 2) {
  //     data().then((resultat) => {
  //       console.log("result", result);
  //       // ici, vous pouvez accéder au tableau
  //       console.warn(resultat[0]); // affiche le premier élément du tableau
  //     });
  //     i++;
  //   }
  //   // console.warn(data());
  //   // if (data) {
  //   //   data.then((resultat) => {
  //   //     // ici, vous pouvez accéder au tableau
  //   //     console.warn(resultat[0]); // affiche le premier élément du tableau
  //   //   });
  //   // }
  //   // console.log;
  //   // if (data !== null) {
  //   //   const myData = JSON.parse(data);
  //   //   console.warn("myData", myData);
  //   //   // statusData = false;
  //   // }
  //   // }
  // }, []);

  return (
    <div className="pageStyle">
      <div>Question</div>
      <div>
        {
          // eslint-disable-next-line array-callback-return, consistent-return, no-unused-vars
          getCurrentQuestion().map((question, index) => {
            console.info("question0", question);
            if (question.apiName === "capital") {
              // eslint-disable-next-line react/no-array-index-key
              return <QuestionCapital question={question} />;
              // return question.answers[0].cca3;
              // return index;
            }
          })
        }
        {console.info("getCurrentQuestion()", getCurrentQuestion())}
        <button type="button" onClick={nextPage}>
          Next Page
        </button>
      </div>
    </div>
  );
}

export default Question;
