import { Box } from "@material-ui/core";
import TitleWithShadow from "../TitleWithShadow";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  box: {
    padding: "10px",
    textAlign: "left",
  },
  title: {
    padding: "auto",
    margin: "auto",
  },
  mark: {
    display: "inline-block",
    lineHeight: 0,
    paddingTop: "0.1rem",
    paddingBottom: "0.5rem",
    backgroundColor: "rgba(73,163,231,0.2)",
    borderRadius: "5px",
    wordWrap: "break-word",
  },
}));

const HorizontalCard = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} elevation={3}>
      <Box display="flex">
        <CardContent>
          <Box className={classes.box}>
            <h4 className={classes.title}>
              <mark className={classes.mark} style={{ color: "#1C22BB" }}>
                {props.title1}
              </mark>
            </h4>
            <h2 className={classes.title}>
              <mark className={classes.mark} style={{ color: "#1C22BB" }}>
                {props.title2}
              </mark>
            </h2>
          </Box>

          <Typography variant="body2" color="textSecondary" component="p">
            {props.body}
          </Typography>
        </CardContent>
        <img height="95%" width="95%" src={props.image} />
      </Box>
    </Card>
  );
};

export default HorizontalCard;
