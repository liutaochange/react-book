import React, { Component } from 'react';
import { ListWamp, ListItem, ListInfo, LoadMore } from '../style.js';
import { connect } from 'react-redux';
import { actionCreate } from '../store/index.js';
class List extends Component {
  render() {
    const { articleList, getMoreList } = this.props
    return (
      <div>
        <ListWamp>
          {
            articleList.map((item) => {
              return (
                <ListItem key={item.get('id')}>
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('desc')}</p>
                  </ListInfo>
                  <img className='pic' src={item.get('imgUrl')} alt=''/>
                </ListItem>
              )
            })
          }
          <LoadMore onClick={getMoreList}>更多</LoadMore>
        </ListWamp>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList']),
    moreList: state.getIn(['home', 'moreList'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList() {
      dispatch(actionCreate.getMoreData())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)