import Vue from 'vue'
import router from './router'
import App from './app.vue'
import 'common/css/reset'
import 'common/css/index.css'
// const VueLazyLoad = require('vue-lazyload')
// const fastclick = require('fastclick')
import VueLazyLoad from 'vue-lazyload'
import fastclick from 'fastclick'

Vue.use(VueLazyLoad, {
  loading: require('common/img/lazy.jpg')
})
fastclick.attach(document.body)


new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
