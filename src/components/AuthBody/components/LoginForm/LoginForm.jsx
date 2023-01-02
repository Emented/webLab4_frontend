import './LoginForm.scss'

import React from 'react';
import LoginFields from "./LoginFields";
import LoginButtons from "./LoginButtons";

const LoginForm = (props) => {

    return (
        <div className="login-form">
            <LoginFields/>
            <LoginButtons loading={false}/>
        </div>
    );

};

export default LoginForm;