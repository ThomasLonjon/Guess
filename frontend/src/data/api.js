import QuestList from "./questList";

export default {
  // function Api Capital
  searchDataCapital: async (numberQuest) => {
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
              country.capital !== null &&
              country.cca3 !== null
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
  },
  searchDataCocktail: async (numberQuest) => {
    const tabDataCoktail = [];
    await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink"
    )
      .then((res) => res.json())
      .then((data) => {
        let i = 0;
        while (i < numberQuest) {
          const randomIndex = () =>
            Math.floor(Math.random() * data.drinks.length);
          // console.info("randomIndex", randomIndex);
          const cocktailSet = new Set();
          while (cocktailSet.size < 4) {
            cocktailSet.add(data.drinks[randomIndex()]);
          }
          const cocktailArray = Array.from(cocktailSet);

          console.info("cocktailArray", cocktailArray);
          const rightIndex = Math.floor(Math.random() * 3);

          const duplicateCocktail = tabDataCoktail.some(
            (element) =>
              // console.log("element", element)
              element.strDrink === cocktailArray[rightIndex]?.strDrink
          );
          // element.strDrink === cocktailArray[rightIndex]?.strDrink
          // console.warn("duplicate", duplicate);
          if (!duplicateCocktail) {
            tabDataCoktail.push({
              apiName: "cocktail",
              quest: QuestList.cocktail,
              answers: cocktailArray,
              righAnswer: rightIndex,
            });
            i += 1;
          }
        }
        console.warn("tabDataCoktail", tabDataCoktail);
      })
      .catch((err) => console.error("err -->", err));
    // console.warn("tabDataCoktail", tabDataCoktail);
    // console.warn("tabDataCoktail.length", tabDataCoktail.length);
    return tabDataCoktail;
  },
};
