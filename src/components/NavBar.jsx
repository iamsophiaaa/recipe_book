import { Zap, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const NavBar = ({ handleSearch }) => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const searchHandler = (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleSearch(input.trim());
      navigate(`search/${input}`);
      setInput("");
    }
  };
  return (
    <>
      <nav className="sticky top-0 z-50  bg-gray-950/90 backdrop-blur-md shadow-2xl shadow-black/50 border-b border-blue-900/50 ">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between items-center h-16">
            <Link
              to={"/"}
              className="flex items-center  text-2xl font-black text-white hover:text-blue-400 transition duration-300 tracking-widest"
            >
              <Zap className="text-yellow-400 fill-yellow-400 w-6 h-6 mr-2" />
              <span className="text-blue-400 ">Pro</span>Chef
            </Link>

            <form
              onSubmit={searchHandler}
              className="flex-1 max-w-lg mx-4 hidden sm:flex"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Search dishes, ingredients, or cuisines... "
                className="px-5 py-2 cursor-pointer w-full transition duration-300  rounded-l-full text-gray-50 bg-gray-900 border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-600/50 shadow-inner shadow-black/50"
              />
              <button
                type="submit"
                className="bg-linear-to-r from-blue-600 to-cyan-500 text-white rounded-r-full p-2 hover:from-blue-700 hover:to-cyan-600 transition duration-300 shadow-lg shadow-blue-800/50 hover:shadow-xl hover:shadow-blue-800/90"
              >
                <Search className="w-6 h-6 text-white" />
              </button>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center"></div>
      </nav>
    </>
  );
};
export default NavBar;
