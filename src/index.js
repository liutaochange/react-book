import React from 'react';
import ReactDOM from 'react-dom';
import AntDesign from './AntDesign.js';
import { Provider } from 'react-redux';
import Store from './store/index.js'
const App = (
  <Provider store= {Store}>
    <AntDesign />
  </Provider>  
)

ReactDOM.render(App, document.getElementById('root'));

