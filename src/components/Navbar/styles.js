import { makeStyles, fade } from "@material-ui/core/styles";

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    boxShadow: "none",
    borderBottomLeftRadius: "-50%",
    borderBottomRightRadius: "-50%",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    background: "rgb(0,0,0)",
    background:
      "linear-gradient(167deg, rgba(0,0,0,0.8354692218684349) 8%, rgba(255,215,0,0.9026961126247374) 46%, rgba(189,189,181,0.9559174011401436) 100%)",
  },
  image: {
    marginRight: "10px",
  },
  title: {
    flexGrow: 1,
    alignItems: "center",
    display: "flex",
    textDecoration: "none",
  },
  titleTwo: {
    flexGrow: 1,
    color: "black",
    textDecoration: "none",
  },

  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  grow: {
    flexGrow: 1,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  appBarTwo: {
    top: "auto",
    bottom: 0,
  },
  toolBarFooter: {
    boxShadow: "none",
    borderTop: "1px solid rgba(0, 0, 0, 0.40)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    flexGrow: 1,
    alignItems: "space-between",
    display: "flex",

    background: "rgb(0,0,0)",
    background:
      "linear-gradient(9deg, rgba(0,0,0,0.8606793059020483) 5%, rgba(255,215,0,0.9026961126247374) 46%, rgba(189,189,181,0.9559174011401436) 100%)",
    color: "black",
  },
  iconsInFooter: {
    display: "flex",
    flexWrap: "wrap",
  },
  push: {
    marginRight: "-26px",
  },
}));
