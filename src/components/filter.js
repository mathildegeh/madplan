import React from "react";
import { GrPowerReset } from "react-icons/gr";

// inputfield that asks for number of recipes to display
export function Filter(props) {
  return (
    <div className="centeredContainer">
      <p>Hvor mange retter skal du bruge? 🧑‍🍳</p>
      <div>
        <input
          type="number"
          placeholder="indtast antal, fx 3"
          value={props.inputValue}
          onChange={(e) => props.onChangeNumDishes(e.target.value)}
          className="boxLarge"
        />
        <button onClick={() => props.resetNumDishes()}>
          <GrPowerReset />
        </button>
      </div>
    </div>
  );
}
