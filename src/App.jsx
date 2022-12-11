import React from "react";
import Clothes from "./Clothes";
import Furniture from "./Furniture";
import Learning from "./Learning";
import Toys from "./Toys";
import Footer from "./Footer";
import ButtonBases from "./ButtonBases";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import {
  Typography,
  AppBar,
  Button,
  CssBaseline,
  Toolbar,
  Container,
} from "@mui/material";

import useStyles from "./styles";

function App() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />{" "}
      <AppBar position="fixed">
        <Toolbar>
          <BedroomBabyIcon className={classes.icontop} />
          <Typography variant="h5">Cuddlez </Typography>
          <Button
            variant="contained"
            size="medium"
            className={classes.buttontop}
          >
            Check Cart
          </Button>
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
              Cuddlez Store
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Only Premium Products For Your Little Ones
            </Typography>{" "}
          </Container>
          <Container className={classes.container}>
            <ButtonBases />
          </Container>
          <Container className={classes.container}>
            <Typography
              variant="h4"
              align="center"
              color="textPrimary"
              paragraph
            >
              {" "}
              Learning is Key
            </Typography>
            <Learning />
            <Typography
              variant="h4"
              align="center"
              color="textPrimary"
              paragraph
            >
              {" "}
              Have a stylish room baby
            </Typography>
            <Furniture />
            <Typography
              variant="h4"
              align="center"
              color="textPrimary"
              paragraph
            >
              {" "}
              Clothes for the bambinis
            </Typography>
            <Clothes />

            <Typography
              variant="h4"
              align="center"
              color="textPrimary"
              paragraph
            >
              {" "}
              Play and Have fun my love
            </Typography>
            <Toys />
          </Container>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
