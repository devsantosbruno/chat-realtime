import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ChannelContextProvider } from "./context/ChannelContext";

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.render(
  <React.StrictMode>
    <ChannelContextProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ChannelContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
