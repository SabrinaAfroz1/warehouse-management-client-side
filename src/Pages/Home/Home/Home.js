
import React from 'react';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import Items from '../Items/Items';
import TopNav from '../TopNav/TopNav';
import Upcoming from '../Upcoming/Upcoming';

const Home = () => {
    return (
        <div>

            <TopNav></TopNav>
            <Upcoming></Upcoming>
            <Items></Items>
            <div className='d-flex justify-content-center '>
                <Button as={Link} to='/manageItem' className='btn btn-success m-5'>MANAGE INVENTORIES</Button>
            </div>



        </div>
    );
};

export default Home;