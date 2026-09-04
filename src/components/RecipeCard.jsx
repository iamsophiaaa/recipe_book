import { Link } from "react-router-dom";
const RecipeCard = ({ meal }) => {
  return (
    <>
      <Link to={`/recipe/${meal.idMeal}`}>
        <div className=" relative bg-gray-900 group rounded-xl shadow-xl  shadow-black overflow-hidden transform transition duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600">
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500 transition duration-500"></div>
          <div className="flex flex-col justify-center items-center p-5">
            <img
              src={meal?.strMealThumb}
              alt={meal?.strMeal}
              className="w-60 h-69 rounded-xl border border-yellow-400 transition duration-500 group-hover:scale-105"
            />
            <div className="p-2 text-center">
              <h2 className="text-xl pb-3 font-bold text-gray-100 mb-1 group-hover:text-blue-400 transition duration-300">
                {meal.strMeal}
              </h2>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default RecipeCard;
