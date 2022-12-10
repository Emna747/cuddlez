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
  { id: "3233", productName: "Red Dress", price: 50.99 },
  { id: "3435", productName: "Colors Pattern Dress", price: 64.99 },
  { id: "3637", productName: "Boy Blue Set", price: 87.99 },
  { id: "3839", productName: "Patterned T-Shirt Flannel", price: 24.55 },
  { id: "4041", productName: "Paw Patrol Set", price: 55.99 },
  { id: "4243", productName: "Pinky New Born Set", price: 13.99 },
  { id: "4445", productName: "White Cotton Dress", price: 29.99 },
  { id: "4647", productName: "Dark blue Flannel", price: 32.99 },
  { id: "4849", productName: "Aqua Girl Set", price: 56.99 },
  { id: "5051", productName: "Pink Skirt ", price: 18.99 },
  { id: "5253", productName: "Green Dinosaur Set", price: 60.99 },
  { id: "5455", productName: "Beige Rain Coat", price: 74.99 },
  { id: "5657", productName: "Baby Bath Cap", price: 20.99 },
  { id: "5859", productName: "Cotton T-Shirt", price: 16.99 },
  { id: "6061", productName: "Disney Princess Dress", price: 37.99 },
  { id: "6263", productName: "White Cotton Flannel", price: 18.99 },
  { id: "6465", productName: "Boy Lego Set", price: 45.99 },
  { id: "6667", productName: "Cotton T-Shirt", price: 19.99 },
  { id: "6869", productName: "Polka Dot Bbay Shower Cap", price: 22.99 },
  { id: "7071", productName: "Pink Dress", price: 55.99 },
  { id: "7273", productName: "Cotton Flower Set", price: 30.99 },
  { id: "7475", productName: "Blue T-Shirt", price: 18.99 },
  { id: "7677", productName: "Green Girl Dress", price: 56.99 },
  { id: "7879", productName: "Grey Cotton Flannel", price: 25.99 },
];

function Clothes() {
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

export default Clothes;
