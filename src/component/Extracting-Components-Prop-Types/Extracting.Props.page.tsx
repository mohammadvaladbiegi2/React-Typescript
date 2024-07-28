import React from 'react';
import UsersPage from './Users.page';


// when you want Extracting Components Prop Types use this sintax
// UsersPage is name component we want Extracting

const Sample = (props: React.ComponentProps<typeof UsersPage>) => {
    return (
        <div>
            {/* {props.id}
            {props.name}
            {props.isLogin} */}
        </div>
    );
}

export default Sample;
