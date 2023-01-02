import './RegisterForm.scss'

import React from 'react';
import RegisterFields from "./RegisterFields";
import RegisterButtons from "./RegisterButtons";

const RegisterForm = (props) => {

    return (
        <div className="register-form">
            <RegisterFields/>
            <RegisterButtons loading={false}/>
        </div>
    );

};

export default RegisterForm;