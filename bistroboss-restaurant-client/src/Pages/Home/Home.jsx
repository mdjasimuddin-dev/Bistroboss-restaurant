import React from 'react';
import Banner from './Components/Banner';
import OrderOnline from './Components/OrderOnline';
import BistroBoss from './Components/BistroBoss';
import MenuSection from './Components/MenuSection';
import CallUs from './Components/CallUs';
import Recommends from './Components/Recommends';

const Home = () => {
    return (
        <div>
            <Banner/>
            <OrderOnline/>
            <BistroBoss/>
            <MenuSection/>
            <CallUs/>
            <Recommends/>
        </div>
    );
};

export default Home;