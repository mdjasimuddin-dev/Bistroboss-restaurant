import React from 'react';
import Banner from './Components/Banner';
import OrderOnline from './Components/OrderOnline';
import BistroBoss from './Components/BistroBoss';

const Home = () => {
    return (
        <div>
            <Banner/>
            <OrderOnline/>
            <BistroBoss/>
        </div>
    );
};

export default Home;