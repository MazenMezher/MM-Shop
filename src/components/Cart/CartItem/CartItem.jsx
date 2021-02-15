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
  isAllowedToAddProduct,
  cart,
}) => {
  const classes = useStyles();
  console.log(item, cart.line_items);

  // let newQuantity = products.forEach((prod) => console.log(prod));
  // console.log(newQuantity);

  return (
    <Card className={classes.cardBackground}>
      <CardMedia
        image={item.media.source}
        alt={item.name}
        className={classes.media}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="h4">{item.name} </Typography>
        <Typography variant="h5">{item.line_total.formatted} kr </Typography>
      </CardContent>
      <CardContent></CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
          <Button
            type="button"
            onClick={() =>
              handleUpdateCartQty(item.id, item.quantity - 1, item.product_id)
            }
          >
            -
          </Button>
          <Typography style={{ marginRight: "25px" }}>
            {item.quantity} in cart
          </Typography>

          <Button
            variant="contained"
            size="small"
            type="button"
            color="secondary"
            onClick={() => handleRemoveFromCart(item.id)}
          >
            Remove
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default CartItem;
