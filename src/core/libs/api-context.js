import Axios from 'axios';
import changeCase from "change-object-case";

// DEBUG
const isDebug = process.env.NODE_ENV !== 'production';

// set axios
const axios = Axios.create({
  baseURL: `${process.env.API_ENDPOINT}`,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest'
  },
  responseType: 'json',
  timeout: 5000,
});

// intercept when request
axios.interceptors.request.use(
  (config) => {
    if (isDebug) {
      // can output log here
    }

    // can make common setting while request here

    return config;
  },
  (error) => {
    return Promise.reject(error);
  });

// intercept while response
axios.interceptors.response.use(
  (response) => {
    if (isDebug) {
      // can output log here
    }

    // change result to camel case
    if (response.data instanceof Array) {
      response.data = changeCase.camelArray(response.data, {recursive: true, arrayRecursive: true});
    } else {
      response.data = changeCase.camelKeys(response.data, {recursive: true, arrayRecursive: true});
    }

    return response;
  },
  (error) => {
    if (isDebug) {
      // can output log here
    }

    // change result to camel case
    if (error.response.data instanceof Array) {
      error.response.data = changeCase.camelArray(error.response.data, {recursive: true, arrayRecursive: true});
    } else {
      error.response.data = changeCase.camelKeys(error.response.data, {recursive: true, arrayRecursive: true});
    }

    return Promise.reject(error);
  },
);

export default axios;
