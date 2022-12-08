import React from "react";
import Clothes from "./clothes";
import Furniture from "./furniture";
import Learning from "./learning";
import Toys from "./toys";
import database from "../database";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
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
  cardMedia,
  Grid,
} from "@material-ui/core";

import useStyles from "./styles";
function App() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />{" "}
      <AppBar position="relative">
        <Toolbar>
          <BedroomBabyIcon />
          <Typography variant="h5">
            tere tere Emna just so u know, you are amazing
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
      <Container className={classes.container}>
<Clothes />
<Furniture />
<Learning />
<Toys />
      </Container>
      </main>
    </div>
  );
}

export default App;
