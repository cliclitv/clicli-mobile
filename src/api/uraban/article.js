import axios from 'axios'

export const request = axios.create({
  baseURL: 'https://www.uraban.me/api'
})

// 获取所有文章
export function getAll(page, pageSize) {
  return request.get('/posts', {
    params: {
      page: page,
      pageSize: pageSize
    }
  })
}

export function getOneArticle(id) {
  return request.get('/post', {
    params: {
      cid: id
    }
  })
}