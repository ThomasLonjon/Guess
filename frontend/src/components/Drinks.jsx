import React, { useState, useEffect } from "react";

function Drinks() {
  const [cocktails, setCocktails] = useState([]);
  const [rightAnswer, setRightAnwser] = useState({});
  const [answers, setAnswers] = useState([]);
  const [responseObject, setResponseObject] = useState({});
  useEffect(() => {
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
    )
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks))
      .catch((error) => console.info(error));
  }, []);

  // useEffect(() => {
  //   // On prend une element aléatoire de cocktails pour avoir un objet cocktail qui sera la réponse
  //   if (cocktails.length)
  //     setRightAnwser(cocktails[Math.floor(Math.random() * cocktails.length)]);
  // }, [cocktails.length]);

  useEffect(() => {
    if (cocktails) {
      console.info("render");
      const randomIndex = Math.floor(Math.random() * cocktails.length);

      if (answers.length < 4) {
        setAnswers((prevState) =>
          [...prevState, cocktails[randomIndex]].filter(Boolean)
        );
      }
      if (answers.length === 4) {
        const randomIndex = Math.floor(Math.random() * answers.length);

        setRightAnwser(answers[randomIndex]);
      }
    }
  }, [answers.length, cocktails.length]);

  useEffect(() => {
    setResponseObject({
      answers,
      rightIndex: answers.indexOf(rightAnswer),
    });
  }, [answers, rightAnswer]);

  useEffect(() => {
    console.info(responseObject);
  }, [responseObject]);

  const handleOptionClick = (baguette) => {
    // console.info({ answers, rightIndex: answers.indexOf(rightAnswer) });
  };

  return (
    <div>
      <img src={rightAnswer?.strDrinkThumb} alt={rightAnswer?.strDrink} />
      {answers.map((option) => (
        <button
          type="button"
          key={option}
          onClick={() => handleOptionClick(option.strDrink)}
        >
          {option.strDrink}
        </button>
      ))}
      {/* {answerMessage && <p>{answerMessage}</p>} */}
    </div>
  );
}
export default Drinks;
