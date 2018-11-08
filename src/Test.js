import React, {Component} from 'react';
class Test extends Component {
  // 当父组件的render函数运行时，子组件的render函数也将被重新运行一次
  render() {
    return (
      // jsx -> React.createElement -> Virtual Dom(js 对象) -> 真实的Dom对象
      <div>{this.props.content}</div>
    )
  }
}
export default Test;