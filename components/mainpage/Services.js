import { Box, Grid } from "@material-ui/core";
import HorizontalCard from "./HorizontalCard";
import VerticalCard from "./VerticalCard";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const Services = () => {
  const matches = useMediaQuery("(min-width:960px)");

  return (
    <Box width="70%" margin="auto">
      <Grid container spacing={2}>
        {matches && (
          <Grid item md={12} sm={12}>
            <Box display="flex" justifyContent="center">
              <HorizontalCard
                title1="امنیت ابری و "
                title2="مقابله با حملات وب"
                body=" وب سایت ایمن نشده، همانند
        خودرویی است که هرلحظه ممکن
       .است واژگون شود
       
        سپر امنیتی ابر کبیر، شامل یک سیستم دفاعی
        6 لایه ای است که بالاترین سطح امنیتی ممکن
       .را برای کسب و کار آنلاین شما فراهم می نماید"
                image="/mainPage/6.svg"
              />
            </Box>
          </Grid>
        )}
        {!matches && (
          <Grid item md={4} sm={6}>
            <Box display="flex" justifyContent="center">
              <VerticalCard
                title1="امنیت ابری"
                title2="و مقابله با حملات وب"
                body="امنیت ابری و مقابله با حملات وب"
                body=" وب سایت ایمن نشده، همانند
        خودرویی است که هرلحظه ممکن
       .است واژگون شود
       
        سپر امنیتی ابر کبیر، شامل یک سیستم دفاعی
        6 لایه ای است که بالاترین سطح امنیتی ممکن
       .را برای کسب و کار آنلاین شما فراهم می نماید"
                image="/mainPage/6.svg"
              />
            </Box>
          </Grid>
        )}
        <Grid item md={4} sm={6}>
          <Box display="flex" justifyContent="center">
            <VerticalCard
              title1="تحلیل "
              title2="رخدادها"
              body="سپر امنیتی ابر کبیر، این امکان را فراهم می‌کند تا تمام رخدادهای کاربر و عملکرد وب سایت خود را ارزیابی نمایید و با رویکرد امنیتی و حتی کسب و کار، دید واضح از اکوسیستم آنلاین خود داشته باشید. شما می‌توانید تعامل کاربران با وب سایت را بر اساس درخواست و ترافیک آنها تجزیه وتحلیل نمایید."
              image="/mainPage/15.svg"
            />
          </Box>
        </Grid>
        <Grid item md={4} sm={6}>
          <Box display="flex" justifyContent="center">
            <VerticalCard
              title1="بررسی "
              title2="سلامت سرویس"
              body="با استفاده از سپر امنیتی ابر کبیر، این امکان برای شما فراهم می شود تا میزان دسترس پذیری زیرساخت، هاستینگ و نرم افزار وب خود را به صورت SLA ارزیابی نموده و تصویر روشنی از میزان دسترس پذیری فول استک وب سایت داشته باشید."
              image="/mainPage/14.svg"
            />
          </Box>
        </Grid>
        <Grid item md={4} sm={6}>
          <Box display="flex" justifyContent="center">
            <VerticalCard
              title1="افزایش سرعت "
              title2="دسترسی و کاهش بار"
              body="سپر امنیتی ابر کبیر با استفاده از سیستم شبکه توزیع محتوا (CDN) و Caching خود، سرعت بارگذاری صفحات وب و محتوای آنلاین را به طور محسوسی افزایش می‌دهد. همچنین پاسخ دادن درخواست ها از سوی ابر کبیر، باعث کاهش بار قابل توجه در وب سایت می گردد."
              image="/mainPage/16.svg"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Services;
