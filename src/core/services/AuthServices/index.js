import ApiService from '@/core/services/api.service';
import CryptoJS from "crypto-js";
import {
  loginEndpoint,
  authEndpoint,
  accessTokenName,
  userLoggedName

} from './endPoints';

export default class AuhServices extends ApiService {
  login(args) {
    return this.apiPost(loginEndpoint, args);
  }

  getAccessToken() {
    return localStorage.getItem(accessTokenName);
  }

  setAccessToken(token) {
    localStorage.setItem(accessTokenName, token);
  }

  saveUserLogged(userData) {
    const userHashedInfo = CryptoJS.AES.encrypt(JSON.stringify(userData), process.env.VUE_APP_USER_KEY).toString();
    localStorage.setItem(userLoggedName, userHashedInfo);
  }
// test ting auth
  authen_test(token){
    return this.apiGet_test(authEndpoint, token);
  }

  getUserLogged() {
    const userHashedData = localStorage.getItem(userLoggedName);
    if (userHashedData) {
      const bytes = CryptoJS.AES.decrypt(userHashedData, process.env.VUE_APP_USER_KEY);
      const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

      return decryptedData;
    }
    return null;
  }
}