import React, { PureComponent } from 'react';
import { LoginWrapper, LoginWamp, LoginItem, LoginBtn } from './style.js';
import { connect } from 'react-redux';
import { actionCreate } from './store/index.js';
import { Redirect } from "react-router-dom";
class Detail extends PureComponent {
  render() {
    const { login, submitLoginEvent, play } = this.props
    if (!login) {
      return (
        <LoginWrapper>
          <video controls ref={(video) => { this.audioValue = video; }}  loop  autoPlay="autoplay" name="media" src="https://oss.guzheng.cn/mp3/gz111212/mp3/hu10112/chenleishi-13liushui.mp3" onLoad ={() => play(this.audioValue)}></video>
          <LoginWamp>
            <LoginItem>
              <input placeholder="手机号或邮箱" type="text" name="" ref={name => { this.useName = name }}/>
            </LoginItem>
            <LoginItem>
              <input placeholder="密码" type="password" name="" ref={word => { this.passWord = word }}/>
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
    },
    paly(audioValue) {
      audioValue.play()
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)