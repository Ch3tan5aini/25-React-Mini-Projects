import React, { useState } from 'react';
import QRCode from 'react-qr-code';

export default function QrCodeGenerator() {

    const [input, setInput] = useState('');
    const [qrCode, setQrCode] = useState('');

    function handleClick() {
        setQrCode(input);
        setInput('');
    }

    return <div style={{marginTop:"20px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <div style={{display:"flex", flexDirection:"column", margin:"auto", gap: "10px"}}>
            <h1>QR Code Generator</h1>
            <input type="text" name='Qr Code' placeholder='Enter Your Link' value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={handleClick}>Generate</button>
        </div>
        <div style={{marginTop:"30px"}}>
            <QRCode
                id='qr-code-value'
                value={qrCode}
            />

        </div>
    </div>
}