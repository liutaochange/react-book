import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import Store from './store/index.js';
import { getInputChangeAction, getAddItemAction, getDeleteItemAction } from './store/actionCreate.js';
class AntDesign extends Component {
  constructor(props) {
    super(props)
    this.state = Store.getState()
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    Store.subscribe(this.handleStoreChange)
  }
  handleInputChange(e) {
    const action = getInputChangeAction(e.target.value)
    Store.dispatch(action)
  }
  handleStoreChange() {
    this.setState(Store.getState())
  }
  handleButtonClick() {
    const action = getAddItemAction()
    Store.dispatch(action)
  }
  handleClickDelete(index) {
    const action = getDeleteItemAction(index)
    Store.dispatch(action)
  }
  render() {
    return (
      <div style={{ marginTop: '20px', marginLeft: '20px' }}>
        <div>
          <Input
            placeholder="Basic usage"
            style={{ width: '300px', marginRight: '20px' }}
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <Button type="primary" onClick={this.handleButtonClick}>提交</Button>
        </div>
        <List
          style={{ marginTop: '20px', width: '500px' }}
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (<List.Item onClick={this.handleClickDelete.bind(this, index)}>{item}</List.Item>)}
        />
      </div>
    );
  }
}
export default AntDesign