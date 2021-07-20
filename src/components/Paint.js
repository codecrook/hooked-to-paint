import React, { useState, useEffect, useCallback } from 'react';
import './Paint.css';
import randomColor from 'randomcolor';
import Name from './Name';
import ColorPicker from './ColorPicker';
import WindowSize from './WindowSize';
import RefreshButton from './RefreshButton';


function Paint() {
    const [colors, setColors] = useState([]);
    const [activeColor, setActiveColor] = useState(null);

    const getColors = useCallback(() => {
        const baseColor = randomColor().slice(1);
        fetch(`https://www.thecolorapi.com/scheme?hex=${baseColor}&mode=monochrome`)
            .then(res => res.json())
            .then(({ colors }) => {
                setColors(colors.map(color => color.hex.value));
                setActiveColor(colors[0].hex.value);
            });
    }, []);

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
                <RefreshButton cb={getColors} />
            </div>
            <WindowSize />
        </header>
    );
}

export default Paint;
