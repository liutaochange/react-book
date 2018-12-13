import React, { Component } from 'react';
import { HeaderWamp, Logo, Nav, NavItem, SearchWamp, Navsearch, Addition, Button } from './style.js';
import { CSSTransition } from 'react-transition-group';
class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      focused: false
    }
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }
  handleFocus() {
    this.setState(() => ({
      focused: true
    }))
  }
  handleBlur() {
    this.setState(() => ({
      focused: false
    }))
  }
  render() {
    return (
      <HeaderWamp>
        <Logo href='/' />
        <Nav>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWamp>
            <CSSTransition
              in={this.state.focused}
              timeout={200}
              classNames="slider"
              >
              <Navsearch className={this.state.focused ? 'focused' : ''} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
            </CSSTransition>
            <i className={this.state.focused ? 'iconfont focused' : 'iconfont'}>&#xe60a;</i>
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
