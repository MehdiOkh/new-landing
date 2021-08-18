import { Box, Grid, Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Navbar from "./Navbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import VerticalCard from "./mainpage/VerticalCard";

const useStyles = makeStyles({
  box: {
    overflow: "hidden",
    width: "100%",
    height: "100vh",
    top: 0,
    position: "relative",
    marginBottom:"6rem"
  },
  circleFill: {
    position: "absolute",
    top: "29rem",
    right: "10%",
  },
  circleOutline: {
    position: "absolute",
    top: "8rem",
    right: "40%",
  },
  shape1: {
    position: "absolute",
    left: "-7rem",
    top: "-11rem",
    zIndex: -1,

  },
  shape2: {
    position: "absolute",
    right: "-5rem",
    top: "11rem",
    zIndex: -1,
  },
  shape3: {
    position: "absolute",
    left: "13rem",
    top: "13rem",
    zIndex: -1,
  },
  grid: {

  },
  paper: {
    backgroundColor: "none",
    padding: "4rem",
    zIndex: -1,

  },
});

const MainHeader = () => {
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <>
      <Box className={classes.box}>
        <Navbar />

        <img className={classes.circleFill} src="/mainPage/circle-fill.svg" />
        <img
          className={classes.circleFill}
          style={{ right: "5%", top: "7rem" }}
          src="/mainPage/circle-fill.svg"
        />
        <img
          className={classes.circleOutline}
          src="/mainPage/circle-outline.svg"
        />
        <img
          className={classes.circleOutline}
          style={{ left: "55%", top: "32rem" }}
          src="/mainPage/circle-outline.svg"
        />
        <img
          className={classes.circleOutline}
          style={{ right: "3%", top: "37rem" }}
          src="/mainPage/circle-outline.svg"
        />
        <img className={classes.shape1} src="/mainPage/shape1.svg" />
        <img className={classes.shape2} src="/mainPage/shape2.svg" />
        <img className={classes.shape3} src="/mainPage/shape3.svg" />

        <Grid className={classes.grid} container spacing={3}>
          <Grid item md={6} sm={12}>
            <Box display="flex" justifyContent="center">
              {matches && <img src="/mainPage/head-image.svg" />}
              {!matches && (
                <img height="95%" width="95%" src="/mainPage/head-image.svg" />
              )}
            </Box>
          </Grid>
          <Grid item md={6} sm={12}>
            <Box className={classes.paper}>
              <Typography variant="h4" component="h3" gutterBottom>
                سپر امنیتی
              </Typography>
              <Typography variant="h2" component="h1" gutterBottom>
                ابر کبیـــــــر
              </Typography>
              <Typography variant="body1" gutterBottom>
                سپر امنیتی ابر کبیر، به طور اختصاصی برای امنیت وردپرس بهینه شده
                و این امکان را فراهم می‌کند تا از قابلیت‌های قدرتمند وردپرس، با
                بالاترین سطح امنیت استفاده کنید.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default MainHeader;
