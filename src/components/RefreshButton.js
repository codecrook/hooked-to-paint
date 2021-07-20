import React from 'react';
import './RefreshButton.css';

function RefreshButton({ cb }) {
    return (
        <button className="button-refresh-colors" onClick={cb}>&#8634;</button>
    );
}

export default React.memo(RefreshButton);
