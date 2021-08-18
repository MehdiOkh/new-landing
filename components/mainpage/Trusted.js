import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  box: {
    padding: "10px",
    margin: "4rem 0",
    textAlign: "center",
    position:"relative"
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

const Trusted = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <h4 className={classes.title}>
        <mark className={classes.mark} style={{ color: "#1C22BB" }}>
          پروژه ها
        </mark>
      </h4>
      <h2 className={classes.title}>
        <mark className={classes.mark} style={{ color: "black" }}>
          به ما اعتماد کرده اند
        </mark>
      </h2>

      <Box display="flex" justifyContent="center" position="absolute" top="-9rem" left="-8rem">
        <img src="/mainPage/shape3.svg" />
      </Box>

      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <Box display="flex" justifyContent="center" margin="3rem">
          <img src="/mainPage/jetstar.svg" />
        </Box>
        <Box display="flex" justifyContent="center" margin="3rem">
          <img src="/mainPage/expedia.svg" />
        </Box>
        <Box display="flex" justifyContent="center" margin="3rem">
          <img src="/mainPage/qantas.svg" />
        </Box>
      </Box>
    </Box>
  );
};

export default Trusted;
