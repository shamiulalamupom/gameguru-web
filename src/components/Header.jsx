import {
  HiOutlineMagnifyingGlass,
  HiMoon,
  HiSun,
  HiArrowUturnLeft,
} from "react-icons/hi2";
import { HiMenuAlt2 } from "react-icons/hi";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = ({ toggle, setToggle, val, setVal, handleChange }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center p-3">
      <div>
        <HiMenuAlt2
          onClick={() => setToggle(!toggle)}
          className={`${
            toggle ? "hidden" : "block"
          } md:hidden text-[35px] dark:text-white cursor-pointer`}
        />
        <HiArrowUturnLeft
          onClick={() => setToggle(!toggle)}
          className={`${
            toggle ? "block" : "hidden"
          } md:hidden text-[35px] dark:text-white cursor-pointer`}
        />
      </div>
      <h1 className="hidden md:block text-[20px] md:text-[35px] font-bold dark:text-white">
        GameGuru
      </h1>
      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
        <HiOutlineMagnifyingGlass />
        <input
          onChange={(e) => handleChange(e.target.value)}
          value={val}
          type="text"
          placeholder="Search"
          className="px-2 bg-transparent outline-none w-full"
        />
      </div>
      <div>
        {theme === "light" ? (
          <HiMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("dark");
              localStorage.setItem("theme", "dark");
            }}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {
              setTheme("light");
              localStorage.setItem("theme", "light");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
