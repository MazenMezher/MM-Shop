import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/DeliveryIcon.png";
import shoeIcon from "../../assets/shoes.png";
import topClothes from "../../assets/tshirt.png";
import headwear from "../../assets/cap.png";
import bottomClothes from "../../assets/pant.png";
import useStyles from "./styles";

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Shop-Name" height="25px" className={classes.image} />
                        Shop-Name
                    </Typography>
                    <Typography component={Link} to="/headwear" variant="h6" className={classes.title} color="inherit">
                        <img src={headwear} alt="Shop-Name" height="25px" className={classes.image} />
                        Headwear
                    </Typography>
                    <Typography component={Link} to="/topclothes" variant="h6" className={classes.title} color="inherit">
                        <img src={topClothes} alt="Shop-Name" height="25px" className={classes.image} />
                        Top Clothes
                    </Typography>
                    <Typography component={Link} to="/bottomclothes" variant="h6" className={classes.title} color="inherit">
                        <img src={bottomClothes} alt="Shop-Name" height="25px" className={classes.image} />
                        Bottom Clothes
                    </Typography>
                    <Typography component={Link} to="/shoes" variant="h6" className={classes.title} color="inherit">
                        <img src={shoeIcon} alt="Shop-Name" height="25px" className={classes.image} />
                        Shoes
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === "/cart"  ?  (
                    <> </> ) : 
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>}
                    
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
