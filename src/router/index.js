import Vue from 'vue'
import Router from 'vue-router'

const ArticleList = () => import('component/article-list/article-list')
const Home = () => import('component/home/home')
const Post = () => import('component/post/post')
const Sort = () => import('component/sort/sort')
const User = () => import('component/user/user')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: "home",
      component: Home,
      children: [
        {
          path: '/home/:id',
          name: "detail",
          component: Post
        }
      ]
    },
    {
      path: '/sort',
      name: "sort",
      component: Sort
    },
    {
      path: '/author',
      name: "author",
      component: ArticleList
    },
    {
      path: '/user',
      name: "user",
      component: User
    },
  ]
})