import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useItemDetails from '../../Hooks/useItemDetails';

const Inventory = () => {
    const { itemId } = useParams();
    const [item] = useItemDetails(itemId);
    return (
        <div className='container w-75'>
            <h2 className='  text-center fw-bolder mt-5 mb-5 text-success'>Selected Item Details</h2>
            <hr />
            <div className='conatiner mx-auto rounded shadow-lg p-4 w-50'>
                <img src={item.image} alt="" />
                <h2>{item.name}</h2>
                <h3>Quantity : {item.quantity}</h3>
                <h3>Price : {item.price}</h3>
                <h3> Supplier : {item.supplierName}</h3>

            </div>




        </div>
    );
};

export default Inventory;