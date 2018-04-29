import Vue from 'vue'
import Router from 'vue-router'

import Home from 'component/home/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/idanmu',
      component: Home,
      children: [
        {
          path: '/home',
          component: Home
        }
      ]
    }
  ]
})