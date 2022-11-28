import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ChannelContextProvider } from "./context/ChannelContext";

ReactDOM.render(
  <React.StrictMode>
    <ChannelContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChannelContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
