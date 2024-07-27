import React, { useEffect, useRef } from 'react';

const InputRef = () => {

const inputref = useRef<HTMLInputElement>(null!) // when we use this = ! we are sure input has exists


useEffect(()=>{

    inputref.current.focus()

},[])

    return (
       <>
       <input type="text" ref={inputref} placeholder='Enter Your Name'/>
       </>
    );
}

export default InputRef;
