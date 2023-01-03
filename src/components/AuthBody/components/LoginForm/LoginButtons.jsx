import React from 'react';
import {LoadingButton} from "@mui/lab";
import {fetchLogin} from "../../../../redux/actions";
import {connect} from "react-redux";

const LoginButtons = (props) => {

    return (
        <div className="login-form-buttons">
            <LoadingButton className="login-form-login-button" loading={props.loading}
                           variant="outlined" onClick={() => props.login(props.email, props.password)}>
                Login
            </LoadingButton>
        </div>
    )

};

const mapStateToLoginFormButtonsProps = (state) => {
    return {
        email: state.loginFormEmail,
        password: state.loginFormPassword,
        loading: state.authFormIsLoading
    }
}

const mapDispatchToLoginFormButtonsProps = (dispatch) => {
    return {
        login: (email, password) => {
            dispatch(fetchLogin(email, password))
        }
    }
}

export default connect(mapStateToLoginFormButtonsProps, mapDispatchToLoginFormButtonsProps)(LoginButtons);