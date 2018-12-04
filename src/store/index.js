// 应用中所有的 state 都以一个对象树的形式储存在一个单一的 store 中。 
// 惟一改变 state 的办法是触发 action，一个描述发生什么的对象。 
// 为了描述 action 如何改变 state 树，你需要编写 reducers。
// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
// 你应该把要做的修改变成一个普通对象，这个对象被叫做 action，而不是直接修改 state。然后编写专门的函数来决定每个 action 如何改变应用的 state，这个函数被叫做 reducer。
// Redux 可以用这三个基本原则来描述：
// 1. 单一数据源
// 2. State 是只读的
// 3. 使用纯函数来执行修改 ( reducers)
import { createStore } from 'redux';
import reducer from './reducer.js';

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。 订阅store的改变/派发action/获取store的值
const Store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default Store;