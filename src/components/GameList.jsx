import { useEffect, useState } from "react";
import TrendGames from "./TrendGames";
import GamesByGenre from "./GamesByGenre";

const key = import.meta.env.VITE_API_KEY;

const GameList = ({ getGameListByGenre, gameListByGenre, selectedGenre }) => {
  const [gameList, setGameList] = useState([]);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${key}`)
      .then((resp) => resp.json())
      .then((json) => setGameList(json.results));

    getGameListByGenre();
  }, []);

  return (
    <div>
      <div className="relative">
        {gameList.length > 0 ? (
          <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent">
            <h2 className="text-[24px] text-white font-bold">
              {gameList[0].name}
            </h2>
            <button className="bg-blue-700 text-white px-2 p-1 rounded-sm hover:scale-105 hover:font-bold transition-scale ease-in-out duration-300">
              Get Now
            </button>
          </div>
        ) : null}
        {gameList.length > 0 && gameListByGenre.length > 0 ? (
          <img
            src={gameList[0].background_image}
            className="w-full object-cover md:h-[320px] lg:h-full rounded-lg"
          ></img>
        ) : null}
      </div>
      <TrendGames gameListProp={gameList} />
      <GamesByGenre
        gameListByGenreProp={gameListByGenre}
        selectedGenre={selectedGenre}
      />
    </div>
  );
};

export default GameList;
