import { useParams } from "react-router-dom";
import { useFetch, API_URL } from "./useFetch";
import { Loader, ChevronLeft, ChevronRight, Utensils } from "lucide-react";
import { Link } from "react-router-dom";
const RecipeDetailView = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`${API_URL}/lookup.php?i=${id}`);
  const meal = data?.meals[0] ?? {};
  // console.log(data);
  // console.log(meal);
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measurement = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measurement: measurement ? measurement.trim() : "",
      });
    }
  }
  if (loading)
    return (
      <div className="text-center p-8  text-gray-400 my-10">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />
        Preparing your recipe detail...
      </div>
    );
  if (error)
    return <div className="text-center text-red-500 my-10">Error loading</div>;
  return (
    <>
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/"
          className="text-yellow-400 hover:text-yeloow-400 flex items-center mb-6 font-medium transition text-lg group"
        >
          <ChevronLeft className="w-6 h-6 mr-1 transition" /> Back To Home
        </Link>
        <div className="container lg:flex lg:space-x-12 lg:justify-between p-6 md:p-12    bg-gray-900 rounded-3xl shadow-2xl shadow-black/70 border border-gray-800">
          <div className="mb-4">
            <h2 className="text-white pb-6 font-extrabold leading-tight text-4xl">
              {meal?.strMeal}
            </h2>

            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className=" w-100 h-100 rounded-xl p-1 object-cover ring-2 ring-blue-500/50 "
            />
          </div>

          <div className=" lg:w-1/2 bg-gray-800 shadow-inner shadow-black/30 p-6 rounded-xl border broder-gray-700">
            <h2 className="flex items-center mb-6 text-yellow-400 text-3xl font-bold  border-b border-gray-700 pb-3 ">
              <Utensils className="w-7 h-7 mr-3   text-blue-500 " />
              Key Ingredients
            </h2>
            <div className="pb-4 border-b border-gray-700">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gapx-6 gapy-4 list-none p-0 ">
                {ingredients.map((item, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-300 space-x-2 flex justify-left items-center leading-relaxed"
                  >
                    <ChevronRight className="text-blue-500 w-3 h-3 shrink-0 mr-2" />
                    <span className="font-bold text-white mr-1 ">
                      {item.measurement}
                    </span>
                    <span>{item.ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4">
              <div className="text-lg text-gray-400 flex flex-wrap gap-2">
                <span className=" text-white bg-blue-600 space-x-3 px-4 py-1 5 font-semibold shadow md rounded-full hover:bg-blue-700 cursor-pointer ">
                  {meal.strCategory}
                </span>
                <span className="text-white bg-green-600 space-x-3 px-4 py-1 5 font-semibold shadow md rounded-full hover:bg-green-700 cursor-pointer ">
                  {meal?.strArea}
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
export default RecipeDetailView;
