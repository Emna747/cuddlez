import React from "react";
import Clothes from "./Clothes";
import Furniture from "./Furniture";
import Learning from "./Learning";
import Toys from "./Toys";
import Footer from "./Footer";
//import Signuppage from "./Signuppage";
import ButtonBases from "./ButtonBases";
//import Checkout from "./Checkout";

import NavBar from "./NavBar";
import MainBanner from "./MainBanner";
import { Typography, Container } from "@mui/material";

import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <div>
      <CssBaseline /> <NavBar />
      <main>
        <MainBanner />
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
