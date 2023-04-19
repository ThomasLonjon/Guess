import { useEffect, useState } from "react";

export default function Drinks() {
  const [drinks, setDrinks] = useState([]);

  const getDrinks = () => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a")
      .then((response) => response.json())
      .then((data) => setDrinks(data.drinks));
  };

  useEffect(() => {
    getDrinks();
    console.warn(drinks);
  }, []);

  useEffect(() => {
    console.info(drinks);
  }, [drinks]);

  return (
    <div className="drink">
      {drinks && (
        <Drinks
          strCategory={drinks.strCategory}
          strDrinkThumb={drinks.strDrinkThumb}
          strInstructions={drinks.strInstructions}
        />
      )}
    </div>
  );
}
