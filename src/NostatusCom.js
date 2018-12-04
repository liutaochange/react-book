import React from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
const AntDesignUI = (props) => {
  return (
    <div style={{ marginTop: '20px', marginLeft: '20px' }}>
      <div>
        <Input
          placeholder="Basic usage"
          style={{ width: '300px', marginRight: '20px' }}
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
        <Button type="primary" onClick={props.handleButtonClick}>提交</Button>
      </div>
      <List
        style={{ marginTop: '20px', width: '500px' }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (<List.Item onClick={() => { props.handleClickDelete(index) }}>{item}</List.Item>)}
      />
    </div>
  );
}
export default AntDesignUI