import React from "react";
import { Grid } from "@material-ui/core";

import Headwear from "../CategoryItems/Headwear";
import useStyles from "./styles";

const Headwears = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) =>(
                <Grid item key={product.id} xs={12} sm={6} lg={3}>
                    <Headwear product={product} onAddToCart={onAddToCart} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Headwears
