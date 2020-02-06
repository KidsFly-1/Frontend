// index.js reducer file

import {
    START_REGISTER,
    REGISTER_SUCCESS,
    REGISTER_FAILURE
} from '../actions/register';

import { 
    START_LOGIN, 
    LOGIN_SUCCESS, 
    LOGIN_FAILURE
} from "../actions/login";

import {
    UPDATING,
    GET_SUCCESS,
    ADD_SUCCESS,
    UPDATE_SUCCESS,
    DELETE_SUCCESS,
    FAILURE
} from '../actions/tripsActions'

const initialState = {
        trips: [],
        isUpdating: false,
        error: ''
    };

    export const reducer = (state = initialState, action) => {
        switch (action.type) {
            case START_REGISTER:
            return {
                ...state,
                isFetching: true,
                error: ""
            };
            case REGISTER_SUCCESS:
            return {
                ...state,
                credentials: action.payload,
                isFetching: false,
                error: ""
            };
            case REGISTER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
            case START_LOGIN:
            return {
                ...state,
                isFetching: true,
                isLoggedIn: false,
                error: ""
            };
            case LOGIN_SUCCESS:
            return {
                ...state,
                credentials: action.payload,
                isFetching: false,
                isLoggedIn: true,
                error: ""
            };
            case LOGIN_FAILURE:
            return {
                ...state,
                isFetching: false,
                isLoggedIn: false,
                error: action.payload
            };
            case UPDATING :
                return {
                    ...state,
                    isUpdating: true
                }
            case GET_SUCCESS : 
                return {
                    ...state,
                    trips: action.payload,
                    isUpdating: false
                }
                case ADD_SUCCESS : 
                return {
                    ...state,
                    trips: action.payload,
                    isUpdating: false
                }
                case UPDATE_SUCCESS : 
                return {
                    ...state,
                    isUpdating: false
                }
                case DELETE_SUCCESS : 
                return {
                    ...state,
                    isUpdating: false
                }
            case FAILURE: 
                return {
                    ...state,
                    isUpdating: false,
                    error: action.payload
                }
            default:
            return state;
    }
};