import { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItem from './MyItem';

const Myitems = () => {
    const [user] = useAuthState(auth);
    const [item, setItem] = MyItem(user.email);



    return (
        <div>
            <div className='container w-75 rounded shadow-lg p-4 w-50 mt-5'>
                <h2 className='  text-center fw-bolder mt-5 mb-5 text-success'>MY ITEM</h2>
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
                        <h3> Email : {item.email}</h3>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default Myitems;