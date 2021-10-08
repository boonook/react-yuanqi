import axios from '../axios/axios_request'
import axioss from 'axios'
export const login = (params) => {
    return axios.request({
        url:'/api/admin/auth/login',
        method:'post',
        data:JSON.stringify(params),
        headers: {
            'Content-Type': 'application/json',
        },
    },false)
};

export const getMenu = (params) => {
    return axios.request({
        url:'api/admin/menu/list',
        method:'get',
    },true,false)
};

export const getCeshi=(params)=>{

    axios.get('http:127.0.0.1:3003/api/admin').then(function (response) {
        debugger
        alert(''.concat(response.data, '\r\n', response.status, '\r\n', response.statusText, '\r\n', response.headers, '\r\n', response.config));
    }).catch(function (error) {
        alert(error);
        debugger
    });
}
