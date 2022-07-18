import recipes from "../data/recipes.json";

export function Dishes() {
  // display initialState
  return (
    <div>
      <h1>Dishes</h1>
      <p>fetching dishes...</p>
      {recipes.map((recipes) => (
        <div key={recipes.id}>{recipes.name}</div>
      ))}
    </div>
  );
}
