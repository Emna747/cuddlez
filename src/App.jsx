import React from "react";
import Clothes from "./Clothes";
import Furniture from "./Furniture";
import Learning from "./Learning";
import Toys from "./Toys";
import Footer from "./Footer";
import ButtonBases from "./ButtonBases";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
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
      <AppBar position="fixed" className={classes.navbar}>
        <Toolbar>
          <BedroomBabyIcon className={classes.icontop} />
          <Typography variant="h5">Cuddlez </Typography>
          <Button
            variant="contained"
            size="medium"
            className={classes.buttontop}
          >
            View Cart <ShoppingCartOutlinedIcon fontSize="sx" />
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="lg">
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
        </div>

        <Container>
          <ButtonBases />
        </Container>
        <div>
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {" "}
            Because Learning Is Key
          </Typography>
          <Learning />
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {" "}
            Stylish Room For Babies
          </Typography>
          <Furniture />
          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {" "}
            Because Fashion Is A Priority
          </Typography>
          <Clothes />

          <Typography
            variant="h4"
            align="center"
            color="textPrimary"
            gutterBottom
          >
            {" "}
            Play And Have Fun Bambino
          </Typography>
          <Toys />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
