import React from 'react';

interface PrivetProps {
    isLogin:boolean,
    Login:React.ComponentType,
    Panel:React.ComponentType
}

const PrivetPage = ({isLogin,Login,Panel}: PrivetProps) => {
    if(isLogin){
        return <Panel /> 
    }else{
        return <Login />
    }
}

export default PrivetPage;
