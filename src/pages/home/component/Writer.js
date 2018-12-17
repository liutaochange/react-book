import React, { Component } from 'react';
import { WriteWamp, WriteItem } from '../style.js';
class Writer extends Component {
  render() {
    return (
      <WriteWamp>
        <WriteItem></WriteItem>
      </WriteWamp>
    )
  }
}
export default Writer