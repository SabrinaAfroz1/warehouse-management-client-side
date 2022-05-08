import React from 'react';
import { Carousel, Container, Nav, Navbar } from 'react-bootstrap';
import slide1 from '../../../images/slide1.jpg'
import slide2 from '../../../images/slider2.jpg'
import slide3 from '../../../images/slider3.jpg'

const TopNav = () => {
    return (

        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide2}
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>



    );
};

export default TopNav;