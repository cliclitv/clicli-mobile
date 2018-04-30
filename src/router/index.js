import Vue from 'vue'
import Router from 'vue-router'

import Idanmu from 'main/idanmu/idanmu'
import ArticleList from 'component/article-list/article-list'
import Home from 'component/home/home'
import Uraban from 'main/uraban/uraban'
import UrabanList from 'component/uraban-list/uraban-list'
import UrabanHome from 'component/uraban-home/uraban-home'

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
      component: Idanmu,
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
    },
    {
      path: '/uraban',
      component: Uraban,
      children: [
        {
          path: '/uraban',
          component: UrabanHome
        },
      ]
    }
  ]
})