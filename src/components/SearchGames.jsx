import { useEffect, useState } from "react";

const key = import.meta.env.VITE_API_KEY;

const SearchGames = ({ val }) => {
  const [gameList, setGameList] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${key}`)
      .then((resp) => resp.json())
      .then((json) => setGameList(json.results));
  }, []);

  useEffect(() => {
    getFilteredGames(val);
  }, [val]);

  const getFilteredGames = (value) => {
    const res = gameList.filter((game) => {
      return (
        value &&
        game &&
        game.name &&
        game.name.toLowerCase().includes(value.toLowerCase())
      );
    });

    setFilteredGames(res);
  };

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-5 mt-5 ${
        filteredGames.length > 0 ? "mb-5" : ""
      }`}
    >
      {filteredGames.map((item, id) => {
        return (
          <div
            key={id}
            className="bg-[#76a8f75e] p-3 rounded-lg pb-12 h-full hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
          >
            <img
              src={item.background_image}
              className="w-full h-[80%] rounded-xl object-cover"
            ></img>
            <h2 className="text-[20px] dark:text-white font-bold">
              {item.name}
              <span
                className="p-1 rounded-sm ml-2 text-[10px]
                 bg-green-100 text-green-700 font-medium"
              >
                {item.metacritic}
              </span>
            </h2>
            <h2 className="text-gray-500 dark:text-gray-300">
              ⭐{item.rating} 🗨️{item.reviews_count} 🔥
              {item.suggestions_count}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default SearchGames;
