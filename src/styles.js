import { makeStyles } from "@material-ui/core/styles";
import { pink, amber, cyan, yellow } from "material-ui-colors";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 10),
  },

  navigationBar: {
    backgroundColor: cyan[600],

    display: "flex",
    justifyContent: "space-between",
  },
  sectionone: {
    display: "flex",
  },
  sectiontwo: {
    display: "flex",
    justifyContent: "flex-end",
  },
  buttonone: {
    backgroundColor: pink[800],
    width: "6rem",
    marginLeft: "5px",

    "&:hover": { backgroundColor: pink[500] },
  },
  buttontwo: {
    backgroundColor: pink[400],
    width: "8rem",
    marginLeft: "5px",
    "&:hover": { backgroundColor: pink[800] },
  },
  buttonthree: {
    backgroundColor: yellow[400],
    width: "4rem",
    marginLeft: "5px",
    "&:hover": { backgroundColor: amber[400] },
  },

  icontop: {
    fontSize: "medium",
    color: amber[500],
  },
  card: { height: "100%", display: "flex", flexDirection: "column" },
  cardGrid: {
    padding: "20px 0",
    marginBottom: "5rem",
    border: "4px red solid",
  },
  cardContent: {
    flexGrow: 1,
    textAlign: "center",
    border: "4px green solid",
  },
  cardMedia: { paddingTop: "56.25%" },
  productprice: {
    padding: "1px 0",
    marginBottom: "1px",
    marginTop: "1px",
  },
  producttitle: { padding: "1px 0", marginBottom: "1px", marginTop: "1px" },
  productdetails: {
    border: "4px pink solid",
    marginBottom: "2px",
  },
  buttons: {
    border: "4px red solid",
    marginBottom: "1px",
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "5px 0",
  },
}));
export default useStyles;
