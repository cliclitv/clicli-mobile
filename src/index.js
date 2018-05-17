import Vue from 'vue'
import router from './router'
import App from './app.vue'
import 'common/css/reset'
import 'common/css/index.css'
import fastclick from 'fastclick'

fastclick.attach(document.body)

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})