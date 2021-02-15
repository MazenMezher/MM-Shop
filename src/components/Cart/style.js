import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: "5%",
  },

  emptyButton: {
    minWidth: "150px",
    [theme.breakpoints.down("xs")]: {
      marginBottom: "5px",
    },
    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "150px",
  },
  link: {
    textDecoration: "none",
  },
  cardDetails: {
    display: "flex",
    marginTop: "10%",
    width: "100%",
    justifyContent: "space-between",
  },
  root: {
    background: "rgb(255,215,0)",
    background:
      "linear-gradient(27deg, rgba(255,215,0,0.9531162806919643) 8%, rgba(189,189,181,0.9307073171065301) 24%, rgba(255,255,255,1) 63%)",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "fixed",
    top: "30%",
    left: "50%",
    /* bring your own prefixes */
    transform: "translate(-50%, -30%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));
