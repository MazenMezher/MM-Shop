import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Headwear = ({ product, onAddToCart }) => {
    console.log(product.conditionals.is_sold_out)

    const classes = useStyles();   
    if(product.conditionals.is_sold_out === false){
        return (
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price.formatted_with_symbol}
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
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography variant="h5" color="textSecondary">
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
    

export default Headwear
