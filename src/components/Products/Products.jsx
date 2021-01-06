import React from "react";
import { Grid } from "@material-ui/core";

import Product from "../Product/Product"
import useStyles from "./styles";

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
    // let productBox = products.filter(prod => prod.categories[0].name === "Headwear");
    // [cart].map(cartProd => {
    //     cartProd.line_items.map(innerProd => {
    //         // console.log(innerProd.product_id && innerProd.quantity)
    //         let cartItemId = innerProd.product_id;
    //         let cartItemQuantity = innerProd.quantity;
            
    //     })
    // })
    // products.map(prod => {
    //     if(prod.id.quantity){
    //         console.log(prod.id.quantity)
    //     }
    // })
    return (
        <>
        <main className={classes.content}>
            <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) =>(
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