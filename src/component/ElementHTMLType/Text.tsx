import React from 'react';

type TextType = {
    title: string,
    element?: React.ElementType
}

const Text = ({ title, element }: TextType) => {

    const Component = element || "div"  // we use this because element  is optional 

    return <Component>{title}</Component>

}

export default Text;
