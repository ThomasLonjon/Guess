import React, { useState, useEffect } from "react";

function Drinks() {
  const [cocktail, setCocktail] = useState({});
  const [cocktails, setCocktails] = useState([]);
  const [options, setOptions] = useState([]);
  useEffect(() => {
    fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
    )
      .then((response) => response.json())
      .then((data) => setCocktails(data.drinks))
      .catch((error) => console.info(error));
  }, []);
  useEffect(() => {
    const randomCocktail =
      cocktails[Math.floor(Math.random() * cocktails.length)];
    setCocktail(randomCocktail);
  }, [cocktails]);
  useEffect(() => {
    const allCocktails = [...cocktails];
    allCocktails.splice(allCocktails.indexOf(cocktail), 1);
    const otherCocktails = [];
    while (otherCocktails.length < 3) {
      const randomCocktail =
        allCocktails[Math.floor(Math.random() * allCocktails.length)];
      otherCocktails.push(randomCocktail?.strDrink);
      allCocktails.splice(allCocktails.indexOf(randomCocktail), 1);
    }
    const correctOption = cocktail?.strDrink;
    setOptions(
      [...otherCocktails, correctOption].sort(() => 0.5 - Math.random())
    );
  }, [cocktail, cocktails]);
  useEffect(() => {
    console.info("cocktail array ", options);
  }, [options]);
  const [answerMessage, setAnswerMessage] = useState(null);
  const handleOptionClick = (option) => {
    console.info(option);
    console.info(cocktail?.strDrink);
    if (option === cocktail.strDrink) {
      console.info({ options, index: options.indexOf(options) });
      setAnswerMessage("Correct answer!");
    } else {
      setAnswerMessage("Wrong answer!");
    }
  };
  // const rightIndex = options.indexOf(cocktail);
  // console.info("rightIndex", rightIndex);
  // useEffect(() => {
  //   console.info("render");
  // }, [answerMessage]);
  return (
    <div>
      <img src={cocktail?.strDrinkThumb} alt={cocktail?.strDrink} />
      {options.map((option) => (
        <button
          type="button"
          key={option}
          onClick={() => handleOptionClick(option)}
        >
          {option}
        </button>
      ))}
      {answerMessage && <p>{answerMessage}</p>}
    </div>
  );
}
export default Drinks;
