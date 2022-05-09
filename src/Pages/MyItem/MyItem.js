import { useState, useEffect } from 'react';


const MyItem = email => {
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/myitem/${email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [email]);

    return [item, setItem];
}

export default MyItem;