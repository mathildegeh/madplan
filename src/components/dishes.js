import recipes from "../data/recipes.json";
import { Filter } from "./filter";
import React, { useState } from "react";

export function Dishes() {
  const [numDishes, setNumDishes] = useState();

  // if setNumDishes is not set or equal to 0, ask to set number of dishes
  if (!numDishes || numDishes === 0) {
    return (
      <div className="dishContainer">
        <Filter onChangeNumDishes={setNumDishes} />
      </div>
    );
  }

  return (
    <div className="dishContainer">
      <Filter onChangeNumDishes={(numDishes) => setNumDishes(numDishes)} />
      {recipes
        .sort(() => Math.random() - 0.5)
        .slice(0, numDishes)
        .map((recipes) => (
          <div key={recipes.id}>
            <p>{recipes.name}</p>
          </div>
        ))}
    </div>
  );
}
