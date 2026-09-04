import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeCard from "./components/RecipeCard";
import RecipeDetailView from "./components/RecipeDetailView";
import Cuisine from "./components/Cuisine";
import HomeView from "./components/HomeView";
import SearchView from "./components/SearchView";
function App() {
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-950 font-sans text-gray-100">
          <NavBar />
          <Cuisine />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/recipe/:id" element={<RecipeDetailView />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
