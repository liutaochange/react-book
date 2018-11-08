import React, { Component, Fragment } from 'react';
import TodoItem from './TodoListItem.js'
import Test from './Test.js'
import './style.css'
class TodoList extends Component {
  constructor(props){
    // 当组件的props和state发生改变时，render函数就会重新执行
    super(props)
    this.state = {
      list: ["学英语","学react"],
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
    return this.state.list.map((item,index) => {
      return (
        <TodoItem content={item} index={index} deleteItem={this.deleteItem} key={index}/>
      )
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
          {/*禁止标签转义的写法 return <li key={index} onClick={this.deleteItem.bind(this,index)} dangerouslySetInnerHTML={{__html: item}}></li>*/}
          {/*通过组件的方式引入*/}
          {/*<li key={index} onClick={this.deleteItem.bind(this,index)}>{item}</li>*/}
          {this.getTodoItem()}
        </ul>
        <Test content={this.state.inputValue}/>
      </Fragment>
    );
  }
}

export default TodoList;
