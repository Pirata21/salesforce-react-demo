import {  ALL_ACCTS } from '../constants/index';

export function allAccts(accts) {
  return{
    type: ALL_ACCTS,
    accts: accts
  }
}

export function qryAccts()
{
  return dispatch => {
    AccountsController.getAccts(function(r, e) {
      dispatch(allAccts(r))
    },{escape:false});
  }
}
