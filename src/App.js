import "./App.css";
import { NavigationBar } from "./components/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dishes } from "./components/dishes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Dishes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
