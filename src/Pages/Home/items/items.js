import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './Items.css'

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const url = 'https://radiant-woodland-37304.herokuapp.com/item';
        fetch(url)
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div>
            <div id="items" className='container'>
                <div className="row">
                    <h1 className='text-success fw-bolder text-center mt-5'> Stock Items</h1>
                    <div className="items-container">
                        {
                            items.slice(0, 6).map(item => <Item
                                key={item._id}
                                item={item}
                            >
                            </Item>)
                        }
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Items;