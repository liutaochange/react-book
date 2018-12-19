import axios from 'axios'
const request = axios.create({
  baseURL: ' /api',
  timeout: 5000,
  withCredentials: true
})

// 获取首页header 搜索推荐数据
export const getSearchList = () => request.get('/searchList.json')

// 获取首页 展示数据
export const getHomeList = () => request.get('/home.json')

// 点击加载更多
export const getMoreList = () => request.get('/homeList.json')

// 获取详情页数据
export const getDetailData = () => request.get('/detail.json')

// 模拟用户登录
export const userLogin = (user, word) => request.get('/login.json')