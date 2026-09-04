import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeCard from "./components/RecipeCard";
import RecipeDetailView from "./components/RecipeDetailView";
import Cuisine from "./components/Cuisine";
import HomeView from "./components/HomeView";
import SearchView from "./components/SearchView";
import { useCallback, useState } from "react";
function App() {
  const API_URL = "https://www.themealdb.com/api/json/v1/1/";
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoading, setSearchLoading] = useState(false);
  const handleSearch = useCallback(async (query) => {
    setSearchLoading(true);
    setSearchQuery(query);
    setSearchResult([]);

    try {
      const res = await fetch(`${API_URL}search.php?s=${query}`);
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      const result = await res.json();
      console.log(result);
      setSearchResult(result?.meals || []);
    } catch (error) {
      console.log(error);
    } finally {
      setSearchLoading(false);
    }
  }, []);
  return (
    <>
      <Router>
        <div className="min-h-screen bg-gray-950 font-sans text-gray-100">
          <NavBar handleSearch={handleSearch} />
          <Cuisine />
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/recipe/:id" element={<RecipeDetailView />} />
            <Route
              path="/search/:query"
              element={
                <SearchView meals={searchResult} loading={searchLoading} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
