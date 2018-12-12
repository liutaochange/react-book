import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_DATA_STORE, GET_INIT_LIST } from './actionType.js'
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
export const getInitList = () => ({
  type: GET_INIT_LIST
})