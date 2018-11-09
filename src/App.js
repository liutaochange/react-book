import React, { Component, Fragment } from 'react';
import { CSSTransition } from 'react-transition-group';
import './app.css'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showFlag: true
    }
    this.toogle = this.toogle.bind(this)
  }
  toogle(){
    this.setState((prevState)=>({
      showFlag: !prevState.showFlag
    }))
  }
  render(){
    return (
      <Fragment>
        <CSSTransition in={this.state.showFlag} timeout={300} classNames="fade" unmountOnExit appear={true}>
          <p>welcome react world</p>
        </CSSTransition>
        {/*<p className={ this.state.showFlag ? "show" : "hide" }>welcome react world</p>*/}
        <button type="button" className="button" onClick={this.toogle}>toogle</button>
      </Fragment>
    )
  }
}
export default App;