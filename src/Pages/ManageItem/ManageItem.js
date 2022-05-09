import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useItems from '../../Hooks/useItem';

const ManageItem = () => {
    const [items, setItems] = useItems();

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = items.filter(item => item._id !== id);
                    setItems(remaining);
                })
        }
    }
    return (
        <div>
            <h2 className='text-center p-3 fw-bolder text-success'>MANAGE INVENTORY</h2>

            <Table className='w-75 mx-auto container border shadow-lg rounded' >

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Price (per kg)</th>
                        <th>Quantity</th>
                        <th>Supplier Name</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                {
                    items.map(item =>
                        <tbody key={item._id}  >


                            <tr >
                                <td>{item.name}</td>
                                <td>{item.price}taka</td>
                                <td>{item.quantity}kg</td>
                                <td>{item.supplierName}</td>
                                <td><button className='text-white btn-danger rounded btn' onClick={() => handleDelete(item._id)}>X</button></td>
                            </tr>
                        </tbody>
                    )
                }

            </Table>
            <div className="d-grid gap-2">
                <Button as={Link} to='/addItem' variant="success" size="lg">
                    ADD NEW ITEM
                </Button>

            </div>



        </div>
    );
};

export default ManageItem;