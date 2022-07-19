import recipes from "../data/recipes.json";

export function Dishes() {
  // display initialState
  return (
    <div className="dishContainer">
      {recipes.map((recipes) => (
        <div key={recipes.id}>
          <p>{recipes.name}</p>
        </div>
      ))}
    </div>
  );
}
