import React from 'react';
import {TextField} from "@mui/material";

const LoginFields = (props) => {

    return (
        <div className="login-form-fields">
            <TextField className="login-form-fields-box-field" variant="outlined" name="username" value={props.email}
                       label="Username" type="email"/>
            <TextField className="login-form-fields-box-field" variant="outlined" name="password" value={props.password}
                       label="Password" type="password"/>
        </div>
    )

};

export default LoginFields;