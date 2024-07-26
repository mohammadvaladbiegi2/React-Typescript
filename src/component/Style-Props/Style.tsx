import React from 'react';

interface styleProps {
    style : React.CSSProperties
}

const Style = (props : styleProps) => {
    return (
        <h1 style={props.style}>hi zozi</h1>
    );
}

export default Style;
