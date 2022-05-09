import { useState, useEffect } from 'react';

const useItemDetails = itemId => {
    const [item, setItem] = useState({});
    useEffect(() => {
        const url = `https://radiant-woodland-37304.herokuapp.com/item/${itemId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [itemId]);

    return [item, setItem];
}

export default useItemDetails;