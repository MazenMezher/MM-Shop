import React from "react";
import { Grid } from "@material-ui/core";

import TopClothing from "../CategoryItems/TopClothing";
import useStyles from "./styles";

const TopClothes = ({ products, onAddToCart, letAdd, productID }) => {
  const classes = useStyles();
  let productBox = products.filter(
    (prod) => prod.categories[0].name === "Top clothes"
  );
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {productBox.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} lg={3}>
            <TopClothing
              product={product}
              letAdd={letAdd}
              productID={productID}
              onAddToCart={onAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default TopClothes;
