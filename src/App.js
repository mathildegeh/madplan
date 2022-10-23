import "./App.css";
import { NavigationBar } from "./components/navbar";
import { Routes, Route, BrowserRouter, HashRouter } from "react-router-dom";
import { Mealplan } from "./components/makeMealplan";
import { Recipes } from "./components/allRecipes";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Mealplan />} />
          <Route path="/all-recipes" element={<Recipes />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
