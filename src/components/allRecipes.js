import recipes from "../data/recipes.json";
import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// function that maps out all of the recipes from the data

export function Recipes() {
  return (
    <div className="dishCardsContainer">
      {recipes.map((recipe) => {
        return (
          <div key={recipe.id}>
            <Card className="dishCard">
              <Card.Body>
                <Card.Title className="dishCardTitle">{recipe.name}</Card.Title>
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
  );
}
