import Vue from 'vue'
import Router from 'vue-router'

import Home from 'main/idanmu/idanmu'
import ArticleList from 'component/article-list/article-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/idanmu/home'
    },
    {
      path: '/idanmu',
      redirect: '/idanmu/home'
    },
    {
      path: '/idanmu',
      component: Home,
      children: [
        {
          path: '/idanmu/home',
          component: Home
        },
        {
          path: '/idanmu/sort',
          component: ArticleList
        },
        {
          path: '/idanmu/author',
          component: ArticleList
        },
        {
          path: '/idanmu/me',
          component: ArticleList
        }
      ]
    }
  ]
})