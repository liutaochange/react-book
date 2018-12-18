import * as actionType from './actionType.js';
import { fromJS  } from 'immutable';
import { getDetailData } from '@/api/index.js';
const getDetailAction = (data) => ({
  type: actionType.GETDETAIL,
  data: fromJS(data)
})

export const getDetail = () => {
  return (dispatch) => {
    getDetailData().then((res) => {
      dispatch(getDetailAction(res.data.data))
    }).catch((error) => {
      console.log(error)
    }) 
  }
}