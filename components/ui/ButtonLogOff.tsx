'use client';

import axios from "axios";

export default function ButtonLogOff() {
    
    const sendToSender = async () => {
        const doSum = await axios.post('api/users/logoff');
    }
    
    return (
        <>
            <button onClick={sendToSender}
            className="bg-gray-500 text-white py-2 px-4 rounded"
            >Log off</button>
        </>
    );
}