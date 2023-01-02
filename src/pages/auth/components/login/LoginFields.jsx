import React from 'react';
import {Box, TextField} from "@mui/material";

const LoginFields = (props) => {

    return (
        <Box className="login-form-fields-box">
            <TextField className="login-form-fields-box-field" variant="outlined" name="username" value={props.email}
                       label="Username" type="email"/>
            <TextField className="login-form-fields-box-field" variant="outlined" name="password" value={props.password}
                       label="Password" type="password"/>
        </Box>
    )

};

export default LoginFields;