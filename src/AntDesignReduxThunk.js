import React, { Component } from 'react';
import Store from './store/index.js';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getTodoList } from './store/actionCreateThunk.js';
// import AntDesignUI from './AntDesignUI.js'  // 引入一个ui组件
import AntDesignUI from './NostatusCom.js' // 引入一个无状态组件
class AntDesign extends Component {
  constructor(props) {
    super(props)
    this.state = Store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleClickDelete = this.handleClickDelete.bind(this)
    Store.subscribe(this.handleStoreChange)
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    Store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(Store.getState())
  }
  handleButtonClick() {
    const action = getAddItemAction()
    Store.dispatch(action)
  }
  handleClickDelete(index) {
    const action = getDeleteItemAction(index)
    Store.dispatch(action)
  }
  render() {
    return (
      <AntDesignUI
        inputValue={this.state.inputValue}
        handleInputChange={this.handleInputChange}
        handleButtonClick={this.handleButtonClick}
        handleClickDelete={this.handleClickDelete}
        list={this.state.list} />
    )
  }
  componentDidMount() {
    const action = getTodoList()
    Store.dispatch(action)
  }
}
export default AntDesign