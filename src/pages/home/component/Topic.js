import React, { Component } from 'react';
import { TopicWamp, TopicItem } from '../style.js';
import { connect } from 'react-redux';
class Topic extends Component {
  render() {
    const { topicList } = this.props
    return (
      <div>
        <TopicWamp>
          {
            topicList.map((item) => {
              return (
                <TopicItem key={item.get('id')}>
                  <img className='topicImg' src={item.get('imgUrl')} alt="topic"/>
                  {item.get('title')}
                </TopicItem>
              )
            })
          }
        </TopicWamp>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    topicList: state.getIn(['home', 'topicList'])
  }
}
export default connect(mapStateToProps, null)(Topic)