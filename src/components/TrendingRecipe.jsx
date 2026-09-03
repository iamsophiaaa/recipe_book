import { useFetch } from "./useFetch";
import RecipeCard from "./RecipeCard";
import SliderComponent from "react-slick";

import { Clock, Loader } from "lucide-react";
const TrendingRecipe = ({ title, fetchUrl }) => {
  const Slider = SliderComponent.default || SliderComponent;
  const { data, loading, error } = useFetch(fetchUrl);
  const meals = data?.meals || [];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    appendDots: () => null,
    customPaging: () => null,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  if (loading)
    return (
      <div className="text-center p-8  text-gray-400 my-10">
        <Loader className="animate-spin inline-block mr-2 text-blue-400" />
        Loading{title}...
      </div>
    );
  if (error)
    return (
      <div className="text-center text-red-500 my-10">
        Error loading {title}
      </div>
    );
  if (meals.length === 0) return null; // Prevents slider from crashing on empty data

  console.log(meals);
  return (
    <>
      <section className="mt-2 mx-auto ">
        <h2 className="text-3xl font-extrabold mb-6 text-gray-100 tracking-tight border-l-4 border-yellow-400 pl-4 flex items-center ">
          <Clock className="mr-3 w-6 h-6 text-blue-500" />
          {title}
        </h2>
        <div className="w-full mx-auto">
          <Slider {...settings}>
            {meals.map((meal) => (
              <div key={meal.idMeal} className="outline-none px-2">
                <div className=" mb-5 relative bg-gray-900 group rounded-xl shadow-xl  shadow-black overflow-hidden transform transition duration-500 cursor-pointer border border-gray-800 hover:shadow-blue-600">
                  <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500 transition duration-500"></div>
                  <div className="flex flex-col justify-center items-center p-5">
                    <img
                      src={meal?.strMealThumb}
                      alt={meal?.strMeal}
                      className="h-30 w-30 rounded-xl border border-yellow-400 transition duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
export default TrendingRecipe;
