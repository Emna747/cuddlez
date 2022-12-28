import React from "react";
import Clothes from "./Clothes";
import Furniture from "./Furniture";
import Learning from "./Learning";
import Toys from "./Toys";
import Footer from "./Footer";
//import Signuppage from "./Signuppage";
import ButtonBases from "./ButtonBases";
//import Checkout from "./Checkout";
import useStyles from "./styles";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import { Typography, AppBar, Button, Toolbar, Container } from "@mui/material";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />{" "}
      <AppBar position="relative" className={classes.navbar}>
        <Toolbar>
          <BedroomBabyIcon className={classes.icontop} />
          <Typography variant="h4" className={classes.navigationBar}>
            Cuddlez{" "}
          </Typography>
          <Button
            variant="contained"
            size="medium"
            startIcon={<ShoppingCartOutlinedIcon fontSize="sx" />}
            className={classes.buttonone}
          >
            View Cart
          </Button>
          <Button
            variant="contained"
            size="medium"
            className={classes.buttontwo}
          >
            Sign Up
          </Button>

          <Button
            variant="contained"
            size="medium"
            className={classes.buttonthree}
          >
            <DarkModeTwoToneIcon fontSize="medium" />
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
