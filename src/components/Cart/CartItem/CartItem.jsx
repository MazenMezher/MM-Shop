import React, { useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import useStyles from "./styles";

const CartItem = ({
  item,
  handleUpdateCartQty,
  handleRemoveFromCart,
  products,
  productID,
  letAdd,
}) => {
  const classes = useStyles();
  console.log(products);
  console.log(productID);
  console.log(item);
  console.log(letAdd);
  if (item.product_id === productID && letAdd === true) {
    return (
      <Card>
        <CardMedia
          image={item.media.source}
          alt={item.name}
          className={classes.media}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">{item.name} </Typography>
          <Typography variant="h5">{item.line_total.formatted} kr </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button
              type="button"
              size="small"
              onClick={() =>
                handleUpdateCartQty(item.id, item.quantity - 1, item.product_id)
              }
            >
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Button
              type="button"
              size="small"
              onClick={() =>
                handleUpdateCartQty(item.id, item.quantity + 1, item.product_id)
              }
            >
              +
            </Button>
          </div>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    );
  } else {
    return (
      <Card>
        <CardMedia
          image={item.media.source}
          alt={item.name}
          className={classes.media}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="h4">{item.name} </Typography>
          <Typography variant="h5">{item.line_total.formatted} kr </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <div className={classes.buttons}>
            <Button
              type="button"
              size="small"
              onClick={() =>
                handleUpdateCartQty(item.id, item.quantity - 1, item.product_id)
              }
            >
              -
            </Button>
            <Typography>{item.quantity}</Typography>
            <Typography>&nbsp;of {item.quantity}</Typography>
            <Button type="button" size="small"></Button>
          </div>
          <Button
            variant="contained"
            type="button"
            color="secondary"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    );
  }
};

export default CartItem;
