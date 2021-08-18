import { CircularProgress } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/styles";
import Footer from "../components/Footer";
import MainHeader from "../components/MainHeader";
import CircleInfo from "../components/mainpage/CircleInfo";
import Map from "../components/mainpage/Map";
import News from "../components/mainpage/News";
import Purpose from "../components/mainpage/Purpose";
import Reviews from "../components/mainpage/Reviews";
import Services from "../components/mainpage/Services";
import Shield from "../components/mainpage/Shield";
import Trusted from "../components/mainpage/Trusted";



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
}));
export default function Home() {
  const classes = useStyles();
  return (
    <>
      <MainHeader />
      <Services/>
      <Map/>
      <Shield/>
      <Trusted/>
      <Reviews/>
      <News/>
      <Purpose/>
      <Footer/>
    </>
  );
}
