import recipes from "../data/recipes.json";
import React from "react";
import Card from "react-bootstrap/Card";

// function that maps out all of the recipes from the data

export function Recipes() {
  return (
    <div className="dishCardContainer">
      {recipes.map((recipe) => {
        return (
          <div className="dishCard" key={recipe.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title className="dishCardTitle">{recipe.name}</Card.Title>
                <Card.Text>
                  <i>{recipe.ingredients}</i>
                </Card.Text>
                <Card.Link href={recipe.link} target="_blank">
                  {recipe.link}
                </Card.Link>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
