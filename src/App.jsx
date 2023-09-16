import Header from "./components/Header";
import { useEffect, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";
import Home from "./pages/Home";

function App() {
  const [theme, setTheme] = useState("light");
  const [toggle, setToggle] = useState(false);
  const [val, setVal] = useState("");

  const handleChange = (value) => {
    setVal(value);
  };

  useEffect(() => {
    setTheme(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
    );
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        className={`${theme} ${
          theme === "dark" ? "bg-[#121212]" : ""
        } min-h-screen`}
      >
        <Header
          toggle={toggle}
          setToggle={setToggle}
          val={val}
          setVal={setVal}
          handleChange={handleChange}
        />
        <Home toggle={toggle} setToggle={setToggle} val={val} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
