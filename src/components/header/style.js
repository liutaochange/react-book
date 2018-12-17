import styled from 'styled-components';
import logoPic from '../../assets/images/logo.png'
export const HeaderWamp = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic}) center center no-repeat;
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  padding-right: 70px;
  box-sizing: border-box;
  margin: 0 auto;
`

export const NavItem = styled.div`
  height: 56px;
  line-height: 26px;
  padding: 15px;
  color: #333;
  font-size: 17px;
  cursor: pointer;
  &.left{
    float: left;
  }
  &.right{
    float: right;
    color: #969696;
  }
  &.active{
    color: #ea6f5a;
  }
`

export const SearchWamp = styled.div`
  float: left;
  position: relative;
  .search{
    position: absolute;
    top: 13px;
    right: 5px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    padding: 0;
    color: #999;
    text-align: center;
    &.focused{
      color: #fff;
      background: #969696;
    }
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 0;
  top: 56px;
  width: 240px;
  padding: 0 20px 10px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  border-radius: 4px;
`

export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  font-size: 14px;
  color: #969696;
  .refresh{
    display: inline-block;
    font-size: 14px;
    margin-right: 5px;
    color: #969696;
    transition: all .3s ease-in;
    transform-origin: center;
  }
`

export const SearchInfoSwitch = styled.span`
  font-size: 13px;
  float: right;
  cursor: pointer;
`

export const SearchInfoItem = styled.a`
  margin-right: 10px;
  margin-bottom: 10px;
  display: inline-block;
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
`

export const Navsearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border-radius: 19px;
  border: none;
  outline: none;
  margin-top: 9px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  background: #eee;
  font-size: 15px;
  color: #777;
  &::placeholder{
    color: #999;
  }
  &.focused{
    width: 240px;
  }
  &.slider-enter{
    transition: all .2s ease;
  } 
  &.slider-enter-active{
    width: 240px;
  }  
  &.slider-exit{
    transition: all .2s ease;
  } 
  &.slider-exit-active{
    width: 160px;
  }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top:  0;
`

export const Button = styled.div`
  float: right;
  line-height: 38px;
  border-radius: 19px;
  margin: 9px 15px 0;
  text-align: center;
  border: 1px solid rgba(236,97,73,.7);
  cursor: pointer;
  &.write{
    width: 100px;
    color: #fff;
    background-color: #ea6f5a;
  }
  &.signUp{
    width: 80px;
    height: 38px;
    color: #ea6f5a;
  }
`