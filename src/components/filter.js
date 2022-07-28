import React from "react";

// inputfield that asks for number of recipes to display
export function Filter(props) {
  return (
    <div className="centeredContainer">
      <p>Hvor mange retter skal du bruge?</p>
      <input
        label="vælg antal retter"
        type="number"
        placeholder="Antal retter"
        onChange={(e) => props.onChangeNumDishes(e.target.value)}
        className="boxLarge"
      />
    </div>
  );
}
