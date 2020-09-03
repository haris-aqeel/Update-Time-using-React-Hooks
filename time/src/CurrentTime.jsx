import React from 'react';
import { useState } from 'react';
import './index.css'


const CurrentTime = () => {
    
    let date = new Date().toLocaleTimeString();
    const [currDate , set_Date] = useState(date);

    const UpdateTime = () => {
        let date = new Date().toLocaleTimeString();
        set_Date(date);
    }

    return (
        <>
        <h1>{currDate}</h1>
        <button onClick={UpdateTime}>Get Current Time</button>
        </>
    );
}

export default CurrentTime;