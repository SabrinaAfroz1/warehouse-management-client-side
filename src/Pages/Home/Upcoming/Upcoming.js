import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import img1 from '../../../images/upcoming1.jpeg';
import img2 from '../../../images/upcoming2.jpeg';
import img3 from '../../../images/upcoming3.jpeg';

const Upcoming = () => {
    return (
        <div className='mt-5'>
            <h2 className='fw-bolder text-center fs-1'>Upcoming Products</h2>
            <div className='container '>
                <CardGroup>
                    <Card>
                        <Card.Img variant="top" src={img1} />
                        <Card.Footer>
                            <small className="text-muted">Avocado</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img2} />

                        <Card.Footer>
                            <small className="text-muted">Corns</small>
                        </Card.Footer>
                    </Card>
                    <Card>
                        <Card.Img variant="top" src={img3} />
                        <Card.Footer>
                            <small className="text-muted"> Green Beans</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>

            </div>

        </div>
    );
};

export default Upcoming;