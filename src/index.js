import Vue from 'vue'
import router from './router'
import App from './app.vue'
import 'common/styl/reset.styl'
import 'common/styl/index.styl'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  loading: require('common/img/lazy.jpg')
})

router.beforeEach((to, from, next) => {
  if (to.path) {
    _hmt.push(['_trackPageview', '/#' + to.fullPath])
  }
  next()
})

if(navigator.serviceWorker != null){
  navigator.serviceWorker.register('https://m.chinko.cc/sw.js')
    .then(function(registartion){
      console.log('sw注册成功:',registartion.scope)
    })
}

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
