import { put, takeEvery } from 'redux-saga/effects';
import { GET_INIT_LIST } from './actionType.js';
import { initDataAction } from './actionCreate.js';
import axios from 'axios';
function* getInitList() {
  try {
    const res = yield axios.get('http://127.0.0.1:5566/');
    const action = initDataAction(res.data.data)
    yield put(action);
  } catch (error) {
    console.log(error);
  }
}
function* TodoSaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}
export default TodoSaga;