import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://howtobw.herokuapp.com/api/auth/login',
        headers: {
            authorization: token
        }
    })
}