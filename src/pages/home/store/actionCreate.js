import * as actionType from './actionType.js';
import { fromJS  } from 'immutable';
import { getHomeList, getMoreList } from '@/api/index.js';
const getListAction = (data) => ({
  type: actionType.GETLIST,
  data: fromJS(data)
})

const getMoreAction = (data) => ({
  type: actionType.GETMORE,
  data: fromJS(data)
})

export const getList = () => {
  return (dispatch) => {
    getHomeList().then((res) => {
      dispatch(getListAction(res.data.data))
    }).catch((error) => {
      console.log(error)
    }) 
  }
}

export const getMoreData = () => {
  return (dispatch) => {
    getMoreList().then((res) => {
      dispatch(getMoreAction(res.data.data))
    }).catch((error) => {
      console.log(error)
    }) 
  }
}

export const changeScrollFlag = (flag) => ({
  type: actionType.CHANGESCROLL,
  flag
})
