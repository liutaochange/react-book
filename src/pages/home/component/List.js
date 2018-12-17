import React, { Component } from 'react';
import { ListWamp, ListItem, ListInfo } from '../style.js';
import { connect } from 'react-redux';
class List extends Component {
  render() {
    const { articleList } = this.props
    return (
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
      </ListWamp>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    articleList: state.getIn(['home', 'articleList'])
  }
}
export default connect(mapStateToProps, null)(List)