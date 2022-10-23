import recipes from "../data/recipes.json";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { GrPowerReset } from "react-icons/gr";

// function that maps out all of the recipes from the dat

export function Recipes() {
  const [myRecipes, setRecipes] = useState(recipes);

  const filterRecipes = (e) => {
    const search = e.target.value.toLowerCase();
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.ingredients.toLowerCase().includes(search)
    );
    setRecipes(filteredRecipes);
  };

  const showVegetarian = () => {
    const meats = [
      "oksekød",
      "kebab",
      "guanciale",
      "hakket oksekød",
      "kyllingefilet",
      "kyllingefileter",
      "kylling",
      "laks",
      "pølser",
    ];
    const nonMeats = recipes.filter(
      (recipe) =>
        !meats.some((value) => recipe.ingredients.toLowerCase().includes(value))
    );
    setRecipes(nonMeats);
  };

  const showPasta = () => {
    const pastas = ["pasta", "frisk pasta", "spaghetti"];
    const pastaDishes = recipes.filter((recipe) =>
      pastas.some((value) => recipe.ingredients.toLowerCase().includes(value))
    );
    setRecipes(pastaDishes);
  };

  const showRice = () => {
    const rice = ["ris,", "jasminris"];
    const riceDishes = recipes.filter((recipe) =>
      rice.some((value) => recipe.ingredients.toLowerCase().match(value))
    );
    setRecipes(riceDishes);
  };

  const showAll = () => {
    setRecipes(recipes);
  };

  return (
    <div>
      <div className="centeredContainer">
        <div>
          <input
            className="boxLarge"
            type="text"
            placeholder="søg efter en ret, fx 'laks'"
            onChange={(e) => filterRecipes(e)}
          ></input>
          <button onClick={() => showVegetarian()}>Vegetarretter</button>
          <button onClick={() => showPasta()}>Pastaretter</button>
          <button onClick={() => showRice()}>Risretter</button>
          <button onClick={() => showAll()}>
            <GrPowerReset />
          </button>
        </div>
      </div>
      <div className="dishCardsContainer">
        {myRecipes.map((recipe) => {
          return (
            <div key={recipe.id}>
              <Card className="dishCard">
                <Card.Body>
                  <Card.Title className="dishCardTitle">
                    {recipe.name}
                  </Card.Title>
                  <Card.Text className="dishCardText">
                    <i>{recipe.ingredients}</i>
                  </Card.Text>
                  {recipe.link != "" ? (
                    <Card.Link
                      className="dishCardLink"
                      href={recipe.link}
                      target="_blank"
                    >
                      Se opskrift
                    </Card.Link>
                  ) : (
                    ""
                  )}
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
