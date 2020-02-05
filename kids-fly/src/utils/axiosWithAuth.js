import axios from 'axios';

export const axiosWithAuth = () => {

    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://kids-fly-backend.herokuapp.com/',
        headers: {
            authorization: token
        }
    });
};