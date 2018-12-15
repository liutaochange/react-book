import * as actionType from './actionType.js';
import { getSearchList } from '@/api/index.js';
import { fromJS  } from 'immutable';
const getSearchListAction = (data) => ({
  type: actionType.GETSEARCHLIST,
  list: fromJS(data)
})
export const getInputFocusAction = () => ({
  type: actionType.GETINPUTFOCUS,
})
export const getInputBlurAction = () => ({
  type: actionType.GETINPUTBLUR
})
export const getSearchAction = () => {
  return (dispatch) => {
    getSearchList().then((res) => {
      dispatch(getSearchListAction(res.data.data))
    }).catch((error) => {
      console.log(error)
    }) 
  }
}