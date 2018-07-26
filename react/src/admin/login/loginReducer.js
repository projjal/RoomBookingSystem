import axios from 'axios';
// import {Authenticated} from '../../security/privateRoute'; 


var querystring = require('querystring');
import history from '../../history'

const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

export function login(email, password) {
  return dispatch => {
    console.log(email);
    console.log(password);

    
    // dispatch(setLoginSuccess(false));
    // dispatch(setLoginError(null));
    axios.post("/api/login",querystring.stringify({
      username: email, //gave the values directly for testing
      password: password
    }),{
      headers: { 
        "Content-Type": "application/x-www-form-urlencoded"
      },
      withCredentials: true  
    })
        .then((response)=>{
          console.log("responseis")
            if(response.status===200){
              // console.log("200")
              history.push('/admin/')
              // dispatch(setLoginSuccess(true));
            }
        }).catch((error)=>{
          console.log(error);
          throw error;
        }); 


    // callLoginApi(email, password, error => {
    //   dispatch(setLoginPending(false));
    //   if (!error) {
    //     dispatch(setLoginSuccess(true));
    //   } else {
    //     dispatch(setLoginError(error));
    //   }
    // });
  };
}


function setLoginSuccess(isLoginSuccess) {
  return {
    type: SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: SET_LOGIN_ERROR,
    loginError
  }
}

function callLoginApi(email, password, callback) {
  // setTimeout(() => {
  //   if (email === 'admin@example.com' && password === 'admin') {
  //     return callback(null);
  //   } else {
  //     return callback(new Error('Invalid email and password'));
  //   }
  // }, 1000);


}

export default function loginReducer(state = {
  isLoginSuccess: false,
  loginError: null,
  redirectToReferrer : false
}, action) {
  switch (action.type) {
    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        redirectToReferrer: action.isLoginSuccess
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}