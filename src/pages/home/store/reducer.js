import * as actionType from './actionType.js';
import { fromJS  } from 'immutable';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  showScroll: false
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GETLIST:
      return state.merge({
        topicList: action.data.get('topicList') || [],
        articleList: action.data || [],
        recommendList: action.data.get('recommendList') || []
      })
    case actionType.GETMORE:
      return state.merge({
        articleList: state.get("articleList").concat(action.data),
      })
    case actionType.CHANGESCROLL:
      return state.merge({
        showScroll: action.flag
      })
    default: 
      return state
  }
}