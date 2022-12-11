import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 10),
  },
  thirdcontainer: {
    border: "4px red solid",
  },
  secondcontainer: {
    border: "4px green solid",
  },
  buttontop: {
    marginRight: "9px",
  },
  icontop: {
    color: "red",
    width: "10px",
  },
  card: { height: "100%", display: "flex", flexDirection: "column" },
  cardGrid: {
    padding: "8px 0",
    marginBottom: "5rem",
    border: "4px red solid",
  },
  cardContent: {
    flexGrow: "1",
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
