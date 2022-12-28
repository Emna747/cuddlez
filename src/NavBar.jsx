import React from "react";
import useStyles from "./styles";
import BedroomBabyIcon from "@mui/icons-material/BedroomBaby";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";
import { Typography, AppBar, Button, Toolbar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import InputBase from "@mui/material/InputBase";

import { styled, alpha } from "@mui/material/styles";

function NavBar() {
  const classes = useStyles();
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <div>
      {" "}
      <AppBar position="relative" className={classes.navbar}>
        <Toolbar className={classes.navigationBar}>
          <BedroomBabyIcon className={classes.icontop} />
          <Typography variant="h4" className={classes.navigationBar}>
            Cuddlez{" "}
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Button
            variant="contained"
            size="medium"
            startIcon={<ShoppingCartOutlinedIcon fontSize="sx" />}
            className={classes.buttonone}
          >
            Cart
          </Button>
          <search></search>
          <Button
            variant="contained"
            size="medium"
            className={classes.buttontwo}
          >
            Newsletter
          </Button>

          <Button
            variant="contained"
            size="medium"
            className={classes.buttonthree}
          >
            <DarkModeTwoToneIcon fontSize="medium" />
          </Button>
        </Toolbar>
      </AppBar>{" "}
    </div>
  );
}

export default NavBar;
