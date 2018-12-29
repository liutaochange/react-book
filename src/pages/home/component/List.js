import React, { PureComponent } from 'react';
import { ListWamp, ListItem, ListInfo, LoadMore } from '../style.js';
import { connect } from 'react-redux';
import { actionCreate } from '../store/index.js';
import { Link } from "react-router-dom";
class List extends PureComponent {
  render() {
    const { articleList, getMoreList } = this.props
    return (
      <ListWamp>
        {
          articleList.map((item) => {
            return (
              <Link key={item.get('id')} to={'/detail/' + item.get('slug')}>
                <ListItem className={item.get('thumbnails') === "" ? "noImg" : "hasImg"}>
                  <ListInfo>
                    <h3 className='title'>{item.get('title')}</h3>
                    <p className='desc'>{item.get('abstract')}</p>
                    <div className="meta">
                      <span>{item.get('author').get('nickname')}</span>
                      <span>评论： 18</span>      
                      <span>喜欢：19</span>
                    </div>
                  </ListInfo>
                  <img className='pic' src={item.get('thumbnails')} alt='' />
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={getMoreList}>更多</LoadMore>
      </ListWamp>
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