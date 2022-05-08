import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
    const { _id, name, image, description, supplierName, price, quantity } = props.item;
    const navigate = useNavigate();

    const navigateToInventory = _id => {
        navigate(`/inventory/${_id}`);
    }
    return (
        <div className=' item rounded container shadow-lg pb-4 '>
            <img className='w-100' src={image} alt="" />
            <h2 className="fw-bolder text-success">{name}</h2>
            <p>Price: {price} taka</p>
            <p>Quantity : {quantity} kg</p>
            <p>Supplier : {supplierName} </p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToInventory(_id)} className='btn btn-success px-5'>Update</button>

        </div>
    );
};

export default Item;