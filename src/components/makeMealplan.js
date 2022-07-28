import recipes from "../data/recipes.json";
import { Filter } from "./filter";
import React, { useState } from "react";

export function Mealplan() {
  const [numDishes, setNumDishes] = useState();
  const [showIngredients, setShowIngredients] = useState(false);

  // if numDishes is not set or equal to 0, ask to set number of dishes
  if (!numDishes || numDishes === 0) {
    return (
      <div className="dishContainer">
        <Filter onChangeNumDishes={setNumDishes} />
      </div>
    );
  }

  // if numDishes is larger than the number of recipes, alert error message and reset numDishes
  if (numDishes > recipes.length) {
    return (
      <div className="centeredContainer">
        <p>Hov. Så mange opskrifter kender jeg slet ikke 😔</p>
        <button onClick={() => setNumDishes(0)}>Prøv igen</button>
      </div>
    );
  }

  // load all recipes from the data file and store them in an array
  const allRecipes = recipes.map((recipe) => {
    return recipe;
  });

  // based on the number of dishes, pick random recipes from the array
  // no duplicates
  const randomRecipes = [];
  for (let i = 0; i < numDishes; i++) {
    let randomRecipe =
      allRecipes[Math.floor(Math.random() * allRecipes.length)];
    if (!randomRecipes.includes(randomRecipe)) {
      randomRecipes.push(randomRecipe);
    }
  }

  // display the week number
  let currentDate = new Date();
  let startDate = new Date(currentDate.getFullYear(), 0, 1);
  var days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000));
  var weekNumber = Math.ceil(days / 7);

  // export the random recipes as a text file
  const downloadRecipes = () => {
    const text = randomRecipes
      .map((recipe) => {
        // if there's no link, map only the name of the recipe
        if (!recipe.link) {
          return `${recipe.name}`;
        }
        // if there's a link, map the name and the link separeted by a dash
        return `${recipe.name} - ${recipe.link}`;
      })
      .join("\n");

    const blob = new Blob([text], {
      type: "text/plain",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "madplan.txt";
    link.click();
  };

  // make a comma separated list of the ingredients in the random recipes
  const ingredients = randomRecipes
    .map(
      (recipe) => {
        return recipe.ingredients;
      }
      // join the ingredients into one string
    )
    .join(", ");

  // sort the ingredients alphabetically
  const sortedIngredients = ingredients.split(", ").sort().join(", ");

  // make a list of the sorted ingredients and count how many times each ingredient is used
  const ingredientList = sortedIngredients.split(", ");
  const ingredientCount = {};
  ingredientList.forEach((ingredient) => {
    ingredientCount[ingredient] = (ingredientCount[ingredient] || 0) + 1;
  });

  // sort ingredient count by alphabetical order
  const sortedIngredientCount = Object.entries(ingredientCount);
  sortedIngredientCount.sort((a, b) => {
    if (a[0] < b[0]) {
      return -1;
    }
    if (a[0] > b[0]) {
      return 1;
    }
    return 0;
  });

  // button that returns the ingredients as a text file
  const downloadIngredients = () => {
    const text = sortedIngredientCount
      .map((ingredient) => {
        if (ingredient[1] > 1) {
          return `${ingredient[1]}x ${ingredient[0]}`;
        } else {
          return `${ingredient[0]}`;
        }
      })

      // join the ingredients into one string
      .join("\n");

    const blob = new Blob([text], {
      type: "text/plain",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ingredienser.txt";
    link.click();
  };

  // return the array of random recipes
  return (
    <div>
      <Filter onChangeNumDishes={(numDishes) => setNumDishes(numDishes)} />
      <div className="dishList">
        {randomRecipes.map((recipe) => {
          return (
            <div className="dish" key={recipe.id}>
              <h3>{recipe.name}</h3>
              <p>Ingredienser: {recipe.ingredients}</p>
              <a href={recipe.link} target="_blank">
                {recipe.link}
              </a>
            </div>
          );
        })}
      </div>

      <div className="centeredContainer">
        <div>
          <button onClick={downloadIngredients}>Hent ingrediensliste</button>
          <button onClick={downloadRecipes}>Hent madplan</button>
        </div>
      </div>
    </div>
  );
}
