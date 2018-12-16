import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style.js';
import { GlobalIcon } from './assets/iconfont/iconfont.js';
import { BrowserRouter, Route } from "react-router-dom";
import Header from './components/header/index.js';
import Home from './pages/home/index.js';
import Detail from './pages/detail/index.js';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalIcon />
        <Header />
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Home}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </div>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
