import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme";
import { ThemeProvider } from "@mui/material";
ReactDOM.render(
  <BrowserRouter>
    {" "}
    <ThemeProvider theme={theme}>
      <App />{" "}
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
