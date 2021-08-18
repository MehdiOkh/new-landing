import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const useStyles = makeStyles(() => ({
  box1: {
    display: "flex",
    width: "7rem",
    height: "7rem",
    backgroundColor: "white",
    borderRadius: "7rem",
    margin: "1.5rem",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px",
  },
  box2: {
    width: "5.5rem",
    height: "5.5rem",
    margin: "auto",
    padding: "auto",
  },
}));

const CircleInfo = (props) => {
  const classes = useStyles();

  return (
    <Box className={classes.box1}>
      <Box className={classes.box2}>
        <CircularProgressbarWithChildren
          strokeWidth={3}
          value={props.value}
          styles={{        
            // Colors
            trail:{
                stroke: 'rgba(73, 163, 231, 0.2)'
            },
            path:{
                stroke: `rgba(73, 163, 231, 0.8)`,
            }
          }}
          
        >
            <h4 style={{margin:"0"}} >{props.text}</h4>
          <p style={{fontSize:"0.5rem",padding:"0 0.2rem 0 0.2rem",textAlign:"center" , margin:"0"}}>
            {props.body}
          </p>
        </CircularProgressbarWithChildren>
      </Box>
    </Box>
  );
};

export default CircleInfo;
