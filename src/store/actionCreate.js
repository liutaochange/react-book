import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionType.js'
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