import React, { useState, useEffect } from 'react'
import { commerce } from "./Library/commerce";
import { Products, Navbar, Cart, Checkout, Headwears, TopClothes, BottomClothes, Shoes, Belts } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";

const App = () => {
    const [products, setProducts] = useState([]);
    const [itemQuan, setItemQuan] = useState("");
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState("");

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);
        setCart(productId);
        for (let cart_item of cart.line_items) {
            cart.line_items.forEach(function(item){
                console.log(item)
                console.log(item.product_id)
                console.log(item.quantity);
                console.log(cart.line_items)
            });
    }
    fetchProducts();
    console.log(products)
}
    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });
        setCart(cart);
        fetchProducts(); 
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        setCart(cart);
    }


    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();

        setCart(cart);
    }

    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();
        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder, products) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
            console.log("works");
            
            setOrder(incomingOrder);
            incomingOrder.order.line_items.map(prod => {
                
                let cartProdId = prod.product_id;
                let cartProdQuantity = prod.quantity;
                let values = [cartProdId, cartProdQuantity];
                console.log(values)
            })
            refreshCart();
        } catch (error) {
            console.log(error)
        }
    }
    
 
    useEffect(() => {
        fetchProducts();
        fetchCart();
        console.log("cart and products are updated")
    }, [order]);
    
    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route exact path="/">
                        <Products products={products} onAddToCart={handleAddToCart}  />
                    </Route>
                    <Route exact path="/headwear">
                        <Headwears products={products} onAddToCart={handleAddToCart} /> 
                    </Route>
                    <Route exact path="/topclothes">
                        <TopClothes products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/bottomclothes">
                        <BottomClothes products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/shoes">
                        <Shoes products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/belts">
                        <Belts products={products} onAddToCart={handleAddToCart} />
                    </Route>
                    <Route exact path="/cart">
                        <Cart cart={cart}
                            handleUpdateCartQty={handleUpdateCartQty}
                            handleRemoveFromCart={handleRemoveFromCart}
                            handleEmptyCart={handleEmptyCart}
                            
                        />
                    </Route>
                    <Route exact path="/checkout">
                        <Checkout products={products} cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
