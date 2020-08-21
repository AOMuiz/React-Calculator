import React from 'react';
import './ClearButton.css';

export default function ClearButton(props) {
    return (
        <button id = "clear" className = "clear-btn" onClick = {props.handleClear}>
            {props.children}
        </button>
    )
}
