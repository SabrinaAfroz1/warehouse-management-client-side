import React from 'react';
import Items from '../Items/Items';
import TopNav from '../TopNav/TopNav';
import Upcoming from '../Upcoming/Upcoming';

const Home = () => {
    return (
        <div>

            <TopNav></TopNav>
            <Upcoming></Upcoming>
            <Items></Items>

        </div>
    );
};

export default Home;