import React from 'react';
import {TextField} from "@mui/material";

const RegisterFields = (props) => {

    return (
        <div className="register-form-fields">
            <TextField className="register-form-fields-box-field" variant="outlined" name="username" value={props.email}
                       label="Username" type="email"/>
            <TextField className="register-form-fields-box-field" variant="outlined" name="password"
                       value={props.password} label="Password" type="password"/>
            <TextField className="register-form-fields-box-field" variant="outlined" name="repeatedPassword"
                       value={props.repeatedPassword} label="Repeat password" type="password"/>
        </div>
    );

};

export default RegisterFields;