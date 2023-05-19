// create a button component
import React from 'react';

const Button = (props) => {
    return (
        <button id={props.id} value={props.value} onClick={props.onClick}>{props.value}</button>
    );
}

export default Button;