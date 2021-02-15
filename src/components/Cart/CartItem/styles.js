import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  cardBackground: {
    background: "rgb(255,215,0)",
    background:
      "linear-gradient(27deg, rgba(255,215,0,0.9531162806919643) 8%, rgba(189,189,181,0.9307073171065301) 24%, rgba(255,255,255,1) 63%)",
  },
  media: {
    height: 260,
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
  cartActions: {
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    alignItems: "center",
  },
}));
