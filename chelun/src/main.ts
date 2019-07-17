import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  preLoad: 1,
  error: 'img/timg.gif',
  loading: 'img/timg.gif',
  attempt: 1
}) // 挂在懒加载

Vue.config.productionTip = false
Vue.prototype.$store = store
Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
