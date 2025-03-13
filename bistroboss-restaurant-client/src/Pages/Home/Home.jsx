import React from 'react';
import Banner from './Components/Banner';
import OrderOnline from './Components/OrderOnline';
import BistroBoss from './Components/BistroBoss';
import MenuSection from './Components/MenuSection';
import CallUs from './Components/CallUs';

const Home = () => {
    return (
        <div>
            <Banner/>
            <OrderOnline/>
            <BistroBoss/>
            <MenuSection/>
            <CallUs/>
        </div>
    );
};

export default Home;