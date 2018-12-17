import * as actionType from './actionType.js';
import { fromJS  } from 'immutable';
export const getTopicListAction = () => ({
  type: actionType.GETTOPICLIST,
})