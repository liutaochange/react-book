import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style.js'
import { GlobalIcon } from './assets/iconfont/iconfont.js'
import Header from './components/header/index.js'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <GlobalIcon />
        <Header />
      </Fragment>
    );
  }
}

export default App;
