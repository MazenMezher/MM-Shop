import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

import useStyles from "./styles";

const Shoe = ({ product, onAddToCart }) => {
    const classes = useStyles();    
    if(product.conditionals.is_sold_out === false){
        return (
            
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name} />
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography cariant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography cariant="h5">
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
                <div>
                All our headwear is sold out!
                </div>
            )
    }
}

export default Shoe
