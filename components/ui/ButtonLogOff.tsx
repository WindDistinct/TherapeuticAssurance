'use client';

import axios from "axios";

export default function ButtonLogOff() {
    
    const sendToSender = async () => {
        const doSum = await axios.post('api/users/logoff');
    }
    
    return (
        <>
            <button onClick={sendToSender}>Log off</button>
        </>
    );
}