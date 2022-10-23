import "./App.css";
import { NavigationBar } from "./components/navbar";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Mealplan } from "./components/makeMealplan";
import { Recipes } from "./components/allRecipes";

function App() {
  return (
    <div className="App">
      <HashRouter base="/">
        <NavigationBar />
        <Routes>
          <Route path="/madplan" element={<Mealplan />} />
          <Route path="/madplan/all-recipes" element={<Recipes />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
