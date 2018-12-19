import * as actionType from './actionType.js';
import { fromJS  } from 'immutable';
import { userLogin } from '@/api/index.js';
const userLoginAction = (data) => ({
  type: actionType.GETUSERLOGIN,
  data: fromJS(data)
})

export const submitLogin = (user, word) => {
  return (dispatch) => {
    userLogin(user, word).then((res) => {
      dispatch(userLoginAction(res.data.data))
    }).catch((error) => {
      console.log(error)
    }) 
  }
}