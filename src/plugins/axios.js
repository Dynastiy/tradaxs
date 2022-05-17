import Vue from 'vue'
import "toastify-js/src/toastify.css"
import Toastify from 'toastify-js'
// import store from '../store'
// import router from '../router'
Vue.use(Toastify)

import axios from "axios";
const BASE_URL = 'https://api.tradaxs.com/api/';

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-type": "application/json",
        // "Authorization": `Bearer 1|WnM7JDwUoOuM3BoCqrDfErQZrw58haoDUvuePhgK`,
        'web_key': 'd797e46b-14d2-4248-a451-1dd60faa9bd0',
        'token': '1|WnM7JDwUoOuM3BoCqrDfErQZrw58haoDUvuePhgK',
        "Access-Control-Allow-Origin": "*",
    }
});

// Add a request interceptor
instance.interceptors.request.use(function(config) {
    // Do something before request is sent
    // alert("requesting")
    // console.log(`1|WnM7JDwUoOuM3BoCqrDfErQZrw58haoDUvuePhgK`);
    // const token = `1|WnM7JDwUoOuM3BoCqrDfErQZrw58haoDUvuePhgK`;

    // if (token) {
    //     config.headers['Authorization'] = `Bearer ${token}`;
    //     config.headers['token'] = `${token}`;
    //     config.headers['web_key'] = `d797e46b-14d2-4248-a451-1dd60faa9bd0`;
    // }

    return config;
}, function(error) {
    // Do something with request error
    alert("something went wrong")
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function(error) {

    console.log(error.response);
    Toastify({
        text: error.response,
        className: "info",
        style: {
            background: "red",
        }
    }).showToast();
    console.log(error.response)

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
    // return error
});

export default instance