import React from 'react';
import { useForm } from "react-hook-form";


const AddItem = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        alert('Added');


        const url = 'http://localhost:5000/item';
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