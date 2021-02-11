import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
  root: {
    maxWidth: "100%",
    background: "rgb(255,215,0)",
    background:
      "linear-gradient(27deg, rgba(255,215,0,0.9531162806919643) 8%, rgba(189,189,181,0.9307073171065301) 24%, rgba(255,255,255,1) 63%)",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "flex",
    justifyContent: "space-between",
  },
}));
