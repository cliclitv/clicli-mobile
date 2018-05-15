import axios from 'axios'

export const req = axios.create({
  baseURL: 'https://www.idanmu.cc'
})

// 获取所有文章
export function articleList(page, pageSize) {
  return req.get('/article/article', {
    params: {
      page: page,
      pageSize: pageSize
    }
  })
}

// 根据作者获取文章
export function authorArticle(id) {
  return req.get('/article/author', {
    params: {
      id: id
    }
  })
}

// 根据分类查找文章

export function sortArticle(sort, page, pageSize) {
  return req.get('/article/sort', {
    params: {
      sort: sort,
      page: page,
      pageSize: pageSize
    }
  })
}

// 查找一篇文章
export function getOneArticle(id) {
  return req.get('/article/one', {
    params: {
      id: id
    }
  })
}

// 撰写增加文章

export function writeArticle(article) {
  return req.post('/article/write', article)
}

// 更新文章
export function update(article) {
  return req.post('/article/update', article)
}

// 删除一篇文章
export function deleteArticle(id) {
  return req.delete('/article/delete', {
    params: {
      id: id
    }
  })
}