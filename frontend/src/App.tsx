import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Chat } from "./screens/Chat";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { Participants } from "./screens/Participants";
import { Settings } from "./screens/Settings";

import "./styles/main.css";

function App() {
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

  function onChangeDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/chat/:channelId" element={<Chat />} />
          <Route path="/home" element={<Home />} />
          <Route
            path="/settings"
            element={<Settings onChangeDarkMode={onChangeDarkMode} />}
          />
          <Route path="/participants" element={<Participants />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
