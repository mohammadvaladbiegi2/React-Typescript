import React from 'react';

interface InputProps {
    value : string,
    changeHandle : (e : React.ChangeEvent<HTMLInputElement >) => void
}


const Input = (props: InputProps) => {
    return (
      <input type="text" onChange={props.changeHandle} value={props.value}/>
    );
}

export default Input;
