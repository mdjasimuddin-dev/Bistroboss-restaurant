import Banner from "./Components/Banner";
import OrderOnline from "./Components/OrderOnline";
import BistroBoss from "./Components/BistroBoss";
import MenuSection from "./Components/MenuSection";
import CallUs from "./Components/CallUs";
import Recommends from "./Components/Recommends";
import Featured from "./Components/Featured";
import Testimonials from "./Components/Testimonials";
import { Title } from "react-head";

const Home = () => {
  return (
    <div>
      <Title> Bistro Boss | Home</Title>
      <Banner />
      <OrderOnline />
      <BistroBoss />
      <MenuSection />
      <CallUs />
      <Recommends />
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
