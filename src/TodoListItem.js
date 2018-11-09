import React, { Component } from 'react';
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor(props){
    super(props);
    this.handlerClick = this.handlerClick.bind(this)
  }
  handlerClick(){
    const { deleteItem, index } = this.props;
    deleteItem(index);
  }
  shouldComponentUpdate(nextProps,nextState){
    if (nextProps.content !== this.props.content) {
      return true;
    }else{
      return false;
    }
  }
  render(){
    const { content } = this.props;
    return (
      <li onClick={this.handlerClick}>{content}</li>
    )
  }
}
TodoItem.propTypes = {
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
export default TodoItem;