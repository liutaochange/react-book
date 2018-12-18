import * as actionType from './actionType.js';
import { fromJS  } from 'immutable';

const defaultState = fromJS({
  title: "",
  content:""
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GETDETAIL:
      return state.merge({
        title: action.data.get('title'),
        content: action.data.get('content')
      })
    default: 
      return state
  }
}