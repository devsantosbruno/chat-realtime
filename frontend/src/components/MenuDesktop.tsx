import { Moon, SunDim } from "phosphor-react";
import { useEffect, useState } from "react";

export function MenuDesktop() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (darkMode === false || darkMode === "light") {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      setDarkMode(true);
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-[#ffffffee] dark:bg-[#20232B]">
      <button
        type="button"
        onClick={() => setDarkMode(!darkMode)}
        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
      >
        {darkMode === true || darkMode === "dark" ? (
          <SunDim size={16} />
        ) : (
          <Moon size={16} />
        )}
      </button>
    </div>
  );
}
