import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Chat } from "./screens/Chat";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { Participants } from "./screens/Participants";
import { Settings } from "./screens/Settings";

import "./styles/main.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/chat/:channelId" element={<Chat />} />
          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/participants" element={<Participants />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
