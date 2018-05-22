import Vue from 'vue'
import router from './router'
import App from './app.vue'
import 'common/css/reset.css'
import 'common/css/index.css'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'
import {tongji} from 'common/js/tongji'

Vue.use(VueLazyLoad, {
  loading: require('common/img/lazy.jpg')
})
fastclick.attach(document.body)

// 百度统计
router.afterEach(() => {
  setTimeout(() => {
    tongji()
  }, 0)
})

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
