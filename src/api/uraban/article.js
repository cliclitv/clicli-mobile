import axios from 'axios'

const request = axios.create({
  baseURL: 'https://www.uraban.me/api'
})

// 获取所有文章
export function getAll() {
  return request.get('/posts')
}