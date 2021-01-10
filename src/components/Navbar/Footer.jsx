import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

import useStyles from "./styles";
import "./media.css";



function Copyright() {
    const classes = useStyles();
    return (
      <Typography variant="body4" >
        {'Copyright © '}
          ShopName
        {' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Footer = () => {
    const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={"hiddenBottom"}>
      <AppBar position="fixed" color="primary" className={classes.appBarTwo}>
        <Toolbar className={classes.toolBarFooter}>
          <div className={classes.grow} />
          <Typography component={Link} to="/" variant="h6"  color="inherit" className={classes.titleTwo}>
                ShopName
          </Typography>
          <Typography component={Link} to="/" variant="h6"  color="inherit" className={classes.titleTwo}>
                Email
          </Typography>
          <Typography component={Link} to="/" variant="h6"  color="inherit" className={classes.titleTwo}>
                076-715-24-67
          </Typography>
          <Typography variant="h6" color="inherit" className={classes.titleTwo}>
          <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" className={classes.titleTwo}>
              <Copyright className={classes.titleTwo}  />
            </a>
          </Typography>
          <Typography className={classes.iconsInFooter} >
                <div className={classes.push} >
                <a href="https://www.facebook.com/" class="fa fa-facebook" target="_blank"></a>
                <a href="https://twitter.com/" class="fa fa-twitter" target="_blank"></a>
                <a href="https://www.youtube.com/" class="fa fa-youtube" target="_blank"></a>
                <a href="https://www.instagram.com/" class="fa fa-instagram" target="_blank"></a>
                <a href="https://accounts.snapchat.com/accounts/login?continue=https%3A%2F%2Faccounts.snapchat.com%2Faccounts%2Fwelcome" class="fa fa-snapchat-ghost" target="_blank"></a>
                </div>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    </React.Fragment>
  );
}

export default Footer
