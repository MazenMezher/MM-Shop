import React from 'react';
import { Grid } from "@material-ui/core";

import Shoe from "../CategoryItems/Shoe";
import useStyles from "./styles";

const Shoes = ({ products, onAddToCart }) => {
    const classes = useStyles();
    let productBox = products.filter(prod => prod.categories[0].name === "Shoes");
    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {productBox.map((product) =>(
                <Grid item key={product.id} xs={12} sm={6} lg={3}>
                    <Shoe product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Shoes
