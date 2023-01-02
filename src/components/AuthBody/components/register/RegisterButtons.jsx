import React from 'react';
import {LoadingButton} from "@mui/lab";

const RegisterButtons = (props) => {

    return (
        <div className="register-form-buttons">
            <LoadingButton className="register-form-login-button" loading={props.loading}
                           variant="outlined">Register</LoadingButton>
        </div>
    );

};

export default RegisterButtons;