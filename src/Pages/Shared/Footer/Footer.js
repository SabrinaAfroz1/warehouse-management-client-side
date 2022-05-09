import { Button } from 'bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (

        <div>
            <hr />
            <div>
                <Form className='message-form  container  mx-auto'>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <button type='submit' className="btn btn-success m-3 px-5">Submit</button>
                </Form>

            </div>


            <div className='footer'>
                <h5 className='text-center text-white'>copyright reserved by @greenVeg</h5>

            </div>
        </div>
    );
};

export default Footer;