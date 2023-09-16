import { useEffect, useState } from "react";

const key = import.meta.env.VITE_API_KEY;

const GenreList = ({ genreId, selectedGenre, setToggle }) => {
  const [genreList, setGenreList] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch(`https://api.rawg.io/api/genres?key=${key}`)
      .then((resp) => resp.json())
      .then((json) => setGenreList(json.results));
  }, []);

  return (
    <div>
      <h2 className="text-[30px] font-bold dark:text-white">Genres</h2>
      {genreList.map((genre, index) => {
        return (
          <div
            onClick={() => {
              setActiveIndex(index);
              genreId(genre.id);
              selectedGenre(genre.name);
              setToggle(false);
            }}
            className={`flex gap-2 items-center mb-2 cursor-pointer hover:bg-gray-300 p-2 rounded-lg hover:dark:bg-gray-600 group ${
              activeIndex === index ? "bg-gray-300 dark:bg-gray-600" : ""
            }`}
            key={index}
          >
            <img
              src={genre.image_background}
              className={`w-[40px] h-[40px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${
                activeIndex === index ? "scale-105" : ""
              }`}
            ></img>
            <h3
              className={`dark:text-white text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${
                activeIndex === index ? "font-bold" : ""
              }`}
            >
              {genre.name}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default GenreList;
