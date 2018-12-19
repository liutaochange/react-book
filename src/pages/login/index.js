import React, { PureComponent } from 'react';
import { LoginWrapper, LoginWamp, LoginItem, LoginBtn } from './style.js';
import { connect } from 'react-redux';
import { actionCreate } from './store/index.js';
import { Redirect } from "react-router-dom";
class Detail extends PureComponent {
  render() {
    const { login, submitLoginEvent } = this.props
    if (!login) {
      return (
        <LoginWrapper>
          <LoginWamp>
            <LoginItem>
              <audio src="http://zhangmenshiting.qianqian.com/data2/music/3b3eb70d04f39948d04ad224959f1419/598143477/598143477.mp3?xcode=ade78fd83e9d33ae0d9b8f0c677c76d2" autoPlay></audio>
              <input placeholder="手机号或邮箱" type="text" name="" innerRef={name => { this.useName = name }}/>
            </LoginItem>
            <LoginItem>
              <input placeholder="密码" type="password" name="" innerRef={word => { this.passWord = word }}/>
            </LoginItem>
            <LoginBtn onClick={() => submitLoginEvent(this.useName, this.passWord)}>登录</LoginBtn>
          </LoginWamp>
        </LoginWrapper>
      )
    } else {
      return (<Redirect to='/' />)
    }
  }
}
const mapStateToProps = (state) => {
  return {
    login: state.getIn(['login', 'login']),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    submitLoginEvent(userName, passWord) {
      dispatch(actionCreate.submitLogin(userName, passWord))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)