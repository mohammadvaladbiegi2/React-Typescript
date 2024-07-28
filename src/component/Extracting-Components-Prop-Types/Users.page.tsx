import React from 'react';

type UserPropsType = {
    name: string,
    id:number|string,
    isLogin: boolean
}

const UsersPage = (props : UserPropsType) => {
    return (
        <div>
            {props.id}
        </div>
    );
}

export default UsersPage;
