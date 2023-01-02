import React from 'react';
import {Box, TextField} from "@mui/material";

const RegisterFields = (props) => {

    return (
        <Box className="register-form-fields-box">
            <TextField className="register-form-fields-box-field" variant="outlined" name="username" value={props.email}
                       label="Username" type="email"/>
            <TextField className="register-form-fields-box-field" variant="outlined" name="password"
                       value={props.password} label="Password" type="password"/>
            <TextField className="register-form-fields-box-field" variant="outlined" name="repeatedPassword"
                       value={props.repeatedPassword} label="Repeat password" type="password"/>
        </Box>
    );

};

export default RegisterFields;