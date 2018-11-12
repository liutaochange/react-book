import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './app.css'
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      showFlag: true,
      list: []
    };
    this.toogle = this.toogle.bind(this);
    this.addItem = this.addItem.bind(this);
  }
  toogle(){
    this.setState((prevState)=>({
      showFlag: !prevState.showFlag
    }))
  }
  addItem(){
    this.setState((prevState)=>({
      list: [...prevState.list, 'item']
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
        <br />
        <br />
        <TransitionGroup>
        {
          this.state.list.map((item,index) => {
            return (
              <CSSTransition timeout={300} classNames="fade" unmountOnExit appear={true} key={index}>
                <div>{item}</div>
              </CSSTransition>
            )
          })
        }
        </TransitionGroup>
        <button type="button" className="button" onClick={this.addItem}>add item</button>
      </Fragment>
    )
  }
}
export default App;