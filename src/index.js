import Vue from 'vue'
import router from './router'
import App from './app.vue'
import 'common/styl/reset.styl'
import 'common/styl/index.styl'
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'

Vue.use(VueLazyLoad, {
  loading: require('common/img/lazy.jpg')
})
fastclick.attach(document.body)

router.beforeEach((to, from, next) => {
  if (to.path) {
    _hmt.push(['_trackPageview', '/#' + to.fullPath])
  }
  next()
})

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
