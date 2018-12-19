import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style.js';
import { GlobalIcon } from './assets/iconfont/iconfont.js';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/header/index.js';
import Home from './pages/home/index.js';
import Detail from './pages/detail/loadable.js';
import Login from './pages/login/loadable.js';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalIcon />
        <BrowserRouter>
          <div>
            <Header />
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail/:id' exact component={Detail}></Route>
            <Route path='/login' exact component={Login}></Route>
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
