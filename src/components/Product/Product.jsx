import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Product = ({ product, onAddToCart, letAdd, productID}) => {
    const classes = useStyles();
    
    if(product.id === productID && letAdd === false){
        return (
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price.formatted + " kr"}
                        </Typography>
                    </div>
                    <Typography  variant="h5" color="textSecondary">
                        Max products added to cart!
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Card" >
                        <AddShoppingCart style={{color: "red"}} />
                    </IconButton>
                </CardActions>
            </Card>
            
        )
    }
        
    if(product.conditionals.is_sold_out === false ){
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5">
                        {product.price.formatted + " kr"}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                            {product.quantity} in Stock
                        </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Card" onClick={() => onAddToCart(product.id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
} else {
        return (
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price.formatted + " kr"}
                        </Typography>
                    </div>
                    <Typography  variant="h5" color="textSecondary">
                        Item is out of stock!
                    </Typography>
                </CardContent>
                <CardActions disableSpacing className={classes.cardActions}>
                    <IconButton aria-label="Add to Card" >
                        <AddShoppingCart style={{color: "red"}} />
                    </IconButton>
                </CardActions>
            </Card>
            
        )
    }
    
    }
    



export default Product
