import React from "react";
import { Grid } from "@material-ui/core";

import Headwear from "../CategoryItems/Headwear";
import useStyles from "./styles";

const Headwears = ({
  products,
  onAddToCart,
  letAdd,
  productID,
  isAllowedToAddProduct,
  cart,
}) => {
  const classes = useStyles();
  let productBox = products.filter(
    (prod) => prod.categories[0].name === "Headwear"
  );

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {productBox.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} lg={3}>
            <Headwear
              product={product}
              letAdd={letAdd}
              productID={productID}
              onAddToCart={onAddToCart}
              cart={cart}
              isAllowedToAddProduct={isAllowedToAddProduct}
            />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Headwears;
