import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  box: {
    padding: "10px",
    textAlign:"center"
  },
  title: {
    padding: "auto",
    margin: "auto",
    
  },
  shadow: {
    position: "absolute",
    padding: "10px",
    left:"10%",
    width: "70%",
    bottom: "1.2rem",
    backgroundColor: "#49A3E7",
    opacity: "20%",
    borderRadius: 10,
  },
  mark:{
    display:"inline-block",
    paddingTop:"-0.1rem",
    paddingBottom:"-0.5rem",
    backgroundColor:"rgba(73,163,231,0.3)",
    borderRadius:"5px",
    wordWrap:"break-word"
    
  }
});

const TitleWithShadow = (props) => {
  const classes = useStyles();

  return (
    <>
      <Box>
        <Box className={classes.box}>
          <mark className={classes.mark} style={{color:props.color}}><p className={classes.title}>{props.title}</p></mark>
          {/* <Box className={classes.shadow}></Box> */}
        </Box>
      </Box>
    </>
  );
};

export default TitleWithShadow;
