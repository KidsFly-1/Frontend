import { axiosWithAuth } from '../utils/axiosWithAuth';
import history from '../history';

export const UPDATING = 'UPDATING';
export const GET_SUCCESS = 'GET_SUCCESS';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const UPDATE_SUCCESS = 'UPDATE_SUCCESS'
export const DELETE_SUCCESS = 'DELETE_SUCCESS'
export const FAILURE = 'FAILURE';

export const getUserTrips = (id) => dispatch => {
    dispatch({type: UPDATING})
    axiosWithAuth()
        .get(`/api/${id}`)
        .then(res=>{
            dispatch({type: GET_SUCCESS, payload: res.data})
        })
        .catch(err =>{
            dispatch({type: FAILURE, payload: err})
        })
};

export const getAllTrips = () => dispatch => {
    dispatch({type: UPDATING})
    axiosWithAuth()
        .get('/api')
        .then(res=>{
            dispatch({type: GET_SUCCESS, payload: res.data})
        })
        .catch(err =>{
            dispatch({type: FAILURE, payload: err})
        })
};

export const addTrip = (id, info) => dispatch => {
    dispatch({type: UPDATING})
    axiosWithAuth()
        .post(`/api/${id}`, info)
        .then(res=>{
            dispatch({type: ADD_SUCCESS, payload: res.data})
            history.push(`/my-trips/${id}`)
        })
        .catch(err=>{
            dispatch({type: FAILURE, payload: err})
        })
};

export const deleteTrip = (id, userId) => dispatch => {
    dispatch({type: UPDATING})
    axiosWithAuth()
        .delete(`/api/${id}`)
        .then(res=>{
            console.log('update trip res', res)
            dispatch({type: DELETE_SUCCESS})
            axiosWithAuth()
                .get(`/api/${userId}`)
                .then(res=>{
                    dispatch({type: GET_SUCCESS, payload: res.data})
                })
                .catch(err=>{
                    dispatch({type: FAILURE, payload: res})
                })
        })
        .catch(err=>{
            dispatch({type: FAILURE, payload: err})
        })
};

export const updateTrip = (id, info, userId) => dispatch => {
    dispatch({type: UPDATING})
    axiosWithAuth()
        .put(`/api/${id}`, info)
        .then(res=>{
            console.log('update trip res', res)
            dispatch({type: UPDATE_SUCCESS})
            axiosWithAuth()
                .get(`/api/${userId}`)
                .then(res=>{
                    dispatch({type: GET_SUCCESS, payload: res.data})
                })
                .catch(err=>{
                    dispatch({type: FAILURE, payload: res})
                })
            
        })
        .catch(err=>{
            dispatch({type: FAILURE, payload: err})
        })
};