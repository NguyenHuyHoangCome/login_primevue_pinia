// import axios from 'axios';
import { inject } from "vue";
import { defineStore } from 'pinia';
import AuthServices from '@/core/services/AuthServices'


export const useAuthStore = defineStore('useAuthStore', () => {
  const authServices = new AuthServices();
  const toast = inject('toast');
  // STATE

  // GETTERS

  // ACTIONS
  const loginActions = async (data) => {
    try {
      const userData = await authServices.login(data);
      await afterLogin(userData);
      
      console.log(authServices.getAccessToken());
      console.log(userData);
      console.log(await auth_test());
     
       alert("hihi")
       return true;
    } catch(error) {
      toast.error(error.message);
    }
  }
  
  /**
   * Save user data and token to localStorage
   * 
   * @param {*} userData 
   */
  const afterLogin = (userLoggedData) => {
    const token = userLoggedData.token;

    delete userLoggedData.token;

    authServices.saveUserLogged(userLoggedData);
    authServices.setAccessToken(token);
  }
  const auth_test = () => {
    const auth =  authServices.authen_test(authServices.getAccessToken());
    if(auth !=""){
      return true
    }
    else{
      return false
    }
  }
  
  
  return {loginActions,auth_test};
});

