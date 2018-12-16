import * as actionType from './actionType.js';
import { fromJS  } from 'immutable';

const defaultState = fromJS ({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GETINPUTFOCUS:
      return state.set('focused', true)
    case actionType.GETINPUTBLUR:
      return state.set('focused', false)
    case actionType.GETSEARCHLIST:
      return state.merge({
        list: action.list,
        totalPage: action.totalPage
      })
    case actionType.GETMOUSEENTER:
      return state.set('mouseIn', true)
    case actionType.GETMOUSELEAVE:
      return state.set('mouseIn', false)
    case actionType.GETCHANGEPAGE:
      return state.set('page', action.page)
    default: 
      return state
  }
}