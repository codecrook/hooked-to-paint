import React from 'react';
import './ColorPicker.css';

function ColorPicker({ colors = [], activeColor, setActiveColor }) {
    return (!colors.length) ? null : (
        <fieldset className="color-picker">
            {colors.map((color, i) => (
                <label key={i}>
                    <input
                        name="color"
                        type="radio"
                        value={color}
                        checked={activeColor === color}
                        onChange={() => setActiveColor(color)}
                    />
                    <span style={{ background: color }} />
                </label>
            ))}
        </fieldset>
    );
}

export default ColorPicker;
