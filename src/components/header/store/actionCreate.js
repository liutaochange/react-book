import * as actionType from './actionType.js';
import { getSearchList } from '@/api/index.js';
import { fromJS  } from 'immutable';
const getSearchListAction = (data) => ({
  type: actionType.GETSEARCHLIST,
  list: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})
export const getInputFocusAction = () => ({
  type: actionType.GETINPUTFOCUS,
})
export const getInputBlurAction = () => ({
  type: actionType.GETINPUTBLUR
})
export const getMouseEnterAction = () => ({
  type: actionType.GETMOUSEENTER
})
export const getMouseLeaveAction = () => ({
  type: actionType.GETMOUSELEAVE
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