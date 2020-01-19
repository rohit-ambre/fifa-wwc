import * as types from '../actions/actionTypes';
import crypto from 'crypto';

export const authInitiated = () => ({
  type: types.AUTH_INITIATED
});

export const auth = (username, password) => {
  return (dispatch) => {
    dispatch(authInitiated());
    const pro = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve(crypto.randomBytes(20).toString('hex'));
      }, 300);
    })
    pro.then(data => {
      dispatch(authSuccess(data))
      localStorage.setItem('auth_token', data)
    }).catch(err => {
      console.log(err)
      dispatch(authFailure());
    })
  }
}

export const authSuccess = (auth_token) => ({
  type: types.AUTH_SUCCESS,
  payload: {
    auth_token
  }
});

export const authFailure = () => ({
  type: types.AUTH_FAILURE
});

export const checkLogin = () => {
  return (dispatch) => {
    if (localStorage.getItem('auth_token')) {
      dispatch(authSuccess(localStorage.getItem('auth_token')));
    }
  }
}

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem('auth_token')
    dispatch(logoutSuccess())
  }
}

export const logoutSuccess = () => ({
  type: types.LOGOUT_SUCCESS
});