import React from "react";
import database from "../database";
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
function Clothes() {
  const classes = useStyles();
  return (
    <div>
      {" "}
      {database.map((card) => {
        return (
          <Grid item key={card.id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              {" "}
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h4">
                  {" "}
                  <h2 className={classes.producttitle}>{card.productName}</h2>
                  <h4 className={classes.jobdetails}>
                    
                    price in GBP is {card.price}
                  </h4>
                </Typography>
              </CardContent>
              <CardActions>
                {" "}
                <Button
                  className={classes.buttons}
                  size="medium"
                  color="primary"
                >
                  buy Now
                </Button>
                <Button
                  className={classes.buttons}
                  size="medium"
                  color="primary"
                >
                  Save
                </Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </div>
  );
}

export default Clothes;
