import axios from 'axios'
const request = axios.create({
  baseURL: ' /api',
  timeout: 5000,
  withCredentials: true
})

// 获取首页数据
export const getSearchList = () => request.get('/searchList.json')
