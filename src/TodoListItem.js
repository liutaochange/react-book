import React, { Component } from 'react';
import PropTypes from 'prop-types';
class TodoItem extends Component {
  constructor(props){
    super(props);
    this.handlerClick = this.handlerClick.bind(this)
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