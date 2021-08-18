import { Box } from "@material-ui/core";
import NewsCard from "./NewsCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
  },
  box: {
    padding: "10px",
    margin: "4rem 0",
    textAlign: "center",
    position: "relative",
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

const News = () => {
  const classes = useStyles();

  return (
    <>
      <Box position="relative" padding="8rem 0" overflow="hidden" >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          margin="3rem"
          marginBottom="0"
          position="relative"
        >
          <h4 className={classes.title}>
            <mark className={classes.mark} style={{ color: "#1C22BB" }}>
              اخبار
            </mark>
          </h4>
          <h2 className={classes.title}>
            <mark className={classes.mark} style={{ color: "black" }}>
              اخبار روز فناوری
            </mark>
          </h2>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          margin="2rem 0"
          flexWrap="wrap"
        >
          <NewsCard
            image="https://images.freeimages.com/images/large-previews/411/light-of-technology-1510575.jpg"
            title="لورم ایپسوم متن ساختگی "
            body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای."
          />
          <NewsCard
            image="https://images.freeimages.com/images/large-previews/64b/vla-1-1315506.jpg"
            title="لورم ایپسوم متن ساختگی "
            body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای."
          />
          <NewsCard
            image="https://images.freeimages.com/images/large-previews/497/server-at-night-1199726.jpg"
            title="لورم ایپسوم متن ساختگی "
            body="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای."
          />
        </Box>
        <img
          style={{
            position: "absolute",
            left: "-6rem",
            transform: "scaleX(-1)",
            top: "2rem",
            zIndex:"-1"
          }}
          src="/mainPage/shape1.svg"
        />
      </Box>
    </>
  );
};

export default News;
