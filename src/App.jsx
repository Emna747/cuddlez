import React from "react";
import Clothes from "./Clothes";
import Furniture from "./Furniture";
import Learning from "./Learning";
import Toys from "./Toys";
import ButtonBases from "./ButtonBases";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import {
  Typography,
  AppBar,
  CssBaseline,
  Toolbar,
  Container,
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
          <Typography variant="h3">Cuddlez Store</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm" className={classes.container}>
            <Typography
              variant="h1"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Cuddlez
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              tere tere Emna just so u know, you are amazing and this is where
              the website decsription should be
            </Typography>{" "}
          </Container>
          <Container>
            <ButtonBases />
          </Container>
          <Container>
            <Clothes />
            <Furniture />

            <Learning />

            <Toys />
          </Container>
        </div>
      </main>
    </div>
  );
}

export default App;