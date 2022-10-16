import React from "react";
import recipes from "../data/recipes.json";

const Buttons = ({ setItem, menuItems }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <button
          className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold"
          id="veggie"
          onClick={() => console.log("sss")}
        >
          veggie
        </button>
        <button className="btn-dark text-white p-1 px-2 mx-5 btn fw-bold">
          veggie
        </button>

        <button
          className="btn-dark text-white p-1 px-3 mx-5 fw-bold btn"
          onClick={() => setItem(recipes)}
        >
          All
        </button>
      </div>
    </>
  );
};

export default Buttons;
