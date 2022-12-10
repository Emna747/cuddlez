import React from "react";
import {
  Typography,
  CssBaseline,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardMedia,
  Grid,
} from "@material-ui/core";
import useStyles from "./styles";

const database = [
  { id: "8081", productName: "Baby and Toddler Crib", price: 300 },
  { id: "8283", productName: "Baby Wood Crib ", price: 289 },
  { id: "8485", productName: "Closet Items", price: 450 },
  { id: "8687", productName: "White Wooden wardrobe", price: 189 },
  { id: "8889", productName: "Sofa Chair", price: 115 },
  { id: "9091", productName: "Long Sofa Chair", price: 220 },
  { id: "1001", productName: "Rectangular Low Wardrobe", price: 190 },
  { id: "1002", productName: "Circular Wooden Crib", price: 490 },
  { id: "1003", productName: "Book Holder Set", price: 55 },
  { id: "1004", productName: "Binky Jar", price: 25 },
  { id: "1005", productName: "Indoor Small Tipi", price: 110 },
  { id: "1006", productName: "Rectangular Grey Wardrobe", price: 189 },
  { id: "1007", productName: "Study desk", price: 299 },
  { id: "1008", productName: "Blue Whale Wardrobe", price: 210 },
  { id: "1009", productName: "Decorative Lamps", price: 32 },
];
function Furniture() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />{" "}
      {database.map((card) => {
        return (
          <Grid container spacing={2} justify="center">
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                {" "}
                <CardContent className={classes.cardContent}>
                  <CardMedia
                    component="img"
                    height="140"
                    image="../photos/book1.jpeg"
                    alt="its a book"
                  />
                  <Typography gutterBottom variant="h4">
                    {" "}
                    <h2 className={classes.producttitle}>{card.productName}</h2>
                    <h4 className={classes.jobdetails}>
                      price in GBP is {card.price}
                    </h4>
                  </Typography>
                </CardContent>
                <ButtonGroup variant="text" aria-label="text button group">
                  <Button>Add to Cart</Button>
                  <Button>Save</Button>
                </ButtonGroup>
              </Card>
            </Grid>
          </Grid>
        );
      })}
    </div>
  );
}
export default Furniture;