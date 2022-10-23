import "./App.css";
import { NavigationBar } from "./components/navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Mealplan } from "./components/makeMealplan";
import { Recipes } from "./components/allRecipes";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={"/madplan/"}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Mealplan />} />
          <Route path="/all-recipes" element={<Recipes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
