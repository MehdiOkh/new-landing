import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { makeStyles } from "@material-ui/core/styles";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-flip/effect-flip.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { EffectFlip, Pagination, Navigation } from "swiper/core";
import { Box, Typography } from "@material-ui/core";

// install Swiper modules
SwiperCore.use([EffectFlip, Pagination, Navigation]);
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

const Reviews = () => {
  const classes = useStyles();
  return (
    <>
      <Box padding="2rem" position="relative">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="center"
          margin="3rem"
          marginBottom="0"
        >
          <h4 className={classes.title}>
            <mark className={classes.mark} style={{ color: "#1C22BB" }}>
              نظرات
            </mark>
          </h4>
          <h2 className={classes.title}>
            <mark className={classes.mark} style={{ color: "black" }}>
              درباره ما چه میگویند
            </mark>
          </h2>
        </Box>
        <Box maxWidth="900px" margin="auto">
          <Swiper
            effect={"flip"}
            grabCursor={true}
            pagination={true}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                margin="3rem"
              >
                <h3
                  style={{
                    textAlign: "center",
                    margin: "0",
                    paddingTop: "1rem",
                    fontSize: "4rem",
                    color: "#1C22BB",
                  }}
                >
                  &#10078;
                </h3>

                <p style={{ textAlign: "center" }}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای.
                </p>
                <h3 style={{ textAlign: "center" }}>علی حسینی</h3>
                <Typography
                  style={{ textAlign: "center" }}
                  color="textSecondary"
                  gutterBottom
                >
                  مهندس نرم افزار
                </Typography>
              </Box>
            </SwiperSlide>
            <SwiperSlide>
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                margin="3rem"
              >
                <h3
                  style={{
                    textAlign: "center",
                    margin: "0",
                    paddingTop: "1rem",
                    fontSize: "4rem",
                    color: "#1C22BB",
                  }}
                >
                  &#10078;
                </h3>
                <p style={{ textAlign: "center" }}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای.
                </p>
                <h3 style={{ textAlign: "center" }}>امیر دبیری</h3>
                <Typography
                  style={{ textAlign: "center" }}
                  color="textSecondary"
                  gutterBottom
                >
                  مهندس IT
                </Typography>
              </Box>
            </SwiperSlide>
          </Swiper>
        </Box>

        <img
          style={{ position: "absolute", left: "23%", top: "28rem" }}
          src="/mainPage/circle-fill.svg"
        />
        <img
          style={{ position: "absolute", right: "27%", top: "20rem", opacity:"40%" }}
          src="/mainPage/circle-fill.svg"
        />
        <img
          style={{ position: "absolute",left:"45%",top:"1rem" }}
          src="/mainPage/circle-outline.svg"
        />
        <img
          style={{ position: "absolute",right:"30%",top:"5rem" }}
          src="/mainPage/circle-outline.svg"
        />

        <img
          style={{ position: "absolute",right:"40%",bottom:"0.5rem" }}
          src="/mainPage/circle-outline.svg"
        />

        <img
          style={{ position: "absolute", left: "10%", top: "10rem" }}
          src="/mainPage/shape2.svg"
        />
        
      </Box>
    </>
  );
};

export default Reviews;
