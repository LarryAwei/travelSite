// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/reset.css'
import './assets/border.css'
import fastClick from 'fastclick'
import './assets/iconfont.css'
Vue.config.productionTip = false
fastClick.attach(document.body) // 三百毫秒延迟点击问题

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
