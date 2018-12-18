import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../components/header/store/index.js';
import { reducer as homeReducer } from '../pages/home/store/index.js';
import { reducer as detailReducer } from '../pages/detail/store/index.js';
export default combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer
})