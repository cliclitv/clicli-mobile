import Vue from 'vue'
import router from './router'
import App from './app.vue'
import 'common/css/index'
import 'common/css/reset'

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})