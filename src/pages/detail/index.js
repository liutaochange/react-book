import React, { PureComponent } from 'react';
import { DetailWamp, DetailHeader, DetailContent } from './style.js';
import { connect } from 'react-redux';
import { actionCreate } from './store/index.js';
class Detail extends PureComponent {
  render() {
    const { title, content } = this.props
    return (
      <DetailWamp>
				<DetailHeader>{title}</DetailHeader>
				<DetailContent 
					dangerouslySetInnerHTML={{__html: content}}
				/>
			</DetailWamp>
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