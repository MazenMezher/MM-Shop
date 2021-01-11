import React, { useState } from 'react'
import { Container, Typography, Button, Grid, Card, CardContent, CardActions } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./style";
import CartItem from "./CartItem/CartItem";

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart, letAdd, productID, products }) => {
    const classes = useStyles();
    console.log(letAdd)
    const EmptyCart = () => (
        <Card className={classes.root}>
        <CardContent>
        <div className={classes.cardContent}>
        <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping looks empty</Typography>
            <Typography variant="subtitle1">You have no items in your shopping cart,
                <Link to="/" className={classes.link}>Start adding some!</Link>
            </Typography>
        </div>
        </CardContent>
        
        
        </Card>
    );
        

    const FilledCart = () => (
        <>
        <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs={12} sm={4} key={item.id} >
                    <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart} letAdd={letAdd} productID={productID} products={products}  />
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
            <Typography variant="h4"> Subtotal: { cart.subtotal.formatted }kr</Typography>
            
            <div>
                <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
            </div>

        </div>
        </>
    );
    
    if(!cart.line_items) return "Loading...";

    return (
        <Container>
            <div className={classes.toolbar} />
            
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart
