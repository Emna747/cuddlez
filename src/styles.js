import { makeStyles, createTheme } from "@material-ui/core/styles";
const theme2 = createTheme({
  palette: {
    primary: { yellow: "#ffeb3b" },
    secondary: { lightblue: "#33bfff" },
  },
});

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 10),
  },
  navbar: { backgroundColor: "#ffeb3b" },
  buttontop: { width: "10rem", backgroundColor: theme2.lightblue },
  icontop: {
    width: "24px",
    color: "#f76b8a",
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
