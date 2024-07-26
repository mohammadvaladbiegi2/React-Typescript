import React from 'react';

type ButtonProps = {
    clickhandler : (e : React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props : ButtonProps) => {
    return (
        <button onClick={props.clickhandler}>click me</button>
    );
}

export default Button;
