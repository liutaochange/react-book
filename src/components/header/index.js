import React, { Component } from 'react';
import { HeaderWamp, Logo, Nav, NavItem, SearchWamp, Navsearch, Addition, Button } from './style.js'
class Header extends Component {
  render() {
    return (
      <HeaderWamp>
        <Logo href='/' />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWamp>
            <Navsearch />
            <i className="iconfont">&#xe60a;</i>
          </SearchWamp>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
        </Nav>
        <Addition>
          <Button className="write">
            <i className="iconfont">&#xe603;</i>
            写文章
          </Button>
          <Button className="signUp">注册</Button>
        </Addition>
      </HeaderWamp>
    )
  }
}
export default Header;
