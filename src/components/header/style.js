import styled from 'styled-components';
import logoPic from '../../assets/images/logo.png'
export const HeaderWamp = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.a`
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
  overflow: hidden;
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

export const Navsearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  border-radius: 19px;
  border: none;
  outline: none;
  margin-top: 9px;
  padding: 0 20px;
  box-sizing: border-box;
  background: #eee;
  font-size: 15px;
  &::placeholder{
    color: #999;
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