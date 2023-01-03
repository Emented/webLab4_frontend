import './CoordinatesForm.scss'

import React from 'react';
import CoordinatesFields from "./CoordinatesFields";
import CoordinatesButtons from "./CoordinatesButtons";
import {setFormError} from "../../../../redux/actions";
import {connect} from "react-redux";
import {Snackbar} from "@mui/material";
import {Alert} from "@mui/lab";

const CoordinatesForm = (props) => {

    return (
        <div className="coordinates-form tile">

            <CoordinatesFields/>
            <CoordinatesButtons/>
            <Snackbar open={props.formError !== ""}
                      autoHideDuration={6000}
                      onClose={() => props.setFormError("")}>
                <Alert className="coordinate-form-error-alert"
                       onClose={() => props.setFormError("")}
                       severity="error">
                    {props.formError}
                </Alert>
            </Snackbar>
        </div>
    )

};

const mapStateToFormProps = (state) => {
    return {
        formError: state.formErrorMessage,
    }
}

const mapDispatchToFormProps = (dispatch) => {
    return {
        setFormError: (formError) => {
            dispatch(setFormError(formError))
        }
    }
}

export default connect(mapStateToFormProps, mapDispatchToFormProps)(CoordinatesForm);