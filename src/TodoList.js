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
  handleChange(){
    // 之前的做法，可以理解为同步
    // this.setState({
    //   inputValue: e.target.value
    // });
    // 更推荐的做法，使用异步来解决
    // const value = e.target.value;
    // 我们也可以借助ref来实现
    const value = this.input.value;
    this.setState(() => ({
      inputValue: value
    }))
  }
  // 组件被挂载之前调用，早于render函数执行
  componentWillMount(){
    console.log('componentWillMount');
  }
  // 组件被挂载之后调用，晚于render函数执行
  componentDidMount(){
    console.log('componentDidMount');
  }
  // 组件接受新的state或者props时自动执行, 也早于render执行
  shouldComponentUpdate(nextProps, nextState){
    console.log('shouldComponentUpdate');
    return true;
  }
  /**
   * 组件更新之前调用，晚于shouldComponentUpdate执行，但是早于render执行
   * 如果shouldComponentUpdate返回true他就开始执行
   * 如果shouldComponentUpdate返回false他就不会被执行
   *  */
  componentWillUpdate(nextProps, nextState){
    console.log('componentWillUpdate');
  }
  // 组件更新完成之后执行
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
  deleteItem(index){
    // immutable
    // state 不允许做任何改变
    // setState 是异步函数，并且还有节流的操作
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      return {
        list
      }
    })
    // setState 还有第二个参数 是setState执行完毕之后的回调函数，如果无奈之下有操作dom的情况，可以放在这里执行，确保数据是最新的数据
    // this.setState((prevState) => {
    //   const list = [...prevState.list]
    //   list.splice(index, 1)
    //   return {
    //     list
    //   }
    // }, () => {
    //   console.log("data updated complete")
    // })
  }
  getTodoItem(){
    return this.state.list.map((item,index) => {
      return (
        <TodoItem content={item} index={index} deleteItem={this.deleteItem} key={item}/>
      )
    })
  }
  render() {
    console.log('render');
    return (
      <Fragment>
        {/* Fragment 是一个react内部的组件，类似于占位符 */}
        <div>
          {
            // for和class 与 react中的for和class冲突，所以需要替换为htmlFor和className
          }
          <label htmlFor="user">输入内容：</label>
          <input id="user" className='input' value={this.state.inputValue} onChange={this.handleChange} ref={(input) =>{this.input = input}}/>
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
