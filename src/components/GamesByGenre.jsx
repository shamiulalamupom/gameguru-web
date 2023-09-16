const GamesByGenre = ({ gameListByGenreProp, selectedGenre }) => {
  return (
    <div>
      <h2 className="font-bold text-[30px] dark:text-white mt-5">
        {selectedGenre} Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 gap-5 mt-5">
        {gameListByGenreProp.map((game, id) => {
          return (
            <div
              key={id}
              className="bg-[#76a8f75e] p-3 rounded-lg pb-12 h-full hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
            >
              <img
                src={game.background_image}
                className="w-full h-[80%] rounded-xl object-cover"
              ></img>
              <h2 className="text-[20px] dark:text-white font-bold">
                {game.name}
                <span
                  className="p-1 rounded-sm ml-2 text-[10px]
                 bg-green-100 text-green-700 font-medium"
                >
                  {game.metacritic}
                </span>
              </h2>
              <h2 className="text-gray-500 dark:text-gray-300">
                ⭐{game.rating} 🗨️{game.reviews_count} 🔥
                {game.suggestions_count}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GamesByGenre;
