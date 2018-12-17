import * as actionType from './actionType.js';
import { fromJS  } from 'immutable';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: []
})
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionType.GETLIST:
      return state.merge({
        topicList: action.data.get('topicList'),
        articleList: action.data.get('articleList'),
        recommendList: action.data.get('recommendList')
      })
    case actionType.GETMORE:
      return state.merge({
        articleList: state.get("articleList").concat(action.data),
      })
    default: 
      return state
  }
}