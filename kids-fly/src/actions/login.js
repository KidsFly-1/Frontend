import axios from 'axios';
import history from '../history'

export const START_LOGIN = "START_LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = (credentials) => {return dispatch => {
    dispatch ({type: START_LOGIN});
    axios
        .post(
            'https://evening-island-60784.herokuapp.com/api/auth/login',
            credentials
        )
        .then(res => {
            dispatch({type: LOGIN_SUCCESS, payload: res});
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('id', res.data.id)
            console.log('setting user id', res.data.id)
            history.push(`/my-trips/${res.data.id}`)
        })
        .catch(err=> {
            dispatch({type: LOGIN_FAILURE, payload: err})
        })
    }
};