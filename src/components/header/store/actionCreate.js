import * as actionType from './actionType.js';
import { getSearchList } from '@/api/index.js'
export const getInputFocusAction = () => ({
  type: actionType.GETINPUTFOCUS,
})
export const getInputBlurAction = () => ({
  type: actionType.GETINPUTBLUR
})
const getSearchListAction = (data) => ({
  type: actionType.GETSEARCHLIST,
  list: data
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