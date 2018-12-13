import React, { Component, Fragment } from 'react';
import { GlobalStyle } from './style.js'
import Header from './components/header/index.js'

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Header />
      </Fragment>
    );
  }
}

export default App;
