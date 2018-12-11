import React, { Component } from 'react';
import Store from './store/index.js';
import { connect } from 'react-redux';
// import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList } from './store/actionCreate.js';
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
    // const action = getInputChangeAction(e.target.value)
    // Store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(Store.getState())
  }
  handleButtonClick() {
    // const action = getAddItemAction()
    // Store.dispatch(action)
  }
  handleClickDelete(index) {
    // const action = getDeleteItemAction(index)
    // Store.dispatch(action)
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
    // const action = getInitList()
    // Store.dispatch(action)
  }
}
const mapStateToProps = (state) =>  {
  return { 
    inputValue: state.inputValue,
    list: state.list 
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      Object.assign({}, todoActionCreators, counterActionCreators),
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AntDesign)