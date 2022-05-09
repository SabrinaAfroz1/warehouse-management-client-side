import { useForm } from "react-hook-form";
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';


const AddItem = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit } = useForm();

    // const onUpdate = data => {

    //     const url1 = `http://localhost:5000/myitem`;
    //     fetch(url1, {
    //         method: 'POST',
    //         headers: {
    //             'content-type': "application/json"
    //         },
    //         body: JSON.stringify(data)
    //     })
    //         .then(res => res.json())
    //         .then(result => {
    //             alert('addedd now');
    //         })
    // }

    const onSubmit = data => {

        const myitem = {
            email: user.email,
            name: data.name,
            price: data.price,
            quantity: data.quantity,
            supplierName: data.supplierName,
            description: data.description
        }
        const url = 'http://localhost:5000/item';
        const url1 = `http://localhost:5000/myitem`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {

            })

        fetch(url1, {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(myitem)
        })
            .then(res => res.json())
            .then(result => {
                alert('added');
            })

    }
    return (
        <div className='w-50 mx-auto mt-5 shadow-lg rounded p-5 '>
            <h2 className='text-center fw-bolder text-success p-3 '>ADD ITEM</h2>

            <form className='d-flex flex-column ' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='price' type="number" {...register("price")} />
                <input className='mb-2' placeholder='Quantity in kg' type="number" {...register("quantity")} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("image")} />
                <input className='mb-2' placeholder='Supplier Name' type="text" {...register("supplierName")} />
                <input className='btn btn-success' type="Submit" placeholder="Add Item" />
            </form>


        </div >
    );
};

export default AddItem;