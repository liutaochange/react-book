import React, { Component } from 'react';
import { RecommendWamp, RecommendItem } from '../style.js';
import { connect } from 'react-redux';
class Recommend extends Component {
  render() {
    const { recommendList } = this.props
    return (
      <RecommendWamp>
        {
          recommendList.map((item) => {
            return (
              <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
            )
          })
        }
      </RecommendWamp>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    recommendList: state.getIn(['home', 'recommendList'])
  }
}
export default connect(mapStateToProps, null)(Recommend)