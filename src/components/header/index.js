import React, { Component } from 'react';
import { HeaderWamp, Logo, Nav, NavItem, Navsearch, Addition, Button } from './style.js'
class Header extends Component {
  render() {
    return (
      <HeaderWamp>
        <Logo href='/' />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <Navsearch />
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">Aa</NavItem>
        </Nav>
        <Addition>
          <Button className="write">写文章</Button>
          <Button className="signUp">注册</Button>
        </Addition>
      </HeaderWamp>
    )
  }
}
export default Header;
