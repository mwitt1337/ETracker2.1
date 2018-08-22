import Vue from 'vue'
import Vuetify from 'vuetify'
import App from '@/App.vue'
import router from '@/router'
import auth from '@/services/auth'
import 'vuetify/dist/vuetify.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(auth)
Vue.use(Vuetify, {
  iconfont: 'fa'
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
