import recipes from "../data/recipes.json";
import React, { useState } from "react";

// function that maps out all of the recipes from the data
export function Recipes() {
  return (
    <div>
      {recipes.map((recipe) => {
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
  );
}
