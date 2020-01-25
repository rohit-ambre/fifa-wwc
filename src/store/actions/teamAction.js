import * as types from '../actions/actionTypes';
import axios from 'axios';

export const teamInitiated = () => ({
  type: types.TEAMS_INITIATE
})

export const groupsInitiated = () => ({
  type: types.GROUPS_INITIATE
})

export const getTeamsGroups = () => {
  return (dispatch) => {
    dispatch(getTeams())
    dispatch(getGroups())
  }
}

export const getTeams = () => {
  return (dispatch) => {
    dispatch(teamInitiated())
    return axios({
      method: 'get',
      url: "https://worldcup.sfg.io/teams/"
    })
      .then(res => {
        console.log('teams', res.data);
        dispatch(teamsSuccessful(res.data))
      })
      .catch(err => console.log(err))
  }
}

export const getGroups = () => {
  return (dispatch) => {
    dispatch(groupsInitiated())
    return axios({
      method: 'get',
      url: "https://worldcup.sfg.io/teams/group_results"
    })
      .then(res => {
        console.log('groups', res.data);
        dispatch(groupsSuccessful(res.data))
      })
      .catch(err => console.log(err))
  }
}

export const teamsSuccessful = (teams) => ({
  type: types.TEAMS_SUCCESS,
  payload: {
    teams
  }
});

export const groupsSuccessful = (groups) => ({
  type: types.GROUPS_SUCCESS,
  payload: {
    groups
  }
});