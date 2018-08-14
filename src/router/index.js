import Vue from 'vue'
import Router from 'vue-router'

const ArticleList = () => import('component/article-list/article-list')
const Home = () => import('component/home/home')
const Post = () => import('component/post/post')
const Sort = () => import('component/sort/sort')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/'
    },
    {
      path: '/home/',
      component: Home,
      children: [
        {
          path: ':id',
          component: Post
        }
      ]
    },
    {
      path: '/sort',
      component: Sort
    },
    {
      path: '/author',
      component: ArticleList
    },
    {
      path: '/me',
      component: ArticleList
    },
  ]
})