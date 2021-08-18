import { makeStyles } from "@material-ui/core/styles";
import { Box, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  box: {
    padding: 0,
    overflowX: "hidden",
    width: "100%",
    top: 0,
    position: "absolute",
    zIndex: 15,
  },
});
const Navbar = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.grid} container spacing={3}>

      <Grid item md={6} sm={12}>
        <Box display="flex" justifyContent="flex-start">
          <Button style={{ margin: "1.1rem 0.8rem 1.1rem 0.8rem"}}>
            صفحه اصلی
          </Button>
          <Button style={{ margin: "1.1rem 0.8rem 1.1rem 0.8rem"}}>
            محصولات
          </Button>
          <Button style={{ margin: "1.1rem 0.8rem 1.1rem 0.8rem"}}>
            راهکارها
          </Button>
          <Button style={{ margin: "1.1rem 0.8rem 1.1rem 0.8rem"}}>
            قیمت ها
          </Button>
        </Box>
      </Grid>

      <Grid item md={3} sm={12} xs={12}>
        <Box display="flex" justifyContent="center">
          <Button
            style={{
                marginTop: "1.1rem",
              backgroundColor: "#49A3E7",
              color: "white",
            }}
            variant="contained"
          >
            ورود و ثبت نام
          </Button>
        </Box>
      </Grid>

      <Grid item md={3} sm={12} xs={12}>
        <Box display="flex" justifyContent="center">
          <img
            className={classes.circleFill}
            style={{ margin: "0 1.5rem 0 1.5rem" ,position:"relative", zIndex:"16" }}
            src="/logo.svg"
          />
        </Box>
      </Grid>

      


      {/* <Box display="flex"></Box> */}
    </Grid>
    // <Box
    //   display="flex"
    //   justifyContent="space-between"
    //   className={classes.box}
    //   color="primary.contrastText"
    //   p={1}
    // >

    // </Box>
  );
};

export default Navbar;
