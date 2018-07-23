import axios from 'axios';

var querystring = require('querystring');

const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

export function login(email, password) {
  return dispatch => {
    // dispatch(setLoginPending(true));
    // dispatch(setLoginSuccess(false));
    // dispatch(setLoginError(null));
    
    axios.post("/api/login",querystring.stringify({
      username: 'projjal@admin.com', //gave the values directly for testing
      password: 'password'
    }),{
      headers: { 
      "Content-Type": "application/x-www-form-urlencoded"
    }})
        .then((response)=>{
            console.log("hello");
            console.log(response);
            if(response.status===200){
                console.log("Djflsflswlfs")
            }
        }).catch((error)=>{
            console.log("error maybe :P")
            throw error;
            //dispatch({type : "ROOMS_LIST_FAILED", error : error});
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

function setLoginPending(isLoginPending) {
  return {
    type: SET_LOGIN_PENDING,
    isLoginPending
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
  setTimeout(() => {
    if (email === 'admin@example.com' && password === 'admin') {
      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'));
    }
  }, 1000);
}

export default function loginReducer(state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null
}, action) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });

    default:
      return state;
  }
}