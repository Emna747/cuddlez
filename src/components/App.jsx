import React from "react";
import database from "../database";
import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Button,
  Container,
  Card,
  CardActions,
  CardContent,
  Grid,
} from "@material-ui/core";

import useStyles from "./styles";
function App() {
  const classes = useStyles();
  return (
    <div>
      {" "}
      <h1>tere tere Emna</h1> <p>you are amazing</p>
    </div>
  );
}

export default App;
