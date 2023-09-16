const TrendGames = ({ gameListProp }) => {
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px] dark:text-white">Trending Games</h2>
      <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {gameListProp.map((game, index) => {
          return (
            index < 4 && (
              <div
                key={index}
                className="bg-[#76a8f75e] rounded-b-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
              >
                <img
                  src={game.background_image}
                  className="h-[270px] rounded-t-lg object-cover"
                ></img>
                <h2 className="dark:text-white text-[20px] font-bold p-2">
                  {game.name}
                </h2>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default TrendGames;
