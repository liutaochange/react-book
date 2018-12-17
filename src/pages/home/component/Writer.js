import React, { PureComponent } from 'react';
import { WriteWamp, WriteItem } from '../style.js';
class Writer extends PureComponent {
  render() {
    return (
      <WriteWamp>
        <WriteItem></WriteItem>
      </WriteWamp>
    )
  }
}
export default Writer