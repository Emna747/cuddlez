import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 10),
  },
  navigationBar: {
    marginRight: "47rem",
  },
  icon: {
    marginRight: "20px",
    color: "green",
  },
  icons: {
    marginRight: "9px",
  },
  button: {
    marginLeft: "10px",
    color: "#fafafa",
  },
  cardGrid: { padding: "28px 0", marginBottom: "5rem" },
  card: { height: "100%", display: "flex", flexDirection: "column" },
  cardMedia: { paddingTop: "56.25%" },
  cardContent: {
    flexGrow: "1",
    textAlign: "center",
  },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "5px 0",
  },
}));
export default useStyles;
