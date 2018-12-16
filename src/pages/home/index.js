import React, { Component } from 'react';
import { Content, ContentLeft, ContentRight } from './style.js';
class Home extends Component {
  render() {
    return (
      <Content>
        <ContentLeft>
          <img src="//upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner"/>
        </ContentLeft>
        <ContentRight></ContentRight>
      </Content>
    )
  }
}
export default Home