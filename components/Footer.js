import { Box, Button } from "@material-ui/core";

const Footer = () => {
  return (
    <>
      <Box position="relative">
        <Box display="flex" justifyContent="space-between" flexWrap="wrap">
          <Box display="flex" justifyContent="space-evenly" flexWrap="wrap">
            <Box padding="3rem">
              <h3>دسترسی سریع</h3>
              <Box display="flex" flexDirection="column">
                <Button>صفحه اصلی</Button>
                <Button>کسب و کارها</Button>
                <Button>ویژگی ها</Button>
              </Box>
            </Box>

            <Box padding="3rem">
              <h3>اطلاعات تماس</h3>
              <p>02177774444</p>
              <p>02177774444</p>
            </Box>

            <Box padding="3rem">
              <h3>در ارتباط باشید</h3>
              <p>info@portfolio.com</p>
              <p>Facebook</p>
              <p>Instagram</p>
            </Box>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            padding="4rem"
          >
            <img src="/logo.svg" />
            <h3 style={{ margin: "0" }}>آدرس دفتر:</h3>
            <p>قم بلوار امین، پلاک 329</p>
          </Box>
        </Box>
        <Box borderTop="1px #49A3E7 solid">
          <p style={{ textAlign: "center" }}>
            کپی رایت برای سایت ابرکبیر . ساخته شده در 2021 ©{" "}
          </p>
        </Box>

        <img
          style={{ position: "absolute", left: "15%", top: "-7rem" }}
          src="/mainPage/shape2.svg"
        />

        <img
          style={{ position: "absolute", right: "35%", bottom: "3rem" }}
          src="/mainPage/circle-outline.svg"
        />

        <img
          style={{
            position: "absolute",
            left: "27%",
            top: "11rem",
            opacity: "40%",
          }}
          src="/mainPage/circle-fill.svg"
        />
      </Box>
    </>
  );
};

export default Footer;
