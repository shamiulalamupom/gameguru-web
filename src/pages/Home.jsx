import { useState } from "react";
import GameList from "../components/GameList";
import GenreList from "../components/GenreList";
import SearchGames from "../components/SearchGames";

const key = import.meta.env.VITE_API_KEY;

const Home = ({ toggle, setToggle, val }) => {
  const [gameListByGenre, setGameListByGenre] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("Action");

  const getGameListByGenre = (id) => {
    fetch(`https://api.rawg.io/api/games?key=${key}&genres=${id}`)
      .then((resp) => resp.json())
      .then((json) => setGameListByGenre(json.results));
  };

  return (
    <div>
      <div className="grid grid-cols-4 px-8 relative">
        <div
          className={`h-full ${
            toggle ? "block col-span-4" : "hidden"
          } md:block `}
        >
          <GenreList
            setToggle={setToggle}
            genreId={(genreId) => getGameListByGenre(genreId)}
            selectedGenre={(name) => setSelectedGenre(name)}
          />
        </div>
        <div className={`col-span-4 md:col-span-3 h-full pl-5`}>
          <SearchGames val={val} />
          <GameList
            getGameListByGenre={() => getGameListByGenre(4)}
            gameListByGenre={gameListByGenre}
            selectedGenre={selectedGenre}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
