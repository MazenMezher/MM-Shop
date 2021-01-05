import React from "react";
import { Grid } from "@material-ui/core";

import Product from "../Product/Product"
import useStyles from "./styles";

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
    // let productBox = products.filter(prod => prod.categories[0].name === "Headwear");

    let soldOut = products.filter(prod => prod.conditionals.is_sold_out === false)
    console.log(soldOut)
    return (
        <>
        <main className={classes.content}>
            <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {soldOut.map((product) =>(
                <Grid item key={product.id} xs={12} sm={6} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
        </Grid>
    </main>
    </>
    )
}

export default Products;