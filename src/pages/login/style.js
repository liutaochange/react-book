import styled from 'styled-components';
export const LoginWrapper = styled.div`
  background: #eee;
  position: absolute;
  top: 58px;
  left: 0;
  right:  0;
  bottom: 0;
  z-index: 0;
`
export const LoginWamp = styled.div`
  width: 400px;
  margin: 60px auto 0;
  padding: 60px 50px 60px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  box-sizing: border-box;
`

export const LoginItem = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  font-size: 15px;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  &:last-child{
    margin-bottom: 40px;
  }
  input{
    outline: none;
    border: none;
    width: 100%;
    text-indent: 20px;
  }
`

export const LoginBtn = styled.div`
  width: 100%;
  background: #ea6f5a;
  color: #fff;
  font-size: 20px;
  height: 50px;
  line-height: 50px;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
`