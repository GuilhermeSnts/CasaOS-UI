/*
 * @Author: JerryK
 * @Date: 2021-09-22 14:24:43
 * @LastEditors: JerryK
 * @LastEditTime: 2021-09-26 18:06:22
 * @Description: 
 * @FilePath: /CasaOS-UI/src/main.js
 */
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import api from '@/service/api.js'
import Buefy from 'buefy'
import VueTour from 'vue-tour'
import '@/assets/scss/app.scss'
import 'vue-tour/dist/vue-tour.css'

Vue.use(Buefy)
Vue.use(VueTour)

Vue.config.productionTip = false
Vue.prototype.$api = api;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
