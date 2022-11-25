import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ChannelCreate } from "./screens/ChannelCreate";
import { ChannelList } from "./screens/ChannelList";
import { Chat } from "./screens/Chat";
import { Login } from "./screens/Login";
import { Settings } from "./screens/Settings";

import "./styles/main.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/chat/:channelId" element={<Chat />} />
          <Route path="/channels" element={<ChannelList />} />
          <Route path="/newChannel" element={<ChannelCreate />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
