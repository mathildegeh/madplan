import React from "react";

// inputfield that asks for number of recipes to display
export function Filter(props) {
  return (
    <div className="centeredContainer">
      <p>Hvor mange retter skal du bruge? 🧑‍🍳😋</p>
      <input
        type="number"
        placeholder="indtast antal, fx 3"
        onChange={(e) => props.onChangeNumDishes(e.target.value)}
        className="boxLarge"
      />
    </div>
  );
}
