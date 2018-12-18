import React, { PureComponent } from 'react';
import { Content, ContentLeft, ContentRight, BackTop } from './style.js';
import List from './component/List.js';
import Topic from './component/Topic.js';
import Recommend from './component/Recommend.js';
import Writer from './component/Writer.js';
import { connect } from 'react-redux';
import { actionCreate } from './store/index.js';
class Home extends PureComponent {
  render() {
    const { showScroll } = this.props
    return (
      <Content>
        <ContentLeft>
          <img src="//upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner"/>
          <Topic />
          <List />
        </ContentLeft>
        <ContentRight>
          <Recommend />
          <Writer />
        </ContentRight>
        { showScroll ? <BackTop onClick={this.scrollTop}>顶部</BackTop> : null }
      </Content>
    )
  }
  scrollTop() {
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth" 
    });
  }
  bindEvents() {
    window.addEventListener('scroll', this.props.changeScroll)
  }
  componentDidMount() {
    this.props.getHomeList()
    this.bindEvents()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScroll)
  }
}
const mapStateToProps = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getHomeList() {
      dispatch(actionCreate.getList())
    },
    changeScroll() {
      let top = document.documentElement.scrollTop;
      if (top > 100) {
        dispatch(actionCreate.changeScrollFlag(true))
      } else {
        dispatch(actionCreate.changeScrollFlag(false))
      }
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);