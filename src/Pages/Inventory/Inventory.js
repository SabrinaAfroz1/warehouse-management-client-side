import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useItemDetails from '../../Hooks/useItemDetails';


const Inventory = () => {
    const { itemId } = useParams();
    const [item, setItem] = useItemDetails(itemId);

    //for delivered quantity
    const delivered = itemId => {
        const oldquanitiy = parseInt(item.quantity);
        const newquantity = oldquanitiy - 1;

        const url = `https://radiant-woodland-37304.herokuapp.com/item/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },

            body: JSON.stringify({ newquantity })
        })
            .then(response => response.json())
            .then(data => {

                console.log(data);
                alert("Delivered Item Successfully");

            })
    }

    //for restock quantity
    const updateQuan = event => {
        event.preventDefault();
        const oldQuantity = parseInt(item.quantity)
        const quantity = parseInt(event.target.quantity.value);
        const newquantity = quantity + oldQuantity;
        const url = `https://radiant-woodland-37304.herokuapp.com/item/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ newquantity })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                alert("Update Item Successfully");
            })
    }


    return (
        <div>
            <div className='container w-75 rounded shadow-lg p-4 w-50 mt-5'>
                <h2 className='  text-center fw-bolder mt-5 mb-5 text-success'>Inventory</h2>
                <hr />
                <div className='row '>
                    <div className='col-lg-6 col-sm-12 col-md-12'>
                        <img src={item.image} alt="" />
                    </div>
                    <div className='col-lg-6 col-sm-12 col-md-12'>
                        <h2 className='fw-bolder text-success'>{item.name}</h2>
                        <h3>Quantity : {item.quantity}</h3>
                        <h3>Price : {item.price}</h3>
                        <h3> Supplier : {item.supplierName}</h3>
                        <button onClick={() => delivered(itemId)} className='btn btn-success px-5'>Deliverd</button>

                        <form onSubmit={updateQuan}>
                            <input className="form-control mt-3" type="number" name="quantity" id="quantity" placeholder='Quantity' />
                            <br />
                            <button className='btn btn-success px-5'>Restock</button>

                        </form>
                        <Button as={Link} to='/manageItem' className='mt-3 btn btn-success px-5'>Manage Inventory </Button>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Inventory;