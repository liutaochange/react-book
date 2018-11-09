import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
  constructor(props){
    super(props);
    this.handlerClick = this.handlerClick.bind(this)
  }
  // 子组件接收到父组件新的props,在父组件重新调用render函数结束后执行
  // 子组件第一次存在于父组件中，不会执行
  // 子组件已经存在父组件中，才会执行
  componentWillReceiveProps() {
    console.log('child componentWillReceiveProps')
  }
  // 组件将要卸载时调用, 即组件即将被移除时执行
  componentWillUnmount(){
    console.log('child componentWillUnmount')
  }
  handlerClick(){
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
  render(){
    const { content, test } = this.props;
    return (
      <li onClick={this.handlerClick}>{test}-{content}</li>
    )
  }
}
TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.string,
  deleteItem: PropTypes.func,
  index: PropTypes.number
}
TodoItem.defaultProps = {
  test: 'react'
}
export default TodoItem;