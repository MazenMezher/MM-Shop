import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100%",
    background: "rgb(189,189,181)",
    background:
      "linear-gradient(180deg, rgba(189,189,181,1) 12%, rgba(255,255,255,1) 77%)",
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));
