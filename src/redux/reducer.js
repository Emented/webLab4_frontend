import AuthService from "../service/AuthService";

import {
    FETCH_CHECK_HIT_FAILURE,
    FETCH_CHECK_HIT_REQUEST,
    FETCH_CHECK_HIT_SUCCESS,
    FETCH_DELETE_ALL_HITS_FAILURE,
    FETCH_DELETE_ALL_HITS_REQUEST,
    FETCH_DELETE_ALL_HITS_SUCCESS,
    FETCH_GET_ALL_HITS_FAILURE,
    FETCH_GET_ALL_HITS_REQUEST,
    FETCH_GET_ALL_HITS_SUCCESS,
    FETCH_LOGIN_FAILURE,
    FETCH_LOGIN_REQUEST,
    FETCH_LOGIN_SUCCESS,
    FETCH_REGISTER_FAILURE,
    FETCH_REGISTER_REQUEST,
    FETCH_REGISTER_SUCCESS,
    SET_FORM_ERROR,
    SET_LOGGED_IN,
    SET_LOGIN_FORM_EMAIL,
    SET_LOGIN_FORM_ERROR,
    SET_LOGIN_FORM_PASSWORD,
    SET_R,
    SET_REGISTER_FORM_EMAIL,
    SET_REGISTER_FORM_ERROR,
    SET_REGISTER_FORM_PASSWORD,
    SET_REGISTER_FORM_PASSWORD_REPEAT,
    SET_REGISTER_FORM_SUCCESS_MESSAGE,
    SET_TABLE_HITS_LIST, SET_TABLE_IS_LOADING,
    SET_X,
    SET_Y
} from "./actions";


const initialState = {
    loading: false,
    authFormIsLoading: false,
    tableIsLoading: false,
    serverErrorMessage: '',
    hitsList: [],
    currentEnteredX: 0,
    currentEnteredY: 0,
    currentEnteredR: 1,
    formErrorMessage: '',
    loginFormEmail: '',
    loginFormPassword: '',
    loginFormErrorMessage: '',
    loginFormSuccessMessage: '',
    registerFormEmail: '',
    registerFormPassword: '',
    registerFormPasswordRepeat: '',
    registerFormErrorMessage: '',
    registerFormSuccessMessage: '',
    isLoggedIn: AuthService.isLoggedIn()
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_CHECK_HIT_SUCCESS:
            return {
                ...state,
                tableIsLoading: false,
                hitsList: [...state.hitsList, action.payload]
            }
        case FETCH_CHECK_HIT_FAILURE:
            return {
                ...state,
                tableIsLoading: false,
                formErrorMessage: action.payload
            }
        case FETCH_CHECK_HIT_REQUEST:
            return {
                ...state,
                tableIsLoading: true
            }
        case FETCH_DELETE_ALL_HITS_SUCCESS:
            return {
                ...state,
                tableIsLoading: false,
                hitsList: []
            }
        case FETCH_DELETE_ALL_HITS_FAILURE:
            return {
                ...state,
                tableIsLoading: false,
                formErrorMessage: action.payload
            }
        case FETCH_DELETE_ALL_HITS_REQUEST:
            return {
                ...state,
                tableIsLoading: true
            }
        case FETCH_GET_ALL_HITS_SUCCESS:
            return {
                ...state,
                tableIsLoading: false,
                hitsList: action.payload
            }
        case FETCH_GET_ALL_HITS_FAILURE:
            return {
                ...state,
                tableIsLoading: false,
                formErrorMessage: action.payload
            }
        case FETCH_GET_ALL_HITS_REQUEST:
            return {
                ...state,
                tableIsLoading: true
            }
        case SET_X:
            return {
                ...state,
                currentEnteredX: action.payload,
            }
        case SET_Y:
            return {
                ...state,
                currentEnteredY: action.payload,
            }
        case SET_R:
            return {
                ...state,
                currentEnteredR: action.payload,
            }
        case SET_FORM_ERROR:
            return {
                ...state,
                formErrorMessage: action.payload,
            }
        case SET_LOGIN_FORM_PASSWORD:
            return {
                ...state,
                loginFormPassword: action.payload,
            }
        case SET_LOGIN_FORM_EMAIL:
            return {
                ...state,
                loginFormEmail: action.payload,
            }
        case FETCH_LOGIN_REQUEST:
            return {
                ...state,
                authFormIsLoading: true,
            }
        case FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                authFormIsLoading: false,
                loginFormErrorMessage: '', isLoggedIn: true
            }
        case FETCH_LOGIN_FAILURE:
            return {
                ...state,
                authFormIsLoading: false,
                loginFormErrorMessage: action.payload,
            }
        case SET_REGISTER_FORM_PASSWORD:
            return {
                ...state,
                registerFormPassword: action.payload,
            }
        case SET_REGISTER_FORM_PASSWORD_REPEAT:
            return {
                ...state,
                registerFormPasswordRepeat: action.payload,
            }
        case SET_REGISTER_FORM_EMAIL:
            return {
                ...state,
                registerFormEmail: action.payload,
            }
        case FETCH_REGISTER_REQUEST:
            return {
                ...state,
                authFormIsLoading: true,
            }
        case FETCH_REGISTER_SUCCESS:
            return {
                ...state,
                authFormIsLoading: false,
                registerFormSuccessMessage: 'The user has been successfully registered',
                registerFormErrorMessage: ''
            }
        case FETCH_REGISTER_FAILURE:
            return {
                ...state,
                authFormIsLoading: false,
                registerFormErrorMessage: action.payload,
                registerFormSuccessMessage: ''
            }
        case SET_TABLE_HITS_LIST:
            return {
                ...state,
                hitsList: action.payload,
            }
        case SET_LOGGED_IN:
            return {
                ...state,
                isLoggedIn: action.payload,
            }
        case SET_REGISTER_FORM_ERROR: {
            return {
                ...state,
                registerFormErrorMessage: action.payload,
            }
        }
        case SET_LOGIN_FORM_ERROR: {
            return {
                ...state,
                loginFormErrorMessage: action.payload,
            }
        }
        case SET_REGISTER_FORM_SUCCESS_MESSAGE: {
            return {
                ...state,
                registerFormSuccessMessage: action.payload,
            }
        }
        case SET_TABLE_IS_LOADING: {
            return {
                ...state,
                tableIsLoading: action.payload
            }
        }

        default:
            return state;
    }
}

export default reducer;