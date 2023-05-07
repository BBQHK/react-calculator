// create a button component
import React from 'react';

const Button = (props) => {
    return (
        <button value={props.value} onClick={props.onClick}>{props.value}</button>
    );
}

export default Button;