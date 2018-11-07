import React, { Component, Fragment } from 'react';
import './style.css'
class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: ["学英语","学react"],
      inputValue: 'hello'
    };
    this.onClickButton = this.onClickButton.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onClickButton(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    });
  }
  handleChange(e){
    this.setState({
      inputValue: e.target.value
    });
  }
  deleteItem(index){
    // immutable
    // state 不允许做任何改变
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
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
          {/* 禁止标签转义的写法 return <li key={index} onClick={this.deleteItem.bind(this,index)} dangerouslySetInnerHTML={{__html: item}}></li>*/}
          {
            this.state.list.map((item,index) => {
              return <li key={index} onClick={this.deleteItem.bind(this,index)}>{item}</li>
            })
          }
        </ul>
      </Fragment>
    );
  }
}

export default TodoList;
