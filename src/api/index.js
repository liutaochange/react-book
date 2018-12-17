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