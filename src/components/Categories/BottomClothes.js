import React from 'react';
import { Grid } from "@material-ui/core";

import BottomClothing from "../CategoryItems/BottomClothing";
import useStyles from "./styles";

const BottomClothes = ({ products, onAddToCart, productID, letAdd }) => {
    const classes = useStyles();
    let productBox = products.filter(prod => prod.categories[0].name === "Bottom clothes");
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {productBox.map((product) =>(
                <Grid item key={product.id} xs={12} sm={6} lg={3}>
                    <BottomClothing product={product} letAdd={letAdd} productID={productID} onAddToCart={onAddToCart} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default BottomClothes
