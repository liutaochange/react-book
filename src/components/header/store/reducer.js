import * as actionType from './actionType.js';
import { fromJS  } from 'immutable';

const defaultState = fromJS ({
  focused: false
})
export default (state = defaultState, action) => {
  if (action.type === actionType.GETINPUTFOCUS) {
    return state.set('focused', true)
  } else if (action.type === actionType.GETINPUTBLUR) {
    return state.set('focused', false)
  } 
  return state
}