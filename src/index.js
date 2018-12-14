import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import Store from './store/index.js';
const Home = (
  <Provider store= {Store}>
    <App />
  </Provider>  
)

ReactDOM.render(Home, document.getElementById('root'));

