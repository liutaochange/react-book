import React, { Component, Fragment } from 'react';
import TodoItem from './TodoListItem.js'
import axios from 'axios'
import './style.css'
class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: [],
      inputValue: 'hello'
    };
    this.onClickButton = this.onClickButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  onClickButton(){
    // 借助于prevState
    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));
  }
  handleChange(e){
    // 之前的做法，可以理解为同步
    // this.setState({
    //   inputValue: e.target.value
    // });
    // 更推荐的做法，使用异步来解决
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }))
  }
  deleteItem(index){
    // immutable
    // state 不允许做任何改变
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
  }
  getTodoItem(){
    /* 注意： 此场景涉及增加和删除元素，所以key值不能使用index */
    return this.state.list.map((item,index) => {
      return (
        <TodoItem content={item} index={index} deleteItem={this.deleteItem} key={item}/>
      )
    })
  }
  // 组件挂载完成，可以在此时发送ajax请求
  componentDidMount(){
    axios.get('http://localhost:5566/api/todolist')
      .then((res) => {
        if (res.data.code === 1) {
          this.setState(() => ({
              list: [...res.data.data]
          }))
        }
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <Fragment>
        {/* Fragment 是一个react内部的组件，类似于占位符 */}
        <div>
          {
            // for和class 与 react中的for和class冲突，所以需要替换为htmlFor和className
          }
          <label htmlFor="user">输入内容：</label>
          <input id="user" className='input' value={this.state.inputValue} onChange={this.handleChange} />
          <button type="button" onClick={this.onClickButton}>提交</button>
        </div>
        <ul>
          {/*禁止标签转义的写法 return <li key={item} onClick={this.deleteItem.bind(this,index)} dangerouslySetInnerHTML={{__html: item}}></li>*/}
          {/*通过组件的方式引入*/}
          {/*<li key={item} onClick={this.deleteItem.bind(this,index)}>{item}</li>*/}
          {this.getTodoItem()}
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
