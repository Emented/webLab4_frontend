import React from 'react';
import {LoadingButton} from "@mui/lab";
import {fetchRegister} from "../../../../redux/actions";
import {connect} from "react-redux";

const RegisterButtons = (props) => {

    return (
        <div className="register-form-buttons">
            <LoadingButton className="register-form-login-button" loading={props.loading}
                           variant="outlined" onClick={() => props.register(props.email, props.password)}>
                Register
            </LoadingButton>
        </div>
    );

};

const mapStateToRegisterFormButtonsProps = (state) => {
    return {
        email: state.registerFormEmail,
        password: state.registerFormPassword,
        passwordRepeat: state.registerFormPasswordRepeat,
        loading: state.authFormIsLoading
    }
}

const mapDispatchToRegisterFormButtonsProps = (dispatch) => {
    return {
        register: (email, password) => {
            dispatch(fetchRegister(email, password))
        }
    }
}

export default connect(mapStateToRegisterFormButtonsProps, mapDispatchToRegisterFormButtonsProps)(RegisterButtons);