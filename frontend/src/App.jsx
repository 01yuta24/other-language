import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { SpacekitArea } from './SpacekitArea';
import { SpaceBornArea } from './SpaceBornArea';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import { Menu } from './Menu';

export const App = () => {
    const [data, setData] = useState('');
    const [loading, setLoading] = useState(true);
    const [pageNo, setPageNo] = useState(0);

    useEffect(() => {
        // axios
        //     .get('/planetData')
        //     .then((res) => res.data)
        //     .then((resData) => setData(resData));
        // setData([
        //     {
        //         id: 1,
        //         name: 'planet1',
        //         paramId: 1,
        //         epoch: 10000,
        //         a: 1,
        //         e: 1,
        //         i: 1,
        //         om: 1,
        //         w: 1,
        //         ma: 1,
        //     },
        // ]);
        setLoading(false);
    }, []);

    if (loading) {
        return <h1>Loading</h1>;
    } else {
        if (pageNo === 0) {
            return <Menu setPageNo={setPageNo} />;
        } else if (pageNo === 1) {
            return <SpacekitArea setPageNo={setPageNo} />;
        } else if (pageNo === 2) {
            return <SpaceBornArea setPageNo={setPageNo} />;
        }
        // return (
        // <>
        // <BrowserRouter>
        //     <Routes>
        //         <Redirect from="/" to="/home" />
        //         <Route path="/home" element={<SpacekitArea />} />
        //         <Route path="/born" element={<SpaceBornArea />} />
        //     </Routes>
        // </BrowserRouter>
        // </>
        // );
    }
};
