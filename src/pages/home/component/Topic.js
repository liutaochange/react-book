import React, { Component } from 'react';
import { TopicWamp, TopicItem } from '../style.js';
import { connect } from 'react-redux';
class Topic extends Component {
  render() {
    const { topicList } = this.props
    return (
      <TopicWamp>
        {
          topicList.map((item) => {
            return (
              <TopicItem>
                <img className='topicImg' src={item.get('imgUrl')} alt="topic"/>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
      </TopicWamp>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    topicList: state.get('home').get('topicList')
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getTopicList() {
      dispatch()
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Topic)