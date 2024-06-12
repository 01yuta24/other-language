import { useEffect, useRef } from 'react';
import './SpacekitArea.css';
import { createSpace } from './createSpace';
import axios from 'axios';

export const SpacekitArea = ({ setPageNo }) => {
    const spaceRef = useRef(null);
    const spaceMenu = () => {
        setPageNo(0);
    };
    const spaceBorn = () => {
        setPageNo(2);
    };
    useEffect(() => {
        // const data = [
        //     {
        //         id: 1,
        //         name: 'planet1',
        //         paramId: 1,
        //         epoch: 10000.0,
        //         a: 0.1,
        //         e: 0.1,
        //         i: 0.1,
        //         om: 0.1,
        //         w: 0.1,
        //         ma: 0.1,
        //         orbitAround: 'earth',
        //     },
        //     {
        //         id: 2,
        //         name: 'planet2',
        //         paramId: 2,
        //         epoch: 20000.0,
        //         a: 0.2,
        //         e: 0.2,
        //         i: 0.2,
        //         om: 0.2,
        //         w: 0.2,
        //         ma: 0.2,
        //         orbitAround: 'sun',
        //     },
        // ];
        axios
            .get('/api/planetData')
            .then((res) => res.data)
            .then((data) => createSpace(data, spaceRef));
        // Create the visualization and put it in our div.
    }, []);
    return (
        <>
            <nav className="nav">
                <h1>menu</h1>
                <button onClick={spaceMenu}>メニューに戻る</button>
                <button onClick={spaceBorn}>惑星爆誕</button>
            </nav>
            <main className="main-container" ref={spaceRef}></main>
        </>
    );
};
