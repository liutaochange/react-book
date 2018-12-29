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
  width: 280px;
  float: right;
`

export const TopicWamp = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  border-bottom: 1px solid #bcbcbc;
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
export const ListWamp = styled.div`
  padding-bottom: 20px;
`

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #bcbcbc;
  overflow: hidden;
  .pic{
    float: right;
    width: 125px;
    height: 100px;
    display: block;
  }
  &.noImg{
    .pic{
      display: none;
    }
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
    font-size: 18px;
    line-height: 27px;
    color: #333;
    font-weight: bold;
  }
  .desc{
    line-height: 18px;
    font-size: 13px;
    color: #999;
  }
  .meta{
    padding-top: 16px;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    span{
      margin-right: 10px;
      color: #b4b4b4;
    }
  }
`

export const LoadMore = styled.div`
  width: 100%;
  line-height: 40px;
  height: 40px;
  text-align: center;
  background: #a5a5a5;
  border-radius: 20px;
  color: #fff;
  margin: 30px auto;
  cursor: pointer;
`

export const RecommendWamp = styled.div`
  width: 280px;
  margin-bottom: 30px;
  overflow: hidden;
`

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl}) center center no-repeat;
  background-size: cover;
  margin-bottom: 20px;
`

export const WriteWamp = styled.div`
  width: 278px;
  border: 1px solid #bcbcbc;
  border-radius: 4px;
  height: 300px;
  line-height: 300px;
  text-align: center;
`

export const WriteItem = styled.div`
  width: 100%;
`

export const BackTop = styled.div`
  position: fixed;
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  border: 1px solid #ccc;
  border-radius: 5px;
  right: 20px;
  bottom: 60px;
  cursor: pointer;
`