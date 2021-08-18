import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CircleInfo from "./CircleInfo";
const useStyles = makeStyles(() => ({
  root: {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    padding: "2rem",
    position: "relative",
  },
  infoBox: {
    margin: "auto",
    padding: "auto",
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    position: "absolute",
    top: "9rem",
  },
}));

const Map = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src="/mainPage/map.svg" />
      <Box className={classes.infoBox}>
        <CircleInfo
          text="39"
          value={39}
          body="تعداد حملات سایبری در هر ثانیه"
        />
        <CircleInfo
          text="+6"
          value={18}
          body="ماه طول می‌کشد تا یک نقض امنیتی تشخیص داده شود"
        />
        <CircleInfo
          text="$3900000"
          value={78}
          body="متوسط هزینه جهانی برای عدم رعایت امنیت اطلاعات"
        />
        <CircleInfo
          text="43%"
          value={43}
          body="هدف حملات سایبری،کسب و کارهای کوچک هستند"
        />
      </Box>
    </Box>
  );
};

export default Map;
