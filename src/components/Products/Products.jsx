import React from "react";
import { Grid, Typography } from "@material-ui/core";

import Product from "../Product/Product";
import useStyles from "./styles";

const Products = ({ products, onAddToCart, letAdd, productID }) => {
  const classes = useStyles();
  console.log(letAdd);
  console.log(productID);
  let newProducts = products.filter(
    (prod) => prod.categories[0].name === "New products"
  );
  let productDiscount = products.filter(
    (prod) => prod.categories[0].name === "Products on discount"
  );

  return (
    <>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography variant="h4" className={classes.title} color="inherit">
          New Products &nbsp; &#8628;
          <br />
        </Typography>
        <Grid container justify="center" spacing={4}>
          {newProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} lg={3}>
              <Product
                product={product}
                onAddToCart={onAddToCart}
                letAdd={letAdd}
                productID={productID}
              />
            </Grid>
          ))}
        </Grid>
        <Typography variant="h4" className={classes.title} color="inherit">
          Products with discount &nbsp; &#8628;
          <br />
        </Typography>
        <Grid container justify="center" spacing={4}>
          {productDiscount.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} lg={3}>
              <Product
                product={product}
                onAddToCart={onAddToCart}
                letAdd={letAdd}
                productID={productID}
              />
            </Grid>
          ))}
        </Grid>
      </main>
    </>
  );
};

export default Products;
