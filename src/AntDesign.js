import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreate.js';
import AntDesignUI from './NostatusCom.js' // 引入一个无状态组件
class AntDesign extends Component {
  render() {
    return (
      <AntDesignUI
        inputValue={this.props.inputValue}
        handleInputChange={this.props.handleInputChange}
        handleButtonClick={this.props.handleButtonClick}
        handleClickDelete={this.props.handleClickDelete}
        list={this.props.list} />
    )
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
    handleInputChange(e) {
      const action = getInputChangeAction(e.target.value)
      dispatch(action)
    },
    handleButtonClick() {
      const action = getAddItemAction()
      dispatch(action)
    },
    handleClickDelete(index) {
      const action = getDeleteItemAction(index)
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AntDesign)