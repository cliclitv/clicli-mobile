import Vue from 'vue'
import Router from 'vue-router'

const Idanmu = () => import('main/idanmu/idanmu')
const Uraban = () => import('main/uraban/uraban')

const ArticleList = () => import('component/article-list/article-list')
const Home = () => import('component/home/home')
const UrabanHome = () => import('component/uraban-home/uraban-home')
const Post = () => import('component/post/post')
const UrabanPost = () => import('component/uraban-post/uraban-post')

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
          component: Home,
          children: [
            {
              path: ':id',
              component: Post,
            }
          ]
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
          path: '/uraban/home',
          component: UrabanHome,
          children: [
            {
              path: ':id',
              component: UrabanPost,
            }
          ]
        },
      ]
    }
  ]
})