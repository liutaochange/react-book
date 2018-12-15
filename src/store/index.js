import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducer.js';
const Store = createStore(reducer, applyMiddleware(ReduxThunk))
export default Store