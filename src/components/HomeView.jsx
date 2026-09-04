import RecipeSlider from "./RecipeSlider";
import TrendingRecipe from "./TrendingRecipe";

import { API_URL } from "./useFetch";
const HomeView = () => {
  return (
    <>
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <RecipeSlider
          title="Staff Curated Picks"
          fetchUrl={`${API_URL}search.php?f=s`}
        />
        <TrendingRecipe
          title="Quick & Easy Meals Picks"
          fetchUrl={`${API_URL}filter.php?a=Canadian`}
        />
      </main>
    </>
  );
};
export default HomeView;
