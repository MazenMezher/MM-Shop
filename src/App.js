import React, { useState, useEffect } from "react";
import { commerce } from "./Library/commerce";
import {
  Products,
  Navbar,
  Cart,
  Checkout,
  Headwears,
  TopClothes,
  BottomClothes,
  Shoes,
  Belts,
  Footer,
} from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  //setting up the different states i need to store data in
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [productID, setProductID] = useState("");
  const [letAdd, setLetAdd] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  //getting the data from the cms data base
  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  //getting the data for the cart objekt from the cms data base
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  //logic to add a product into the cart also to check so added items to cart does not become more than stock qunatity
  const handleAddToCart = async (productId, quantity) => {
    const { cart } = await commerce.cart.add(productId, quantity);

    const isValid = cart.line_items.every((cartItem) => {
      const item = products.find(
        (productsItem) => cartItem.product_id === productsItem.id
      );

      return cartItem.quantity < item.quantity;
    });
    setProductID(productId);
    setLetAdd(isValid);
    setCart(cart);
    fetchProducts();

    console.log(isValid);
  };
  // logic to keep track of each items quantity in the cart
  const handleUpdateCartQty = async (productId, quantity, itemFromCart) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    console.log(itemFromCart);
    const isValid = cart.line_items.every((cartItem) => {
      const item = products.find(
        (productsItem) => cartItem.product_id === productsItem.id
      );

      return cartItem.quantity < item.quantity;
    });
    setProductID(productId);
    setLetAdd(isValid);
    setCart(cart);
    fetchProducts();
  };
  // logic to keep track of each items quantity removed from the cart
  const handleRemoveFromCart = async (productId, itemFromCart) => {
    const { cart } = await commerce.cart.remove(productId);
    const isValid = cart.line_items.every((cartItem) => {
      const item = products.find(
        (productsItem) => cartItem.product_id === productsItem.id
      );

      return cartItem.quantity < item.quantity;
    });
    setProductID(productId);
    setLetAdd(isValid);
    setCart(cart);
  };
  // logic to empty the cart of products
  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    const isValid = cart.line_items.every((cartItem) => {
      const item = products.find(
        (productsItem) => cartItem.product_id === productsItem.id
      );
      return cartItem.quantity < item.quantity;
    });
    setLetAdd(isValid);

    setCart(cart);
  };
  // logic to keep cart updated of each items quantity in the cart
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    const isValid = cart.line_items.every((cartItem) => {
      const item = products.find(
        (productsItem) => cartItem.product_id === productsItem.id
      );

      return cartItem.quantity < item.quantity;
    });
    setLetAdd(isValid);
    setCart(newCart);
  };
  // storing the data for each product that is about to be checked out
  const handleCaptureCheckout = async (checkoutTokenId, newOrder, products) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      console.log("works");

      setOrder(incomingOrder);
      incomingOrder.order.line_items.map((prod) => {
        let cartProdId = prod.product_id;
        let cartProdQuantity = prod.quantity;
        let values = [cartProdId, cartProdQuantity];
        console.log(values);
      });
      refreshCart();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
    console.log("cart and products are updated");
  }, [order]);

  return (
    <Router>
      <div style={{ marginBottom: "100px" }}>
        <Navbar totalItems={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products
              products={products}
              letAdd={letAdd}
              productID={productID}
              onAddToCart={handleAddToCart}
            />
          </Route>
          <Route exact path="/headwear">
            <Headwears
              products={products}
              letAdd={letAdd}
              productID={productID}
              onAddToCart={handleAddToCart}
            />
          </Route>
          <Route exact path="/topclothes">
            <TopClothes
              products={products}
              letAdd={letAdd}
              productID={productID}
              onAddToCart={handleAddToCart}
            />
          </Route>
          <Route exact path="/bottomclothes">
            <BottomClothes
              products={products}
              letAdd={letAdd}
              productID={productID}
              onAddToCart={handleAddToCart}
            />
          </Route>
          <Route exact path="/shoes">
            <Shoes
              products={products}
              letAdd={letAdd}
              productID={productID}
              onAddToCart={handleAddToCart}
            />
          </Route>
          <Route exact path="/belts">
            <Belts
              products={products}
              letAdd={letAdd}
              productID={productID}
              onAddToCart={handleAddToCart}
            />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              handleUpdateCartQty={handleUpdateCartQty}
              handleRemoveFromCart={handleRemoveFromCart}
              handleEmptyCart={handleEmptyCart}
              letAdd={letAdd}
              productID={productID}
              products={products}
            />
          </Route>
          <Route exact path="/checkout">
            <Checkout
              products={products}
              cart={cart}
              order={order}
              onCaptureCheckout={handleCaptureCheckout}
              error={errorMessage}
            />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
