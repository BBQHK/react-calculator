// create a diplay component
import React from 'react';

const Display = (props) => {
    return (
        <div className="display">
            <p>{props.input}</p>
            <p>{props.result}</p>
        </div>
    );
}

export default Display;