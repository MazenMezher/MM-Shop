import React from 'react';
import { Grid } from "@material-ui/core";

import Belt from "../CategoryItems/Belt";
import useStyles from "./styles";

const Belts = ({ products, onAddToCart, letAdd, productID }) => {
    const classes = useStyles();
    let productBox = products.filter(prod => prod.categories[0].name === "Belts" );

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {productBox.map((product) =>(
                
                <Grid item key={product.id} xs={12} sm={6} lg={3}>
                    <Belt product={product} onAddToCart={onAddToCart} letAdd={letAdd} productID={productID} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Belts
