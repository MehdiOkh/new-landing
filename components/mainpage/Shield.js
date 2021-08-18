import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  root: {
    overflow: "hidden",
    padding: "2rem",
    width: "100%",
    background:
      "linear-gradient(rgba(76,166,231,0.5), rgba(143,242,222,0.31));",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    margin: "2rem",
  },
}));

const Shield = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <img src="/mainPage/insurance.svg" />
      </Box>

      <Box style={{ textAlign: "center" }}>
        <h2>سپر امنیتی ابر کبیر</h2>
        <p style={{ maxWidth: "600px", margin: "auto" }}>
          سپر امنیتی ابر کبیر، رفتار هر وب سایت را به طور اختصاصی تجزیه و تحلیل
          کرده و به عنوان :یک سیستم جامع امنیتی، شامل لایه های زیر است
        </p>
      </Box>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item md={4} sm={12} xs={12}>
          <Box className={classes.box}>
            <img src="/mainPage/hacker.svg" />
          </Box>
          <p style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
            سیستم ممانعت از نفوذ (IPS)
          </p>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Box className={classes.box}>
            <img src="/mainPage/ddos.svg" />
          </Box>
          <p style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
            محافظت در برابر حمله های DDoS
          </p>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Box className={classes.box}>
            <img src="/mainPage/firewall1.svg" />
          </Box>
          <p style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
            فایروال وب هوشمند بهینه شده برای وردپرس
          </p>
        </Grid>

        <Grid item md={4} sm={12} xs={12}>
          <Box className={classes.box}>
            <img src="/mainPage/firewall2.svg" />
          </Box>
          <p style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
            فایروال نسل بعدی
          </p>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Box className={classes.box}>
            <img src="/mainPage/brain.svg" />
          </Box>
          <p style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
            هوش تهدید
          </p>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Box className={classes.box}>
            <img src="/mainPage/antivirus.svg" />
          </Box>
          <p style={{ maxWidth: "600px", margin: "auto", textAlign: "center" }}>
            آنتی ویروس وب
          </p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Shield;
