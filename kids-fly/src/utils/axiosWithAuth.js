import axios from 'axios';

export const axiosWithAuth = () => {

    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://evening-island-60784.herokuapp.com',
        headers: {
            authorization: token
        }
    });
};