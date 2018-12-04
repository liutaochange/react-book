import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './actionType.js'
const defaultReducer = {
  inputValue: 'hello redux',
  list: [1, 2, 3]
}

// 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
// Reducer 只是一些纯函数，它接收先前的 state 和 action，并返回新的 state。
export default (state = defaultReducer, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  if (action.type === CHANGE_INPUT_VALUE) {
    newState.inputValue = action.value
    return newState
  } else if (action.type === ADD_TODO_ITEM) {
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  } else if (action.type === DELETE_TODO_ITEM) {
    newState.list.splice(action.index, 1)
    return newState
  }
  return state
}