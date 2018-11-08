import React, { Component } from 'react';
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
    const { content } = this.props;
    return (
      <li onClick={this.handlerClick}>{content}</li>
    )
  }
}
export default TodoItem;