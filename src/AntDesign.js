import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import Store from './store/index.js';
class AntDesign extends Component {
  constructor(props) {
    super(props)
    this.state = Store.getState()
  }
  render() {
    return (
      <div style={{ marginTop: '20px', marginLeft: '20px' }}>
        <div>
          <Input placeholder="Basic usage" style={{ width: '300px', marginRight: '20px' }} />
          <Button type="primary">提交</Button>
        </div>
        <List
          style={{ marginTop: '20px', width: '500px' }}
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    );
  }
}
export default AntDesign