import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.auth, action) {
  switch (action.type) {
    case types.AUTH_SUCCESS:
      return Object.assign({}, state, {
        authenticated: true,
        auth_token: action.payload.auth_token,
        auth_failure: false,
      })
    case types.AUTH_FAILURE:
      return Object.assign({}, state, {
        auth_failure: true
      })
    case types.LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        authenticated: false,
        auth_token: ''
      })
    default:
      return state

  }
}