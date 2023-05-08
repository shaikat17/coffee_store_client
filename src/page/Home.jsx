import React from 'react';
import Banner from '../components/Banner';
import HighLightSection from '../components/HighLightSection';
import FollowUsSection from '../components/FollowUsSection';
import Coffees from './Coffees';

const Home = () => {
    return (
        <>
        <Banner />
        <HighLightSection />
        <Coffees />
        <FollowUsSection />
        </>
    );
};

export default Home;