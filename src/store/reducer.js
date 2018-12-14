import { GETINPUTFOCUS, GETINPUTBLUR } from './actionType.js';
const defaultState = {
  focused: false
}
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === GETINPUTFOCUS) {
    newState.focused = true
    return newState
  } else if (action.type === GETINPUTBLUR) {
    newState.focused = false
    return newState
  } 
  return state
}