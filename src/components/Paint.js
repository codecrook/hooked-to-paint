import React from 'react';
import './Paint.css';
import Name from './Name';

function Paint() {
    return (
        <header>
            <div className="app">
                <Name />
            </div>
            <div className="color-picker-contianer">
                {/*TODO: Create ColorPicker Component*/}
            </div>
        </header>
    );
}

export default Paint;
