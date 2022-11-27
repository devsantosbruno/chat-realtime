import { Moon, SignOut } from "phosphor-react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
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
    <div className="min-h-screen bg-[#f5f5f5] dark:bg-[#20232B] pt-8">
      <div className="text-center px-4">
        <h2 className="text-2xl font-light text-[#20232B] dark:text-white">
          {userName}
        </h2>
      </div>

      <div className="container px-4 mx-auto pt-20">
        <div className="flex flex-col gap-4">
          <Button onClick={() => setDarkMode(!darkMode)}>
            <Moon size={22} />
            Dark Mode
          </Button>

          <Button asChild>
            <NavLink
              onClick={() => {
                localStorage.removeItem("user");
              }}
              to="/login"
            >
              <SignOut size={22} />
              Log out
            </NavLink>
          </Button>
        </div>
      </div>

      <MenuMobile />
    </div>
  );
}