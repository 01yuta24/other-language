import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';

export const App = () => {
    const [data, setData] = useState('');

    useEffect(() => {
        axios
            .get('/planets')
            .then((res) => res.data)
            .then((resData) => setData(resData));
    }, []);
    console.log('data:', data);
    return (
        <>
            <div>hello hello</div>
            <div>{data}</div>
        </>
    );
};
