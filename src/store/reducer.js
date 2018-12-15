import { combineReducers } from 'redux-immutable'
import { reducer as headerReducer }  from '../components/header/store/index.js'

export default combineReducers({
  header: headerReducer
})