import * as actionType from './actionType.js';
import { fromJS  } from 'immutable';
import { getHomeList } from '@/api/index.js';
const getListAction = (data) => ({
  type: actionType.GETLIST,
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