import React from 'react';
import "./Input.css";

const Input = (props) => {
        return (
            <div id = {props.id} className = "input">
                {props.input}
            </div>
        )
}
export default Input;
