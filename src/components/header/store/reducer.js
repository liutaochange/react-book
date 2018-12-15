import * as actionType from './actionType.js';
import { fromJS  } from 'immutable';

const defaultState = fromJS ({
  focused: false,
  list: []
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GETINPUTFOCUS:
      return state.set('focused', true)
    case actionType.GETINPUTBLUR:
      return state.set('focused', false)
    case actionType.GETSEARCHLIST:
      return state.set('list', action.list)
    default: 
      return state
  }
}