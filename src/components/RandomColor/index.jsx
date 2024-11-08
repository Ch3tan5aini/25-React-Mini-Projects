import React, { useEffect, useState } from 'react'

export default function RandomColorGenerator() {
    const [color, setColor] = useState("#000000");
    const [colorType, setColorType] = useState('hex');

    function randomGenerator(length) {
        const random = Math.floor(Math.random() * length)
        return random
    }


    function handleHexColor() {
        console.log("hex");
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = "#"

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomGenerator(hex.length)]
        }
        setColor(hexColor)
    }

    function handleRgbColor() {
        console.log("rgb");
        const r = randomGenerator(256);
        const g = randomGenerator(256);
        const b = randomGenerator(256);

        setColor(`rgb(${r},${g},${b})`)
    }

    useEffect(() => {
        colorType === 'rgb' ? handleRgbColor() : handleHexColor()
    }, [colorType])


    return <div style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: color,
        textAlign: "center"
    }}>
        <button style={{ padding: "10px 20px", backgroundColor: "brown", cursor: "pointer" }} onClick={() => setColorType('hex')}>Hex Color</button>
        <button style={{ padding: "10px 20px", backgroundColor: "brown", cursor: "pointer" }} onClick={() => setColorType('rgb')} >RGB Color</button>
        <button style={{ padding: "10px 20px", backgroundColor: "brown", cursor: "pointer" }} onClick={colorType === 'hex' ? handleHexColor : handleRgbColor}>Generate Random Color</button>
        <div style={
            {
                display: "flex",
                justifyContent: "center",
                fontSize: "50px",
                marginTop: "200px"
            }
        }>
            {colorType === "rgb" ? <h3>RGB: {color}</h3> : <h3>HEX: {color}</h3>}
        </div>
    </div>


}