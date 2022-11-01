import axios from 'axios';
// import { useAppStore } from '../store/app';

export default class ApiService {
  // appStore = useAppStore();
  apiGet = (url, params, hasToken) => {
    return this.apiRun('GET', url, null, params, hasToken);
  };
  apiGet_test = (url, token) => {
    console.log(url)
    return this.apiRun_test('GET', url, token);
  };

  apiPost = (url, body, params, hasToken) => {
    return this.apiRun('post', url, body || null, params, hasToken);
  };

  apiPut = (url, body, params, hasToken) => {
    return this.apiRun('put', url, body || null, params, hasToken);
  };

  apiDelete = (url, params, hasToken) => {
    return this.apiRun('delete', url, null, params, hasToken);
  };

  apiRun =
    // eslint-disable-next-line no-unused-vars
    (method, url, body, params, hasToken) => {
      const config = {
        url,
        method,
        baseURL: process.env.VUE_APP_SERVER_URL,
        params,
        headers: {
          'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest'
        },
        data: body,
        timeout: 120000,
      };

      return new Promise((resolve, reject) => {
        axios(config)
          .then((response) => response)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((error) => {
            localStorage.removeItem('accessToken'); // remove the storage user
            return reject(error);
          })
          // .finally(() => {
          //   appStore.onUpdateLoadingAction(false);
          // });
      });
    };
    apiRun_test =
    // eslint-disable-next-line no-unused-vars
    (method, url, token) => {
      const config = {
        url,
        method,
        baseURL: process.env.VUE_APP_SERVER_URL,
     
        headers: {
          'Authorization': `Bearer ${token}`, 
          'Content-Type': 'application/json'
        },
    
      };

      return new Promise((resolve, reject) => {
        axios(config)
          .then((response) => response)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((error) => {
            localStorage.removeItem('accessToken'); // remove the storage user
            return reject(error);
          })
          // .finally(() => {
          //   appStore.onUpdateLoadingAction(false);
          // });
      });
    };
  appendHeaders = () => {
    const headers = {
      Accept: 'application/json',
      // 'Content-Type': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Credentials': true,
    };

    // if (hasToken && this.appStore.session.accessToken !== '') {
    //   headers.Authorization = `Beaer ${this.appStore.session.accessToken}`;
    // }

    // if (isFormData) {
    //   headers.Accept = '*/*';
    //   headers['Content-Type'] = 'multipart/form-data';
    // }
    return headers;
  };
}
