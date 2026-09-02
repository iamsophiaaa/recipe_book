import { Globe } from "lucide-react";
const Cuisine = () => {
  const featuredAreas = [
    "American",
    "British",
    "Canadian",
    "Chinese",
    "Indian",
    "Italian",
    "Mexican",
    "Russian",
    "Thai",
  ];
  return (
    <>
      <div className="bg-gray-900/80 border-y-gray-800 shadow-inner shadow-black/20">
        <div className="max-w-8xl mx-auto px-4 lg-px-8 overflow-x-auto scrollbar-hide">
          <div className="flex items-center space-x-4 py-3 ">
            <div className="flex items-center  text-lg font-bold  pr-3 whitespace-nowrap text-yellow-400">
              <Globe className="w-6 h-6 mr-2" />
              Global Cuisines:
            </div>
            {featuredAreas.map((area) => (
              <button
                key={area}
                className="bg-gray-800 text-gray-200 whitespace-nowrap text-sm font-medium border border-gray-500 cursor-pointer rounded-full px-4 py-1 hover:text-white hover:bg-blue-600 hover:border-none hover:shadow-blue-800/50 transform hover:scale-[1.05]"
              >
                {area}
              </button>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};
export default Cuisine;
