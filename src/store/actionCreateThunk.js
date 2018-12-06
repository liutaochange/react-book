import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_DATA_STORE } from './actionType.js'
import axios from 'axios'
// import { combineReducers } from 'redux';
// 根据定义的type值封装函数，直接生成对应的action
export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
})
export const getDeleteItemAction = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})
export const initDataAction = (data) => ({
  type: INIT_DATA_STORE,
  data
})
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('http://127.0.0.1:5566/').then((res) => {
      const action = initDataAction(res.data.data)
      dispatch(action)
    }).catch((err) => {
      console.log(err)
    })
  }
}