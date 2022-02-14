import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入element组件
import './plugins/element.js'
import './assets/css/global.css'

import VueAwesomeSwiper from 'vue-awesome-swiper'

// import style
import 'swiper/css/swiper.css'
import AsideBar from './components/asideBar.vue'
import TabBar from './components/tabBar.vue'
import MyFooter from './components/footer.vue'
import Pagination from './components/pagination.vue'
import Custom from './components/custom.vue'
// import './request'
import axios from 'axios'
Vue.prototype.$http = axios

Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

Vue.component('AsideBar', AsideBar)
Vue.component('TabBar', TabBar)
Vue.component('MyFooter', MyFooter)
Vue.component('Pagination', Pagination)
Vue.component('Custom', Custom)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
