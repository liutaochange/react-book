import styled from 'styled-components';
export const Content = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`
export const ContentLeft = styled.div`
  float: left;
  width: 625px;
  margin-left: 15px;
  img{
    width: 625px;
    height: 270px;
    display: inline-block;
    vertical-align: top;
  }
`
export const ContentRight = styled.div`
  width: 240px;
  float: right;
`

export const TopicWamp = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  background: #f7f7f7;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  margin: 0 18px 10px 0;
  padding-right: 10px;
  overflow: hidden;
  .topicImg{
    display: block;
    width: 80px;
    height: 100%;
    float: left;
    margin-right: 10px;
  }
`