import React, { Component } from 'react';
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
class Header extends Component {
  render() {
    const {focused, mouseIn, list, page, handleFocus, handleBlur, handleMouse, handleMouseLeave, handleChangePage, totalPage} = this.props
    const jsList = list.toJS()
    const pageList = []
    if (jsList.length) {
      for (let i = (page - 1) * 10; i < page * 10; i ++) {
        if (jsList[i]) {
          pageList.push(<SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>)
        }
      }
    }
    let searchList = null
    if (focused || mouseIn) {
      searchList = (<SearchInfo onMouseEnter={handleMouse} onMouseLeave={handleMouseLeave}>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spin)}>
            <i ref={(icon) => {this.spin = icon}} className='iconfont refresh'>&#xe6dd;</i>
            换一批
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <div>
          {pageList}
        </div>
      </SearchInfo>)
    } else {
      searchList = null
    }
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
              <Navsearch className={focused ? 'focused' : ''} onFocus={() => handleFocus(list)} onBlur={handleBlur}/>
            </CSSTransition>
            <i className={focused ? 'iconfont search focused' : 'search iconfont'}>&#xe60a;</i>
            {searchList}
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
const mapStateToProps = (state) =>  {
  return { 
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus(list) {
      if (list.size === 0) {
        dispatch(actionCreate.getSearchAction())
      }
      dispatch(actionCreate.getInputFocusAction())
    },
    handleBlur() {
      dispatch(actionCreate.getInputBlurAction())
    },
    handleMouse() {
      dispatch(actionCreate.getMouseEnterAction())
    },
    handleMouseLeave() {
      dispatch(actionCreate.getMouseLeaveAction())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      }else{
        originAngle = 0
      }
      spin.style.transform = 'rotate('+originAngle+360+'deg)'
      if (page < totalPage) {
        dispatch(actionCreate.getChangePageAction(page+1))
      } else {
        dispatch(actionCreate.getChangePageAction(1))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
