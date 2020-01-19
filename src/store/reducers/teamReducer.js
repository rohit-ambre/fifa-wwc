import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function (state = initialState.teams, action) {
  switch (action.type) {
    case types.TEAMS_INITIATE:
      return Object.assign({}, state, {
        teams_loader: true
      })
    case types.GROUPS_INITIATE:
      return Object.assign({}, state, {
        teams_loader: true
      })
    case types.TEAMS_SUCCESS:
      return Object.assign({}, state, {
        team_loader: false,
        teams: action.payload.teams
      })
    case types.GROUPS_SUCCESS:
      return Object.assign({}, state, {
        team_loader: false,
        groups: action.payload.groups
      })

    default:
      return state

  }
}