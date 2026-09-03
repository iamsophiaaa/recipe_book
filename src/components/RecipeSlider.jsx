import { useFetch } from "./useFetch";
import RecipeCard from "./RecipeCard";
import SliderComponent from "react-slick";

import { Clock, Loader } from "lucide-react";
const RecipeSlider = ({ title, fetchUrl }) => {
  const Slider = SliderComponent.default || SliderComponent;
  const { data, loading, error } = useFetch(fetchUrl);
  const meals = data?.meals || [];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
        <h2 className="text-3xl font-extrabold mb-6 text-gray-100 tracking-tight border-l-4 border-yellow-400 pl-4 flex items-center">
          <Clock className="mr-3 w-6 h-6 text-blue-500" />
          {title}
        </h2>
        <div style={{ width: "90%", margin: "auto", padding: "10px" }}>
          <Slider {...settings}>
            {meals.map((meal) => (
              <div key={meal.idMeal} className="outline-none px-2">
                <RecipeCard meal={meal} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
export default RecipeSlider;
