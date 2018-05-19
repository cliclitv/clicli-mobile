import Vue from 'vue'
import router from './router'
import App from './app.vue'
import 'common/css/reset'
import 'common/css/index.css'


const flag = /^(?=.Safari)(?!.Chrome)/.test(navigator.userAgent)
if (!flag) {
  const VueLazyLoad = require('vue-lazyload')
  const fastclick = require('fastclick')
  Vue.use(VueLazyLoad, {
    loading: require('common/img/lazy.jpg')
  })
  fastclick.attach(document.body)
}

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
