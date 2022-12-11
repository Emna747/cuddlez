import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 10),
  },

  buttontop: {
    marginRight: "9px",
  },
  icontop: {
    color: "red",
    width: "10px",
  },
  card: { height: "100%", display: "flex", flexDirection: "column" },
  cardGrid: { padding: "28px 0", marginBottom: "5rem" },
  cardContent: {
    flexGrow: "1",
  },
  cardMedia: { paddingTop: "56.25%" },

  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "5px 0",
  },
}));
export default useStyles;
