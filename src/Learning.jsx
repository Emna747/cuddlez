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
  { id: "1010", productName: "Fruits and Vegetables Book", price: 6.99 },
  { id: "1011", productName: "Fun with Numbers and Shapes", price: 9.99 },
  { id: "1012", productName: "Coloring Book ", price: 7.89 },
  { id: "1013", productName: "Toddler Coloring Book", price: 7.89 },
  { id: "1014", productName: "Easy Coloring Book", price: 7.89 },
  { id: "1015", productName: "Rescue at Lake Wild Book", price: 9.99 },
  { id: "1016", productName: "Charlotte's Web", price: 10.99 },
  { id: "1017", productName: "My Quiet Imagination", price: 8.99 },
  { id: "1018", productName: "The Voyage to Magical North", price: 13.99 },
  { id: "1019", productName: "Peter Pan", price: 10.99 },
  { id: "1020", productName: "Skycircus", price: 5.89 },
  { id: "1021", productName: "Susie Won't Back Down", price: 16.99 },
  { id: "1022", productName: "Red Riding Hood", price: 9.99 },
  { id: "1023", productName: "Alphabet Book", price: 13.89 },
  { id: "1024", productName: "Having A Friend", price: 8.99 },
];
function Learning() {
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
export default Learning;
