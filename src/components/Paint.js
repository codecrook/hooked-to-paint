import React, { useState, useEffect } from 'react';
import './Paint.css';
import Name from './Name';
import ColorPicker from './ColorPicker';
import randomColor from 'randomcolor';


function Paint() {
    const [colors, setColors] = useState([]);
    const [activeColor, setActiveColor] = useState(null);

    const getColors = () => {
        const baseColor = randomColor().slice(1);
        fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
            .then(res => res.json())
            .then(({ colors }) => {
                setColors(colors.map(color => color.hex.value));
                setActiveColor(colors[0].hex.value);
            });
    };

    useEffect(getColors, []);

    return (
        <header style={{ borderTop: `10px solid ${activeColor}` }}>
            <div className="app">
                <Name />
            </div>
            <div className="color-picker-contianer">
                <ColorPicker
                    colors={colors}
                    activeColor={activeColor}
                    setActiveColor={setActiveColor}
                />
            </div>
        </header>
    );
}

export default Paint;
