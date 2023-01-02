import React from 'react';
import {LoadingButton} from "@mui/lab";

const LoginButtons = (props) => {

    return (
        <div className="login-form-buttons">
            <LoadingButton className="login-form-login-button" loading={props.loading}
                           variant="outlined">Login</LoadingButton>
        </div>
    )

};

export default LoginButtons;