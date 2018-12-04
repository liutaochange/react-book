import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
class AntDesignUI extends Component {
  render() {
    return (
      <div style={{ marginTop: '20px', marginLeft: '20px' }}>
        <div>
          <Input
            placeholder="Basic usage"
            style={{ width: '300px', marginRight: '20px' }}
            value={this.props.inputValue}
            onChange={this.props.handleInputChange}
          />
          <Button type="primary" onClick={this.props.handleButtonClick}>提交</Button>
        </div>
        <List
          style={{ marginTop: '20px', width: '500px' }}
          bordered
          dataSource={this.props.list}
          renderItem={(item, index) => (<List.Item onClick={(index) => { this.props.handleClickDelete(index) }}>{item}</List.Item>)}
        />
      </div>
    );
  }
}
export default AntDesignUI