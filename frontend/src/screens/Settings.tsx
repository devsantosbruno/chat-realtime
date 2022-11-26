import { Moon, SignOut } from "phosphor-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MenuMobile } from "../components/MenuMobile";
import { useChannelContext } from "../hooks/useChannelContext";

export function Settings() {
  const navigate = useNavigate();
  const { userName } = useChannelContext();

  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  useEffect(() => {
    if (!localStorage.getItem("user")) {
      navigate("/login");

      return;
    }
  }, []);

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
    <div className="min-h-screen bg-[#20232B] pt-8">
      <div className="text-center">
        <h2 className="text-2xl font-light text-white">{userName}</h2>
      </div>

      <div className="container px-4 mx-auto pt-20">
        <div className="flex flex-col gap-4">
          <button
            type="button"
            className="bg-violet-500 text-white flex items-center gap-3 px-4 font-light text-lg w-full min-h-[60px] rounded-xl"
            onClick={() => setDarkMode(!darkMode)}
          >
            <Moon size={22} />
            Dark Mode
          </button>

          <button
            type="button"
            className="bg-violet-500 text-white flex items-center gap-3 px-4 font-light text-lg w-full min-h-[60px] rounded-xl"
            onClick={() => {
              localStorage.removeItem("user");
              navigate("/login");
            }}
          >
            <SignOut size={22} />
            Log out
          </button>
        </div>
      </div>

      <MenuMobile />
    </div>
  );
}
