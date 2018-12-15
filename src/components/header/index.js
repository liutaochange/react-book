import React from 'react';
import { 
  HeaderWamp, 
  Logo, 
  Nav, 
  NavItem, 
  SearchWamp, 
  Navsearch, 
  SearchInfo, 
  SearchInfoTitle, 
  SearchInfoSwitch,
  SearchInfoItem,
  Addition, 
  Button
} from './style.js';
import { actionCreate } from './store/index.js';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
const getSearchList = (show, list) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <div>
          {
            list.map((item) => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>
            })
          }
        </div>
      </SearchInfo>
    )
  }else {
    return null
  }
}
const Header = (props) => {
  const {focused, list, handleFocus, handleBlur} = props
  return (
    <HeaderWamp>
      <Logo href='/' />
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <SearchWamp>
          <CSSTransition
            in={focused}
            timeout={200}
            classNames="slider"
            >
            <Navsearch className={focused ? 'focused' : ''} onFocus={handleFocus} onBlur={handleBlur}/>
          </CSSTransition>
          <i className={focused ? 'iconfont focused' : 'iconfont'}>&#xe60a;</i>
          {getSearchList(focused, list)}
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
const mapStateToProps = (state) =>  {
  return { 
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus() {
      dispatch(actionCreate.getSearchAction())
      dispatch(actionCreate.getInputFocusAction())
    },
    handleBlur() {
      dispatch(actionCreate.getInputBlurAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
