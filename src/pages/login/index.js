import React, { PureComponent } from 'react';
import { LoginWamp, LoginItem } from './style.js';
import { connect } from 'react-redux';
import { actionCreate } from './store/index.js';
class Detail extends PureComponent {
  render() {
    const { title, content } = this.props
    console.log(this.props.match.params.id)
    return (
      <LoginWamp>
				<LoginItem>
          <div class="input-prepend restyle js-normal">
            <input placeholder="手机号或邮箱" type="text" name="session[email_or_mobile_number]" id="session_email_or_mobile_number" />
            <i class="iconfont ic-user"></i>
          </div>
          <div class="input-prepend">
            <input placeholder="密码" type="password" name="session[password]" id="session_password" />
            <i class="iconfont ic-password"></i>
          </div>
        </LoginItem>
			</LoginWamp>
    )
  }
  componentDidMount() {
    this.props.getDetails()
  }
}
const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getDetails() {
      dispatch(actionCreate.getDetail())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Detail)