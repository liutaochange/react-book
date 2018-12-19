import * as actionType from './actionType.js';
import { fromJS  } from 'immutable';

const defaultState = fromJS({
  login: false
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GETUSERLOGIN:
      return state.merge({
        login: true
      })
    default: 
      return state
  }
}