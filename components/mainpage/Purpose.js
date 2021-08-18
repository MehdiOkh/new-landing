import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(73,163,231,0.15)",
    width: "100%",
    padding:"4rem 0"
  },
}));

const Purpose = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box display="flex" justifyContent="space-between">
        <img src="/mainPage/security-camera2.svg" />
        <h2>هدف ما، امنیت کسب و کار شماست</h2>
        <img src="/mainPage/security-camera1.svg" />
      </Box>
      <Box display="flex" justifyContent="center" flexWrap="wrap">
        <Box display="flex" justifyContent="center" margin="3rem">
          <img src="/mainPage/alert.svg" />
        </Box>
        <Box display="flex" justifyContent="center" margin="3rem">
          <img src="/mainPage/wall.svg" />
        </Box>
        <Box display="flex" justifyContent="center" margin="3rem">
          <img src="/mainPage/cloud.svg" />
        </Box>
        <Box display="flex" justifyContent="center" margin="3rem">
          <img src="/mainPage/monitor.svg" />
        </Box>
      </Box>
      <p style={{ textAlign: "center" , fontSize:"1rem", maxWidth:"400px",margin:"auto"}}>
        وردپرس به همراه سپر امنیتی ابر کبیر یعنی امن ترین و مجهز ترین وب سایت
        دنیا
      </p>
    </Box>
  );
};
export default Purpose;
