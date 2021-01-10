import React from "react";
import { Grid, Typography } from "@material-ui/core";

import Product from "../Product/Product"
import useStyles from "./styles";

const Products = ({ products, onAddToCart, letAdd, productID }) => {
    const classes = useStyles();
    
    let newProducts = products.filter(prod => prod.categories[0].name === "New products");
    let productDiscount = products.filter(prod => prod.categories[0].name === "Products on discount");
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
            <Typography variant="h4" className={classes.title} color="inherit" >
                        New Products &nbsp; &#8628;
                        <br />
                    </Typography>
        <Grid container justify="center" spacing={4}>
            {newProducts.map((product) =>(
                <Grid item key={product.id} xs={12} sm={6} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} letAdd={letAdd} productID={productID} />
                </Grid>
            ))}
        </Grid>
        <Typography variant="h4" className={classes.title} color="inherit">
                    Products with discount 	&nbsp; &#8628;
                    <br />
        </Typography>
        <Grid container justify="center" spacing={4}>
            {productDiscount.map((product) =>(
                <Grid item key={product.id} xs={12} sm={6} lg={3}>
                    <Product product={product} onAddToCart={onAddToCart} letAdd={letAdd} productID={productID} />
                </Grid>
            ))}
        </Grid>
    </main>
    </>
    )
}

export default Products;